const express = require("express");
const router = express.Router();

//controllers
const {
  createTask,
  getTasksByUser,
  getTask,
  getTasksDoneCollaboratively,
  updateTask,
  deleteTask,
  getTaskBySearch,
} = require("../controllers/taskController");

//middlewares
const { taskValidate } = require("../middlewares/taskValidate");
const tokenValidate = require("../middlewares/tokenValidate");
const validate = require("../middlewares/validate");

router.post("/createTask", tokenValidate, validate(taskValidate), createTask);
router.get("/userTasks", tokenValidate, getTasksByUser);
router.get("/task/:id", tokenValidate, getTask);
router.get("/collaborationTasks", tokenValidate, getTasksDoneCollaboratively);
router.get("/search", tokenValidate, getTaskBySearch);
router.put("/updateTask/:id", tokenValidate, updateTask);
router.delete("/deleteTask/:id", tokenValidate, deleteTask);

module.exports = router;
