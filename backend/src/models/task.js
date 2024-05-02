const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema(
  {
    name: String,
    project: String,
    priority: String,
    userId: String,
    deadline: String,
    collaborators: [
      {
        _id: String,
      },
    ],
  },
  {
    timestamps: true,
  },
);

module.exports = mongoose.model("Task", taskSchema);
