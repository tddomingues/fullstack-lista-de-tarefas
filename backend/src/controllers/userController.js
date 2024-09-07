require("dotenv").config();
const User = require("../models/user");
const bcrypt = require("bcryptjs");

const updateUser = async (req, res) => {
  const { name, password, confirmPassword } = req.body;

  try {
    const userId = req.userId;

    const user = await User.findOne({ _id: userId });

    if (!user) {
      return res.status(404).json({ error: "Usuário não cadastrado." });
    }

    if (password !== confirmPassword)
      return res.status(401).json({ error: "Senhas não correspondentes." });

    let cryptoPassword;

    if (password) {
      cryptoPassword = await bcrypt.hash(password, 10);
    }

    const newUser = {};

    if (name) {
      newUser.name = name;
    }

    if (password) {
      newUser.password = cryptoPassword;
    }

    if (req.file) {
      newUser.profilePicture = req.file.filename;
    }

    await user.updateOne(newUser);
    await user.save();

    return res.status(200).json({ message: "Conta atualizada com sucesso." });
  } catch (error) {
    return res.status(500).json({ error: "Erro na atualização do usuário." });
  }
};

const getUser = async (req, res) => {
  try {
    const userId = req.userId;

    const user = await User.findById({ _id: userId }).select("-password");

    if (!user)
      return res.status(404).json({ error: "Usuário não encontrado." });

    return res.status(200).json({ user });
  } catch (error) {
    return res.status(500).json({ error: "Erro ao encontrar o usuário." });
  }
};

const getUsers = async (req, res) => {
  try {
    const users = await User.find().select("-password");

    return res.status(200).json({ users });
  } catch (error) {
    return res.status(500).json({ error: "Erro ao encontrar os usuários." });
  }
};

module.exports = { updateUser, getUser, getUsers };
