const express = require("express")
const router = express.Router()

const authRoute = require("../routes/authRoute")

router.use("/api/users", authRoute)

module.exports = router
