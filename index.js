require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

// mongoose.connect(process.env.MONGODB_URI);

const characterRoutes = require("./routes/character");
const comicsRoutes = require("./routes/comics");
app.use(characterRoutes);
app.use(comicsRoutes);

app.get("/", (req, res) => {
  res.json("Welcome to the Marvel API 🦸‍♂️");
});

app.all("*", (req, res) => {
  res.status(404).json({ message: "This route does not exist" });
});

app.listen(process.env.PORT, () => {
  console.log("Server started on port: " + process.env.PORT);
});
