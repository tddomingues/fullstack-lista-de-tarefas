const express = require("express")
const router = express.Router()

//controllers
const { register, login, updateUser, getUser } = require("../controllers/userController")

//middlewares
const validate = require("../middlewares/validate")
const { registerValidation, loginValidation, updateValidation } = require("../middlewares/userValidate")
const tokenValidate = require("../middlewares/tokenValidate")

//routes
router.post("/register", validate(registerValidation), register)
router.post("/login", validate(loginValidation), login)
router.put("/update", tokenValidate, validate(updateValidation), updateUser)
router.get("/", tokenValidate, getUser)

module.exports = router
