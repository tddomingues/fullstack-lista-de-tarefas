const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema(
  {
    name: String,
    description: String,
    priority: String,
    status: String,
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    deadline: String,
    collaborators: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
  },
  {
    timestamps: true,
  },
);

module.exports = mongoose.model("Task", taskSchema);
