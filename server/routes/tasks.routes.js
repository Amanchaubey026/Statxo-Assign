const express = require("express");
const { Task } = require("../models/task.modeel");
const { authenticateUser } = require("../middleware/users.middleware");

const fs = require("fs");
const path = require("path");

let morgan = require("morgan");
const { getTask, updateTask } = require("../controller/tasks.controller");

const tasksRoute = express.Router();

tasksRoute.get("/task", getTask);

let accessLogStream = fs.createWriteStream(
  path.join(__dirname, "../Accesslogs/access.log"),
  {
    flags: "a",
  }
);

morgan.token("params", (req) => JSON.stringify(req.params));
morgan.token("email", (req) => req.email);
morgan.token("username", (req) => req.name);

const logFormat = `Method-:method Status-:status Route-:url Id-:params Email-:email Name-:username`;

tasksRoute.patch(
  "/update/:id",
  authenticateUser,
  morgan(logFormat, { stream: accessLogStream }),
  updateTask
);

tasksRoute.all("*", (req, res) => {
  return res.status(404).json({ message: "404 Invalid Route" });
});

module.exports = { tasksRoute };
