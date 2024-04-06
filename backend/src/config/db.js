const mongoose = require("mongoose")
require("dotenv").config()

const user = process.env.DB_USER
const password = process.env.DB_PASSWORD

const url = `mongodb+srv://${user}:${password}@cluster0.mpftfes.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`

const main = async () => {
  await mongoose.connect(url)
    .then(() => {
      console.log("Conectado ao banco de dados.")
    })
    .catch(err => {
      console.log(`Erro na conecção com o banco de dados. ${err}`)
    })
}

module.exports = main
