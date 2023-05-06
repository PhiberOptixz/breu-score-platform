const express = require("express");
const router = express.Router();
const reliabilityController = require("./reliabilityController");
const authJWT = require("../../../middlewares/authJWT");

router.post("/addQuestions", reliabilityController.addQuestions);

router.get(
  "/fetchQuestions",
  authJWT.verifyJWTToken,
  reliabilityController.fetchQuestionsData
);

module.exports = router;
