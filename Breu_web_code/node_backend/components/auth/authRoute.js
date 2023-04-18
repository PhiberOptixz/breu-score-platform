const express = require("express");
const router = express.Router();
const authController = require("./authController");
const authJWT = require("../../middlewares/authJWT");

router.post("/registerCandidate", authController.candidateRegister);

router.post("/candidateSignIn", authController.candidateSignIn);

router.get(
  "/getCandidateDetails",
  authJWT.verifyJWTToken,
  authController.getCandidateDetails
);

module.exports = router;
