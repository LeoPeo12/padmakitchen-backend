const express = require("express");
const app = express();

app.use(express.json());

const userRoutes = require("./routes/userRoutes");

app.use("/api/users", userRoutes);

app.get("/", (req, res) => {
    res.send("API is running");
});

module.exports = app;