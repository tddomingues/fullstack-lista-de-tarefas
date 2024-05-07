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

router.post("/createNote", tokenValidate, createNote);
router.get("/note/:taskId", tokenValidate, getNotesByTask);
router.delete("/note/:id", tokenValidate, deleteNote);

module.exports = router;
