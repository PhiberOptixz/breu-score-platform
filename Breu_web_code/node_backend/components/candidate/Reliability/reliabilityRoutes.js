const express = require("express");
const router = express.Router();
const reliabilityController = require("./reliabilityController");
const authJWT = require("../../../middlewares/authJWT");

router.post(
  "/addQuestions",
  authJWT.verifyJWTToken,
  reliabilityController.addQuestions
);

router.post(
  "/addReliabilityData",
  authJWT.verifyJWTToken,
  reliabilityController.postCandidateAnswers
);

router.get(
  "/fetchQuestions",
  authJWT.verifyJWTToken,
  reliabilityController.fetchQuestionsData
);

router.get(
  "/getReliabilityResults/:candidateId",
  authJWT.verifyJWTToken,
  reliabilityController.getReliabilityResults
);

module.exports = router;
