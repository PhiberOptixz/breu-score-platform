const express = require("express");
const router = express.Router();
const corporateController = require("./corporateController");
const authJWT = require("../../middlewares/authJWT");

router.get(
  "/getAllCorporates",
  authJWT.verifyJWTToken,
  corporateController.getAllCorporates
);

router.get(
  "/getCorporateCandidates",
  authJWT.verifyJWTToken,
  corporateController.getCorporateCandidates
);

module.exports = router;
