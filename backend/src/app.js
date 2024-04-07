require("dotenv").config()
const express = require("express")
const app = express()

app.use(express.json())
app.use(require("./routes/routes"))

require("./config/db.js")()

const PORT = process.env.PORT

app.listen(PORT, () => {
  console.log(`Servido funcionando na porta ${PORT}.`)
})

module.exports = app


