const express = require("express");
const router = express.Router();

//controllers
const {
  createTask,
  getTasksByUser,
  getTask,
  getTasksDoneCollaboratively,
  updateTask,
} = require("../controllers/taskController");
const tokenValidate = require("../middlewares/tokenValidate");
const validate = require("../middlewares/validate");

//middlewares
const { taskValidate } = require("../middlewares/taskValidate");

router.post("/newTask", tokenValidate, validate(taskValidate), createTask);
router.get("/usertasks", tokenValidate, getTasksByUser);
router.get("/task/:id", tokenValidate, getTask);
router.get("/collaboration", tokenValidate, getTasksDoneCollaboratively);
router.put("/updatetask/:id", tokenValidate, updateTask);

module.exports = router;
