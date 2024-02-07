const express = require("express");
const router = express.Router();
const UserController = require("../controllers/UsersController");
const UserValidator = require("../middlewares/userValidatorMW");
const bodyParser = require("body-parser");

router.use(bodyParser.json()); // to make the POST method

router.post("/", UserValidator, UserController.addUser);

module.exports = router;
