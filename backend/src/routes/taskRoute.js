const express = require("express")
const router = express.Router()

//controllers
const { test } = require("../controllers/taskController")
const tokenValidate = require("../middlewares/tokenValidate")

router.get("/test", tokenValidate, test)

module.exports = router
