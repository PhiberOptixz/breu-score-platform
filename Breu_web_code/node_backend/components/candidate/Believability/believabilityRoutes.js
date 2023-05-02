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
  "/getAllOverallExperiences",
  authJWT.verifyJWTToken,
  believabilityController.getAllOverallExperiences
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

router.get(
  "/getAllEmploymentModes",
  authJWT.verifyJWTToken,
  believabilityController.getAllEmploymentModes
);

router.post(
  "/addBelievabilityData",
  authJWT.verifyJWTToken,
  believabilityController.addBelievabilityDetails
);

module.exports = router;
