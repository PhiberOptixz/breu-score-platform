const express = require("express");
const router = express.Router();
const adminController = require("./adminController");
const authJWT = require("../../middlewares/authJWT");

router.get(
  "/getAllCandidates",
  authJWT.verifyJWTToken,
  adminController.getAllCandidates
);

router.get(
  "/getCandidateBData/:candidateId",
  authJWT.verifyJWTToken,
  adminController.getCandidateBData
);

router.post(
  "/addCandidateScore",
  authJWT.verifyJWTToken,
  adminController.addScore
);

module.exports = router;
