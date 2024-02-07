const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
const checkingToken = require("../middlewares/checkingTokenMW");
const toDoController = require("../controllers/ToDoController");

router.use(bodyParser.json());

router.get("/:id", checkingToken, toDoController.getAllList);

router.post("/:id", checkingToken, toDoController.addList);

router.delete("/:id/:subId", checkingToken, toDoController.deleteFromList);

module.exports = router;
