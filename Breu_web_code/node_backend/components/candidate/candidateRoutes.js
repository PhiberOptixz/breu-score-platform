const express = require("express");
const router = express.Router();
const candidateController = require("./candidateController");
const authJWT = require("../../middlewares/authJWT");

router.post(
  "/postDeclarationData",
  authJWT.verifyJWTToken,
  candidateController.postDeclarationData
);

module.exports = router;
