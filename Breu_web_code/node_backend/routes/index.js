const express = require("express");
const router = express.Router();

//Routes
router.use("/auth", require("../components/auth/authRoute"));
router.use(
  "/believability",
  require("../components/candidate/Believability/believabilityRoutes")
);
router.use(
  "/reliability",
  require("../components/candidate/Reliability/reliabilityRoutes")
);

module.exports = router;
