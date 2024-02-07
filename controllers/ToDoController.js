const User = require("../models/MainModel");

const getAllList = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email }).exec();
    res.send(user.toDoList);
  } catch (err) {
    console.log(err);
  }
};

const addList = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(400).send("User is not registered");
    }
    if (user._id != req.userId.toString()) {
      return res.status(400).send("Failed.. not the same id");
    }

    let tasks = req.body.toDoList.map((task) => ({ task }));

    for (let item of tasks) {
      user.toDoList.push(item);
    }
    await user.save();

    res.status(200).send(user.toDoList);
  } catch (err) {
    console.log(err);
  }
};

const deleteFromList = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (user._id != req.userId.toString()) {
      return res.status(400).send("Failed.. not the same id");
    }
    const id = user.toDoList.findIndex(
      (task) => task._id.toString() === req.params.subId
    );
    if (id === -1) {
      return res.status(404).send("Task not found");
    }
    user.toDoList.splice(id, 1);
    await user.save();
    res.status(200).send("Task is successfully Completed");
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  getAllList,
  addList,
  deleteFromList,
};
