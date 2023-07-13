const mongoose = require("mongoose");

// Create User Schema
let reliabilityScoreSchema = new mongoose.Schema({
  candidateId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "candidateDetails",
  },
  design: {
    value: { type: Number },
    percentile: { type: Number },
    score: { type: Number },
  },
  framework: {
    value: { type: Number },
    percentile: { type: Number },
    score: { type: Number },
  },
  coding: {
    value: { type: Number },
    percentile: { type: Number },
    score: { type: Number },
  },
  debugging: {
    value: { type: Number },
    percentile: { type: Number },
    score: { type: Number },
  },
  architecture: {
    value: { type: Number },
    percentile: { type: Number },
    score: { type: Number },
  },
  implementation: {
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
  "reliabilityScores",
  reliabilityScoreSchema,
  "reliabilityScores"
);
