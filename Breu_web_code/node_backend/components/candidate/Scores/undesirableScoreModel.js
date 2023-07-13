const mongoose = require("mongoose");

// Create User Schema
let undesirableScoreSchema = new mongoose.Schema({
  candidateId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "candidateDetails",
  },
  metric: {
    value: { type: Number },
    percentile: { type: Number },
    score: { type: Number },
  },
  plagiarism: {
    value: { type: Number },
    percentile: { type: Number },
    score: { type: Number },
  },
  trustIssues: {
    value: { type: Number },
    percentile: { type: Number },
    score: { type: Number },
  },
  fakeInformation: {
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
  "undesirableScores",
  undesirableScoreSchema,
  "undesirableScores"
);
