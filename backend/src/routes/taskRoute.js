const express = require("express");
const router = express.Router();

//controllers
const { createTask, getTasksByUser } = require("../controllers/taskController");
const tokenValidate = require("../middlewares/tokenValidate");
const validate = require("../middlewares/validate");

//middlewares
const { taskValidate } = require("../middlewares/taskValidate");

router.post("/newTask", tokenValidate, validate(taskValidate), createTask);
router.get("/usertasks", tokenValidate, getTasksByUser);

module.exports = router;
