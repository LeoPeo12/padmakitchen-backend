//recieve request from routes, talk to the model,sends response back (brain between road(routes)and data(models))
const Food = require("../models/Food");

const createFood = async (req , res) => {
  try{
    const food = await Food.create(req.body);

    res.status(201).json({
      success: true,
      data: food,
    });
  } catch (error){
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

const getFoods = async (req, res) => {
  try{
    const foods = await Food.find();

    res.status(200).json({
      success: true,
      count: foods.length,
      data: foods,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  createFood,
  getFoods,
};