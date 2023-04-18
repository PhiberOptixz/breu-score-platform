const mongoose = require("mongoose");

const experienceScehma = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
});

const BelievabilityExperience = mongoose.model(
  "believabilityExperiences",
  experienceScehma,
  "believabilityExperiences"
);

module.exports = BelievabilityExperience;
