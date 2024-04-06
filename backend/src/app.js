require("dotenv").config()
const express = require("express")
const app = express()

const PORT = process.env.PORT || 3000

app.use(express.json())
app.use(require("./routes/routes"))

app.listen(PORT, () => {
  console.log(`Servido funcionando na porta ${PORT}.`)
})

