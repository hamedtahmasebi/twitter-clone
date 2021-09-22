const mongoose = require("mongoose");

const NotifSchema = mongoose.Schema({
  notifType: String,
  user: String,
  tweet: String,
});

module.exports = mongoose.model("Notif", NotifSchema);
