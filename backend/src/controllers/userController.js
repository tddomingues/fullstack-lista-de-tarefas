require("dotenv").config()
const User = require("../models/user")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

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

const getUser = async (req, res) => {
    const {id} = req.params

    try {
      const user = await User.findById({_id: id})

    if(!user) return res.status(400).json({error: "Usuário não encontrado."})
    
    return res.status(200).json({user})
  } catch (error) {
    return res.status(400).json({error: "Erro ao encontrar o usuário."})
    }

    

   
}


module.exports = {updateUser, getUser }


