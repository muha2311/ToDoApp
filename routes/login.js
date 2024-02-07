const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
const loginController = require("../controllers/LoginController");
const loginValidator = require("../middlewares/loginValidatorMW");

router.use(bodyParser.json());

router.post("/", loginValidator, loginController.login);

module.exports = router;
