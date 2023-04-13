const express = require("express");
const router = express.Router();
const authController = require("./authController");

router.post("/registerCandidate", authController.candidateRegister);

module.exports = router;
