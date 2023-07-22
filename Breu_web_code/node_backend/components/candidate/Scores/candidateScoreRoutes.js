const express = require("express");
const router = express.Router();
const candidateScoreController = require("./candidateScoreController");
const authJWT = require("../../../middlewares/authJWT");

router.get(
  "/getCandidateScoreById/:candidateId",
  authJWT.verifyJWTToken,
  candidateScoreController.getCandidateScoreById
);

module.exports = router;
