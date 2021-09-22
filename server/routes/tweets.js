const express = require("express");
// models
const TweetModel = require("../models/tweetModel");
const Tweet = TweetModel.TweetModel;
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const result = await Tweet.find();

    res.send(result.reverse());
  } catch (err) {
    res.status(500).send(err);
  }
});

router.post("/", async (req, res) => {
  const newTweet = new Tweet(req.body);
  try {
    const result = await newTweet.save();
    res.send(result);
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
});

router.put("/", async (req, res) => {
  try {
    const result = await Tweet.findOneAndUpdate(
      { _id: req.body._id },
      { ...req.body },
      { new: true }
    );
    res.status(200).send(result);
  } catch (error) {
    res.status(500).send(err);
  }
});

router.delete("/:_id", async (req, res) => {
  const { _id } = req.params;
  try {
    const result = await Tweet.deleteOne({ _id: _id });
    res.send(result);
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = router;
