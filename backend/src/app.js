require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const path = require("path");

app.use(cors({ credentials: true, origin: "http://localhost:5173" }));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/uploads", express.static(path.join(__dirname, "/uploads")));

app.use(require("./routes/routes"));

require("./config/db.js")();

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Servido funcionando na porta ${PORT}.`);
});

module.exports = app;
