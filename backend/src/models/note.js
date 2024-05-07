const mongoose = require("mongoose");

const noteSchema = new mongoose.Schema(
  {
    comment: String,
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    taskId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Task",
    },
  },
  {
    timestamps: true,
  },
);

module.exports = mongoose.model("Note", noteSchema);
