const User = require("../models/User.js");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const sign_in = async (req, res) => {
  const { email, password } = req.body;
  console.log(email, password);
  try {
    let user = await User.findOne({ email }).select("+password");

    if (!user) {
      return res.json({
        success: false,
        message: "user doesn't exist",
      });
    }
    if (await bcrypt.compare(password, user.password)) {
      //sending cookie
      let token = jwt.sign(
        {
          id: user._id,
        },
        process.env.Secret_Key
      );
      let token_option = {
        expire: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000),
        httpOnly: true,
      };
      return res.cookie("token", token, token_option).json({
        success: true,
        user,
      });
    } else {
      return res.json({
        success: false,
        message: "password doesn't match",
      });
    }
  } catch (err) {
    return res.json({
      success: false,
      message: err.message,
    });
  }
};

const sign_up = async (req, res) => {
  const { name, email, password } = req.body;
  let new_user = await User.findOne({ email });
  if (new_user) {
    return res.json({
      success: false,
      message: "user already exist",
    });
  }
  try {
    let hash_password = await bcrypt.hash(password, 10);
    new_user = await User.create({
      name,
      email,
      password: hash_password,
    });
    //sending cookie
    let token = jwt.sign(
      {
        id: new_user._id,
      },
      process.env.Secret_Key
    );
    let token_option = {
      expire: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000),
      httpOnly: true,
    };
    return res.cookie("token", token, token_option).json({
      success: true,
      new_user,
    });
  } catch (err) {
    return res.json({
      success: false,
      message: err.message,
    });
  }
};

const sign_out = async (req, res) => {
  res.clearCookie("token").json({
    success: true,
    message: "signed out successfully",
  });
};

module.exports = { sign_in, sign_up, sign_out };
