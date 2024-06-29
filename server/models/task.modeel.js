const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  Quantity: {
    type: Number,
    required: true,
  },
  Amount: {
    type: Number,
    required: true,
  },
  PostingYear: {
    type: Number,
    required: true,
  },
  PostingMonth: {
    type: Number,
    required: true,
  },
  ActionType: {
    type: String,
    enum: ["Price-Negotiation", "Scrap", "Product ERP", "Price Non ERP"],
    required: true,
  },
  ActionName: {
    type: String,
    enum: [
      "Rebate",
      "Refund",
      "Price Increase",
      "Additional Task",
      "Price Decrease",
    ],
    required: true,
  },
  Status: {
    type: String,
    enum: ["Pending", "InProgress", "Completed"],
    required: true,
  },
  UserName: {
    type: String,
  },
  EditedAt: {
    type: String,
  },
});

const Task = mongoose.model("tasks", taskSchema);

module.exports = { Task };
