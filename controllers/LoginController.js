const User = require("../models/MainModel");
const bcrypt = require("bcrypt");
const secretData = require("../config/custom-environment-variables.json");

// Login

const login = async (req, res) => {
  try {
    // If the unique email in database
    let user = await User.findOne({ email: req.body.email }).exec();

    if (!user) {
      console.log("Invalid Email");
      return res.status(400).send("Invalid Email or Password");
    }
    // Check if password is right
    let pass = await bcrypt.compare(req.body.password, user.password);
    if (!pass) {
      console.log("Invalid Password");
      return res.status(400).send("Invalid Email or Password");
    }
    if (!secretData.jwtSecret) {
      return res.status(500).send("Token is not defined");
    }
    let token = user.generateAuthToken();
    res.header("x-authentication-token", token);
    res.status(200).send("Logged In");
  } catch (err) {
    console.log(err);
  }
};

module.exports = { login };
