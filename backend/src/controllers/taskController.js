const Task = require("../models/task");

const createTask = async (req, res) => {
  const { name, project, priority, userId, deadline, collaborators } = req.body;

  try {
    await Task.create({
      name,
      project,
      priority,
      userId,
      deadline,
      collaborators,
    });

    return res.status(200).json({ message: "Tarefa criada com sucesso." });
  } catch (error) {
    return res.status(400).json({ error: "Erro ao criar uma tarefa" });
  }
};

const updateTask = async (req, res) => {
  const { name, project, priority, userId, ownerId, deadline, collaborators } =
    req.body;

  const { id } = req.params;

  try {
    console.log(userId, req.userId);
    if (userId !== ownerId) {
      return res
        .status(400)
        .json({ error: "Essa tarefa não corresponde ao criador." });
    }

    const task = await Task.findOne({ _id: id });

    const newTask = {
      name: name || task.name,
      project: project || task.project,
      priority: priority || task.priority,
      deadline: deadline || task.deadline,
      collaborators: collaborators || task.collaborators,
    };

    await task.updateOne(newTask);
    await task.save();

    return res.status(200).json(task);
  } catch (error) {
    return res.status(400).json({ error: "Erro ao atualizar a tarefa." });
  }
};

const getTasksByUser = async (req, res) => {
  try {
    const tasks = await Task.find({ userId: req.userId })
      .populate("collaborators", "email name")
      .populate("userId", "email name")
      .sort({
        createdAt: -1,
      });

    return res.status(200).json(tasks);
  } catch (error) {
    return res.status(400).json({ error: "Erro ao encontrar as tarefas." });
  }
};

const getTask = async (req, res) => {
  const { id } = req.params;

  try {
    const task = await Task.findById(id)
      .populate("collaborators", "name email")
      .populate("userId", "name email");

    if (!task) return res.status(400).json({ error: "Tarefa não encontrada." });

    return res.status(200).json(task);
  } catch (error) {
    return res.status(400).json({ error: "Erro não procurar a tarefa." });
  }
};

const deleteTask = async (req, res) => {
  const { id } = req.params;

  console.log(id);

  try {
    await Task.deleteOne({ _id: id });

    return res.status(200).json({ message: "Tarefa apagada com sucesso." });
  } catch (error) {
    return res.status(400).json({ error: "Erro ao deletar a tarefa." });
  }
};

const getTasksDoneCollaboratively = async (req, res) => {
  try {
    const userId = req.userId;

    const tasks = await Task.find({
      collaborators: { $in: userId },
    })
      .populate("userId", "name email")
      .populate("collaborators", "name email");

    if (!tasks)
      return res
        .status(400)
        .json({ error: "Tarefas em colaboração não encontradas." });

    return res.status(200).json(tasks);
  } catch (error) {
    return res
      .status(400)
      .json({ error: "Erro ao procurar a tarefa em colaboração." });
  }
};

module.exports = {
  createTask,
  getTasksByUser,
  getTask,
  getTasksDoneCollaboratively,
  updateTask,
  deleteTask,
};
