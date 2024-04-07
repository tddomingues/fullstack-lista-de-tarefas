require("dotenv").config()
const jwt = require("jsonwebtoken")

const tokenValidate = (req, res, next) => {

  try {

    const [, token] = req.headers.authorization?.split(" ") || [" ", " "]

    if (!token) {
      return res.status(400).json({ error: "Token não encontrado." })
    }

    const SECRET_KEY = process.env.SECRET_KEY

    jwt.verify(token, SECRET_KEY)

    return next()

  } catch (error) {
    return res.status(400).json({ error: "Erro na validação do token." })
  }

}

module.exports = tokenValidate
