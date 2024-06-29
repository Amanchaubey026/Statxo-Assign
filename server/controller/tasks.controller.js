const { Task } = require("../models/task.modeel");

const getTask = async (req, res) => {
  try {
    const tasks = await Task.find();
    return res.status(200).json({ data: tasks });
  } catch (error) {
    return res
      .status(500)
      .json({ error: true, message: `Some error occurred, error : ${error}` });
  }
};

const updateTask = async (req, res) => {
  try {
    const { id } = req.params;
    const { ActionType, ActionName } = req.body;

    if (!ActionType || !ActionName) {
      return res.status(400).json({
        error: true,
        message: "ActionType or ActionName fields are missing",
      });
    }

    if (!["Price-Negotiation", "Scrap", "Product ERP", "Price Non ERP"].includes(ActionType)) {
      return res.status(400).json({ error: true, message: "Invalid Action Type" });
    }

    if (!["Rebate", "Refund", "Price Increase", "Additional Task", "Price Decrease"].includes(ActionName)) {
      return res.status(400).json({ error: true, message: "Invalid Action Name" });
    }

    const newDate = new Date();
    const taskData = await Task.findByIdAndUpdate(
      id,
      {
        ActionType,
        ActionName,
        UserName: req.name,
        EditedAt: newDate.toUTCString(),
      },
      { new: true }
    );

    if (!taskData) {
      return res.status(400).json({ error: true, message: "Task not found" });
    }

    return res.status(200).json({ message: "Field updated successfully", data: taskData });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ error: true, message: `Some error occurred, error: ${error.message}` });
  }
};

module.exports = { getTask, updateTask };
