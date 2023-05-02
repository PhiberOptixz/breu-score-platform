const mongoose = require("mongoose");

const experienceScehma = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
});

const BelievabilityOverallExperience = mongoose.model(
  "believabilityOverallExperiences",
  experienceScehma,
  "believabilityOverallExperiences"
);

module.exports = BelievabilityOverallExperience;
