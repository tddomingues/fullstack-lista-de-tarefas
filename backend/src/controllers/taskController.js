const Task = require("../models/task")

const createTask = async (req, res) => {
  const { name, project, priority, userId, deadline, collaborators } = req.body

  try {
    await Task.create({ name, project, priority, userId, deadline, collaborators })

    return res.status(200).json({ message: "Tarefa criada com sucesso." })

  } catch (error) {
    return res.status(400).json({ error: "Erro ao criar uma tarefa" })
  }
}

const getTasksByUser = async (req, res) => {

  try {
    const tasks = await Task.find({ userId: req.userId }).sort({ createdAt: -1 })

    return res.status(200).json(tasks)
  } catch (error) {
    return res.status(400).json({ error: "Erro ao encontrar as tarefas." })
  }

}

module.exports = { createTask, getTasksByUser }
