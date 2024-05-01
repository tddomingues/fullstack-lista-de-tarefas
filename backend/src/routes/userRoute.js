const express = require("express")
const router = express.Router()

//controllers
const { updateUser, getUser } = require("../controllers/userController")

//middlewares
const validate = require("../middlewares/validate")
const { updateValidation } = require("../middlewares/userValidate")
const tokenValidate = require("../middlewares/tokenValidate")

//routes
router.put("/update", tokenValidate, validate(updateValidation), updateUser)
router.get("/:id", tokenValidate, getUser)

module.exports = router
