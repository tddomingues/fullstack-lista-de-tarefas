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
const tokenValidate = require("../middlewares/tokenValidate");
const validate = require("../middlewares/validate");

//middlewares
const { taskValidate } = require("../middlewares/taskValidate");

router.post("/newTask", tokenValidate, validate(taskValidate), createTask);
router.get("/usertasks", tokenValidate, getTasksByUser);
router.get("/task/:id", tokenValidate, getTask);
router.get("/collaboration", tokenValidate, getTasksDoneCollaboratively);
router.get("/searchTask", tokenValidate, getTaskBySearch);
router.put("/updatetask/:id", tokenValidate, updateTask);
router.delete("/deleteTask/:id", tokenValidate, deleteTask);

module.exports = router;
