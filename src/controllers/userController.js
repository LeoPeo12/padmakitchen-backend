const User = require("../models/User");

//@desc Create new user
//@route POST /api/user

const createUser = async (req, res) => {
    try{
        const { name, phone, address } = req.body;

        if(!name || !phone || !address) {
            return res.status(400).json({message:"All field are required"});
        }

        const userExists = await User.findOne({phone});
        if(userExists){
            return res.status(409).json({message: "User already exists"});
        }

        const user = await User.create({name, phone, address });

        res.status(201).json(user);
    } catch(error){
        res.status(500).json({message:error.message});
    }
};

module.exports = { createUser };