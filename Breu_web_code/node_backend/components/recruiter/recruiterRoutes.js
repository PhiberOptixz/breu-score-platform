const express = require("express");
const router = express.Router();
const recruiterController = require("./recruiterController");
const authJWT = require("../../middlewares/authJWT");

router.get(
  "/getRecruiterCandidates",
  authJWT.verifyJWTToken,
  recruiterController.getRecruiterCandidates
);

router.post(
  "/sendCandidateToCorporate",
  authJWT.verifyJWTToken,
  recruiterController.sendCandidateToCorporate
);

module.exports = router;
