const User = require("../models/MainModel");
const bcrypt = require("bcrypt");
const secretData = require("../config/custom-environment-variables.json");

// Register New User
const addUser = async (req, res) => {
  try {
    let user = await User.findOne({ email: req.body.email }).exec();

    if (user) {
      return res.status(400).send(`${user.userName} is already registered`);
    } else {
      let salt = await bcrypt.genSalt(10);
      let hashedPassword = await bcrypt.hash(req.body.password, salt);
      user = new User({
        userName: req.body.userName,
        email: req.body.email,
        password: hashedPassword,
        toDoList: req.body.toDoList,
      });

      await user.save();

      if (!secretData.jwtSecret) {
        return res.status(500).send("Token is not defined");
      }

      let token = user.generateAuthToken();
      res.header("x-authentication-token", token);

      console.log(user);
      res.status(200).send("User is successfuly registered");
    }
  } catch (err) {
    console.log(`This is error from User Controller${err}`);
  }
};

module.exports = { addUser };
