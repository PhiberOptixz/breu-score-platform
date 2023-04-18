const express = require("express");
const router = express.Router();
const believabilityController = require("./believabilityController");
const authJWT = require("../../../middlewares/authJWT");

router.get(
  "/getAllDomains",
  authJWT.verifyJWTToken,
  believabilityController.getAllDomains
);

router.get(
  "/getAllEducations",
  authJWT.verifyJWTToken,
  believabilityController.getAllEducations
);

router.get(
  "/getAllExperiences",
  authJWT.verifyJWTToken,
  believabilityController.getAllExperiences
);

router.get(
  "/getAllLanguages",
  authJWT.verifyJWTToken,
  believabilityController.getAllLanguages
);

router.get(
  "/getAllProficiencies",
  authJWT.verifyJWTToken,
  believabilityController.getAllProficiencies
);

router.get(
  "/getAllRoles",
  authJWT.verifyJWTToken,
  believabilityController.getAllRoles
);

module.exports = router;
