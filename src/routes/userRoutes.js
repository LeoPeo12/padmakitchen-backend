const express = require("express");
const router = express.Router();

//const { router } = require("../app");
const {createUser} = require("../controllers/userController");

router.post("/", createUser);

module.exports = router;