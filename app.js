const express = require("express");
const app = express();
const mongoose = require("mongoose");
const userRouter = require("./routes/Users");
const loginRouter = require("./routes/login");
const toDoRouter = require("./routes/ToDo");
require("dotenv").config();

mongoose
  .connect("mongodb://127.0.0.1:27017/my_base")
  .then(() => {
    console.log("Database Connected Successfully");
  })
  .catch((err) => {
    console.log(err);
  });

app.set("template engine", "ejs");

app.use("/Users", userRouter);
app.use("/Login", loginRouter);
app.use("/ToDo", toDoRouter);

app.use(express.static("public")); // Static files (HTML,CSS,Images)

const port = process.env.port || 5000;
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
