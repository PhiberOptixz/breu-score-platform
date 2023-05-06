const mongoose = require("mongoose");

// Create User Schema
let questionsSchema = new mongoose.Schema({
  description: {
    type: String,
    required: true,
  },
  codeSnippet: {
    type: String,
  },
  questionChoices: [{ type: String }],
  questionAnswer: { type: String },
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

module.exports = mongoose.model(
  "believabilityQuestions",
  questionsSchema,
  "believabilityQuestions"
);
