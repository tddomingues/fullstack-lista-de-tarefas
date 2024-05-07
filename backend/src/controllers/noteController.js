const Note = require("../models/note");

const createNote = async (req, res) => {
  const { taskId, comment } = req.body;

  try {
    const note = (
      await Note.create({ comment, userId: req.userId, taskId })
    ).populate("userId", "name email");

    return res.status(200).json(note);
  } catch (error) {
    return res.status(400).json({ error: "Erro ao criar uma nota." });
  }
};

const getNotesByTask = async (req, res) => {
  const { taskId } = req.params;

  try {
    const notes = await Note.find({ taskId })
      .populate("userId", "name email profilePicture")
      .sort({ createdAt: -1 });

    return res.status(200).json(notes);
  } catch (error) {
    return res.status(400).json({ error: "Erro ao procurar a nota." });
  }
};

const deleteNote = async (req, res) => {
  const { id } = req.params;

  try {
    const note = await Note.findOne({ _id: id });

    if (note.userId.toHexString() !== req.userId) {
      return res.status(400).json({ error: "Essa nota não pertence a você." });
    }

    await Note.deleteOne({ _id: id });

    return res.status(200).json(note);
  } catch (error) {
    return res.status(400).json({ error: "Erro ao procurar a nota." });
  }
};

module.exports = { createNote, getNotesByTask, deleteNote };
