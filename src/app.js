const express = require("express");
const app = express();

app.use(express.json());

// routes
const foodRoutes = require("./routes/foodRoutes");

app.use("/api/foods", foodRoutes);

module.exports = app;