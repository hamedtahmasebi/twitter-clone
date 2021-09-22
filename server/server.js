// packages
require("dotenv").config();
const path = require("path");
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
// models
const app = express();
app.use(bodyParser.json());
app.use(express.static(path.resolve(__dirname, "../client/build")));

const PORT = process.env.PORT || 5000;
mongoose.connect(
  process.env.MONGODB_URI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  function () {
    console.log("DB connected");
  }
);
// Tweets CRUD
app.use("/api/tweets", require("./routes/tweets"));
app.use("/api/replies", require("./routes/replies"));

if (process.env.NODE_ENV === "production") {
  app.use(express.static("../client/build"));
}

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../client/build", "index.html"));
});
app.listen(PORT, console.log("server started at port" + PORT));
