require("dotenv").config()
const User = require("../models/user")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

const register = async (req, res) => {

  const { email, name, password, confirmPassword } = req.body

  try {

    const userExists = await User.findOne({ email })

    if (userExists) {
      return res.status(400).json({ error: "Usuário existente." })
    }

    if (password !== confirmPassword) return res.status(400).json({ error: "Senhas não correspondentes." })

    const cryptoPassword = await bcrypt.hash(password, 10)

    const user = await User.create({
      email, name, password: cryptoPassword
    })

    return res.status(200).json({ userId: user._id })

  } catch (error) {
    return res.status(400).json({ error: "Erro no cadastro do usuário." })
  }

}

const login = async (req, res) => {
  const { email, password } = req.body

  try {

    const user = await User.findOne({ email })

    if (!user) return res.status(400).json({ error: "Usuário não registrado." })

    const comparePasswords = await bcrypt.compare(password, user.password)

    if (!comparePasswords) return res.status(400).json({ error: "Senha inválida." })

    const SECRET_KEY = process.env.SECRET_KEY
    const userId = user._id

    const token = jwt.sign(
      { userId },
      SECRET_KEY,
      { expiresIn: "70m" }
    )

    return res.status(200).json({ userId: user._id, token })

  } catch (error) {
    return res.status(400).json({ error: "Erro no login do usuário" })
  }

}

const updateUser = async (req, res) => {

  const { email, name, password, confirmPassword } = req.body

  try {

    const user = await User.findOne({ email })

    if (!user) {
      return res.status(400).json({ error: "Usuário não cadastrado." })
    }

    if (password !== confirmPassword) return res.status(400).json({ error: "Senhas não correspondentes." })

    let cryptoPassword

    if (password) {
      cryptoPassword = await bcrypt.hash(password, 10)
    }

    const newUser = {
      name: name || user.name,
      email: email,
      password: cryptoPassword || user.password
    }

    await user.updateOne(newUser)
    await user.save()

    return res.status(200).json({ message: "Conta atualizada com sucesso." })

  } catch (error) {
    return res.status(400).json({ error: "Erro na atualização do usuário." })
  }

}


module.exports = { register, login, updateUser }


