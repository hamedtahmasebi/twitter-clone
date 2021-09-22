const mongoose = require("mongoose");
const tweetModel = require("./tweetModel");
const replySchema = new mongoose.Schema({
  replyTweet: tweetModel.TweetSchema,
  refrenceTweetId: String,
});

module.exports = mongoose.model("Reply", replySchema);
