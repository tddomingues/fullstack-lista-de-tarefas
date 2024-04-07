const User = require("../models/user")
const bcrypt = require("bcryptjs")

const register = async (req, res) => {

  const { email, name, password } = req.body

  try {

    const userExists = await User.findOne({ email })

    if (userExists) {
      return res.status(400).json({ error: "Usuário existente." })
    }

    const cryptoPassword = await bcrypt.hash(password, 10)

    const user = await User.create({
      email, name, password: cryptoPassword
    })

    return res.status(200).json({ userId: user._id })

  } catch (error) {
    return res.status(400).json({ error: "Erro no cadastro do usuário." })
  }

}


module.exports = { register }


