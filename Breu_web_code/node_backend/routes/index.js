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
router.use(
  "/intelligibility",
  require("../components/candidate/Emotional/emotionalRoutes")
);
router.use("/recruiter", require("../components/recruiter/recruiterRoutes"));
router.use("/corporate", require("../components/corporate/corporateRoutes"));
router.use("/candidate", require("../components/candidate/candidateRoutes"));
router.use("/admin", require("../components/admin/adminRoutes"));
router.use(
  "/score",
  require("../components/candidate/Scores/candidateScoreRoutes")
);
router.use("/weightage", require("../components/admin/weightageRoutes"));

module.exports = router;
