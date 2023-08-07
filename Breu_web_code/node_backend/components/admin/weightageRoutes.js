const express = require("express");
const router = express.Router();
const weightageController = require("./weightageController");
const authJWT = require("../../middlewares/authJWT");

router.get(
  "/getAllWeightages",
  authJWT.verifyJWTToken,
  weightageController.getAllWeightages
);

router.post(
  "/addWeightages",
  // authJWT.verifyJWTToken,
  weightageController.addWeightages
);

module.exports = router;
