const express = require("express");
// models
const Reply = require("../models/replyModel");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const result = await Reply.find();
    res.status(200).send(result);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.post("/", async (req, res) => {
  const reply = new Reply({
    ...req.body,
  });
  try {
    const result = await reply.save();
    res.status(200).send(result);
  } catch (error) {
    res.status(500).send(error);
  }
});
router.put("/", async (req, res) => {
  try {
    const result = await Reply.findOneAndUpdate(
      { _id: req.body._id },
      { ...req.body },
      { new: true }
    );
    res.status(200).send(result);
  } catch (error) {
    res.status(500).send(err);
  }
});
module.exports = router;
