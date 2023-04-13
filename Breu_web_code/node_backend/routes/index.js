const express = require("express");
const router = express.Router();

//Routes
router.use("/auth", require("../components/auth/authRoute"));

module.exports = router;
