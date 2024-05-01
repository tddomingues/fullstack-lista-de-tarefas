const express = require("express")
const router = express.Router()

//controllers
const { register, login } = require("../controllers/authController")

//middlewares
const validate = require("../middlewares/validate")
const { registerValidation, loginValidation } = require("../middlewares/userValidate")

//routes
router.post("/register", validate(registerValidation), register)
router.post("/login", validate(loginValidation), login)

module.exports = router
