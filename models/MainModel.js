const mongoose = require("mongoose");
const emailValidator = require("validator");
const secretData = require("../config/custom-environment-variables.json");
const jwt = require("jsonwebtoken");

const mainSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: (val) => emailValidator.isEmail(val),
      message: "Invalid Email",
    },
  },
  password: {
    type: String,
    required: true,
  },
  toDoList: [
    {
      task: String,
    },
  ],
});

mainSchema.method("generateAuthToken", function () {
  let token = jwt.sign({ userId: this._id }, secretData.jwtSecret, {
    expiresIn: 3 * 24 * 60 * 60,
  });
  return token;
});

module.exports = mongoose.model("users_with_to_do_list", mainSchema);
