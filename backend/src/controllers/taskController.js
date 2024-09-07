const Task = require("../models/task");

//criar uma tarefa
const createTask = async (req, res) => {
  const {
    name,
    description,
    priority,
    status,
    userId,
    deadline,
    collaborators,
  } = req.body;

  try {
    await Task.create({
      name,
      description,
      priority,
      status,
      userId,
      deadline,
      collaborators,
    });

    /*
    Obs: o mongoose converte a string de userId para mongoose.Schema.Types.ObjectId
    sem usar 'new mongoose.Types.ObjectId("64f9c2f6e4bfa0123456789a")'.
    */

    return res.status(201).json({ message: "Tarefa criada com sucesso." });
  } catch (error) {
    return res.status(500).json({ error: "Erro ao criar uma tarefa" });
  }
};

//atualizar uma tarefa
const updateTask = async (req, res) => {
  const {
    name,
    description,
    priority,
    status,
    ownerId,
    deadline,
    collaborators,
  } = req.body;

  const { id } = req.params;

  try {
    const task = await Task.findOne({ _id: id });

    if (!task) {
      return res.status(404).json({ error: "Essa tarefa não existe." });
    }

    let newTask = {};

    if (req.userId !== ownerId) {
      return res
        .status(403)
        .json({ error: "Você não tem permissão para atualizar essa tarefa." });
    }

    if (name) {
      newTask.name = name;
    }

    if (description) {
      newTask.description = description;
    }

    if (priority) {
      newTask.priority = priority;
    }

    if (status) {
      newTask.status = status;
    }

    if (deadline) {
      newTask.deadline = deadline;
    }

    if (collaborators) {
      newTask.collaborators = collaborators;
    }

    await task.updateOne(newTask);
    await task.save();

    return res.status(200).json({ message: "Tarefa atualizada com sucesso." });
  } catch (error) {
    return res.status(500).json({ error: "Erro ao atualizar a tarefa." });
  }
};

//deletar uma tarefa
const deleteTask = async (req, res) => {
  const { id } = req.params;

  try {
    const task = await Task.findOne({ _id: id });

    if (!task) {
      return res.status(404).json({ error: "Essa tarefa não existe." });
    }

    if (task.userId.toHexString() !== req.userId) {
      return res
        .status(403)
        .json({ error: "Essa tarefa não pode ser apagada por você." });
    }

    await Task.deleteOne({ _id: id });

    return res.status(200).json({ message: "Tarefa apagada com sucesso." });
  } catch (error) {
    return res.status(500).json({ error: "Erro ao deletar a tarefa." });
  }
};

//buscar a(s) tarefa(s) do usuário
/* TODO: OUTROS USUARIOS PODEM ACESSAR A TAREFA DO CRIADO. ARRUMAR ISSO! */
const getTasksByUser = async (req, res) => {
  try {
    const tasks = await Task.find({ userId: req.userId })
      .populate("collaborators", "email name profilePicture")
      .populate("userId", "email name profilePicture")
      .sort({
        createdAt: -1,
      });

    return res.status(200).json(tasks);
  } catch (error) {
    return res.status(500).json({ error: "Erro ao encontrar as tarefas." });
  }
};

//buscar uma tarefa do usuário
/* TODO: OUTROS USUARIOS PODEM ACESSAR A TAREFA DO CRIADO. ARRUMAR ISSO! */
const getTask = async (req, res) => {
  const { id } = req.params;

  try {
    const task = await Task.findById(id)
      .populate("collaborators", "name email profilePicture")
      .populate("userId", "name email profilePicture");

    if (!task) return res.status(404).json({ error: "Tarefa não encontrada." });

    return res.status(200).json(task);
  } catch (error) {
    return res.status(500).json({ error: "Erro ao procurar a tarefa." });
  }
};

//buscar tarefa(s) por pesquisa que pertencem a min
const getTaskBySearch = async (req, res) => {
  const { search } = req.query;

  try {
    const task = await Task.find({
      name: new RegExp(search, "i"),
      userId: { $eq: req.userId },
    })
      .populate("collaborators", "name email profilePicture")
      .populate("userId", "name email profilePicture");

    if (!task)
      return res
        .status(404)
        .json({ error: "Não existe tarefa com essa pesquisa." });

    return res.status(200).json(task);
  } catch (error) {
    return res.status(500).json({ error: "Erro ao procurar a tarefa." });
  }
};

//buscar a(s) tarefa(s) que faço parte
const getTasksDoneCollaboratively = async (req, res) => {
  try {
    const userId = req.userId;

    const tasks = await Task.find({
      collaborators: { $in: userId },
    })
      .populate("userId", "name email profilePicture")
      .populate("collaborators", "name email profilePicture");

    if (!tasks)
      return res
        .status(404)
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
  getTaskBySearch,
};
