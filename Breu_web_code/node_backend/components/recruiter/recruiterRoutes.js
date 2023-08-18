const express = require("express");
const router = express.Router();
const recruiterController = require("./recruiterController");
const authJWT = require("../../middlewares/authJWT");

router.get(
  "/getRecruiterCandidates",
  authJWT.verifyJWTToken,
  recruiterController.getRecruiterCandidates
);
router.get(
  "/getAllRecruiters",
  authJWT.verifyJWTToken,
  recruiterController.getAllRecruiters
);

router.post(
  "/sendCandidateToCorporate",
  authJWT.verifyJWTToken,
  recruiterController.sendCandidateToCorporate
);

router.get(
  "/getRecruiterSpecificCorporates",
  authJWT.verifyJWTToken,
  recruiterController.getRecruiterSpecificCorporates
);

module.exports = router;
