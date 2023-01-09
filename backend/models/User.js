const mongoose = require("mongoose");

const User_Schema = new mongoose.Schema({
  name: {
    type: String,
    Required: [true, "please enter your name"],
  },
  email: {
    type: String,
    Required: [true, "please enter your name"],
  },
  password: {
    type: String,
    Required: [true, "please enter the password"],
  },
  avatar: {
    url: {
      type: String,
    },
    public_id: {
      type: String,
    },
  },
});

module.exports = mongoose.model("user", User_Schema);
