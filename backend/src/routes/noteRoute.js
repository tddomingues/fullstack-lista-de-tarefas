const express = require("express");
const router = express.Router();

//controllers
const {
  createNote,
  getNotesByTask,
  deleteNote,
} = require("../controllers/noteController");

//middlewares
const tokenValidate = require("../middlewares/tokenValidate");
const { noteValidate } = require("../middlewares/noteValidate");
const validate = require("../middlewares/validate");

router.post("/createNote", tokenValidate, validate(noteValidate), createNote);
router.get("/note/:taskId", tokenValidate, getNotesByTask);
router.delete("/note/:id", tokenValidate, deleteNote);

module.exports = router;
