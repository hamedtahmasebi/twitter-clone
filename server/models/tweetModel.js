const mongoose = require("mongoose");

const TweetSchema = new mongoose.Schema({
  typeOfTweet: { type: String, default: "tweet" },
  date: Date,
  userName: String,
  userAddress: String,
  tweetText: String,
  likes: { type: Number, default: 0 },
  retweets: { type: Number, default: 0 },
  replies: { type: Number, default: 0 },
  isBookmarked: { type: Boolean, default: false },
  isRetweeted: { type: Boolean, default: false },
  isLiked: { type: Boolean, default: false },
});
const TweetModel = mongoose.model("Tweet", TweetSchema);

module.exports = { TweetSchema, TweetModel };
