const mongoose = require("mongoose");

// Create User Schema
let questionsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  languages: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "believabilityLanguages",
    },
  ],
  roles: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "believabilityRoles",
    },
  ],
  currentExperience: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "believabilityExperiences",
    },
  ],
  overallExperience: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "believabilityOverallExperiences",
    },
  ],

  status: {
    type: Boolean,
    default: true,
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
  updatedAt: {
    type: Date,
    default: new Date(),
  },
});

module.exports = mongoose.model("questions", questionsSchema, "questions");
