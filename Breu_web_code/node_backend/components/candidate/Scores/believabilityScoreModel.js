const mongoose = require("mongoose");

// Create User Schema
let believabilityScoreSchema = new mongoose.Schema({
  candidateId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "candidateDetails",
  },
  qualification: {
    value: { type: Number },
    percentile: { type: Number },
    score: { type: Number },
  },
  professionalExperience: {
    value: { type: Number },
    percentile: { type: Number },
    score: { type: Number },
  },
  socialScore: {
    value: { type: Number },
    percentile: { type: Number },
    score: { type: Number },
  },
  patents: {
    value: { type: Number },
    percentile: { type: Number },
    score: { type: Number },
  },
  whitepaperConferencePresentation: {
    value: { type: Number },
    percentile: { type: Number },
    score: { type: Number },
  },
  blog: {
    value: { type: Number },
    percentile: { type: Number },
    score: { type: Number },
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
  "believabilityScores",
  believabilityScoreSchema,
  "believabilityScores"
);
