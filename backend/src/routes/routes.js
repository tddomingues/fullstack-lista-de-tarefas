const express = require("express");
const router = express.Router();

const userRoute = require("./userRoute");
const taskRoute = require("./taskRoute");
const authRoute = require("./authRoute");
const noteRoute = require("./noteRoute");

router.use("/api/auth", authRoute);
router.use("/api/users", userRoute);
router.use("/api/tasks", taskRoute);
router.use("/api/notes", noteRoute);

module.exports = router;
