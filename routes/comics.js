require("dotenv").config();
const express = require("express");
const router = express.Router();
const axios = require("axios");

router.get("/comics", async (req, res) => {
  try {
    // console.log(req.query);
    const limit = req.query.limit || 100;
    const skip = req.query.skip || 0;
    const title = req.query.title || "";
    const response = await axios.get(
      `${process.env.MARVEL_PUBLIC_API_KEY}/comics?apiKey=${process.env.MARVEL_PERSONAL_API_KEY}&limit=${limit}&skip=${skip}&title=${title}`
    );
    res.json(response.data);
  } catch (error) {
    // console.log(error.message);
    res.status(500).json({ message: error.message });
  }
});

router.get("/comics/:characterId", async (req, res) => {
  try {
    // console.log(req.params);

    const response = await axios.get(
      `${process.env.MARVEL_PUBLIC_API_KEY}/comics/${req.params.characterId}?apiKey=${process.env.MARVEL_PERSONAL_API_KEY}`
    );
    // console.log("comics character ==>", response.data);

    res.json(response.data);
  } catch (error) {
    // console.log(error.message);
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
