const express = require("express");
const router = express.Router();

const {
  createFood,
  getFoods,
} = require("../controllers/foodController");

// CREATE a food
router.post("/", createFood);

// GET all foods
router.get("/", getFoods);

module.exports = router;
