require("dotenv").config();
const express = require("express");
const router = express.Router();
const axios = require("axios");

router.get("/characters", async (req, res) => {
  try {
    // console.log(req.query);
    const limit = req.query.limit || 100;
    const skip = req.query.skip || 0;
    const name = req.query.name || "";
    const response = await axios.get(
      `${process.env.MARVEL_PUBLIC_API_KEY}/characters?apiKey=${process.env.MARVEL_PERSONAL_API_KEY}&limit=${limit}&skip=${skip}&name=${name}`
    );
    res.json(response.data);
    // console.log("characters ==>", response.data);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
});

router.get("/character/:id", async (req, res) => {
  try {
    // console.log(req.params);
    // console.log(req.query);

    const response = await axios.get(
      `${process.env.MARVEL_PUBLIC_API_KEY}/character/${req.params.id}?apiKey=${process.env.MARVEL_PERSONAL_API_KEY}`
    );
    res.json(response.data);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
