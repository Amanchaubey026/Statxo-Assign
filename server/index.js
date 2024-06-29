require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const { connectDB } = require("./config/db.config");
const { usersRoute } = require("./routes/users.routes");
const { tasksRoute } = require("./routes/tasks.routes");

const PORT = process.env.PORT || 5000;

app.use(cors());

app.use(express.json());

app.get("/", (req, res) => {
  try {
    res.status(200).json({ message: "Server Home Page" });
  } catch (error) {
    res.status(400).json({ message: error });
  }
});

app.use("/users", usersRoute);
app.use("/tasks", tasksRoute);

app.listen(PORT, async () => {
  await connectDB();
  console.log(`server is running at PORT : ${PORT}`);
});
