const express = require("express");
const router = express.Router();
const authController = require("./authController");
const corporateAuthController = require("./corporateAuthController");
const recruiterAuthController = require("./recruiterAuthController");
const adminAuthController = require("./adminAuthController");
const authJWT = require("../../middlewares/authJWT");

router.post("/registerCandidate", authController.candidateRegister);

router.post("/candidateSignIn", authController.candidateSignIn);

router.get(
  "/getCandidateDetails",
  authJWT.verifyJWTToken,
  authController.getCandidateDetails
);
router.post("/registerAdmin", adminAuthController.adminRegister);

router.post("/adminSignIn", adminAuthController.adminSignIn);

router.get(
  "/getAdminDetails",
  authJWT.verifyJWTToken,
  adminAuthController.getAdminDetails
);

router.post("/registerRecruiter", recruiterAuthController.recruiterRegister);

router.post("/recruiterSignIn", recruiterAuthController.recruiterSignIn);

router.get(
  "/getRecruiterDetails",
  authJWT.verifyJWTToken,
  recruiterAuthController.getRecruiterDetails
);

router.post("/registerCorporate", corporateAuthController.corporateRegister);

router.post("/corporateSignIn", corporateAuthController.corporateSignIn);

router.get(
  "/getCorporateDetails",
  authJWT.verifyJWTToken,
  corporateAuthController.getCorporateDetails
);

module.exports = router;
