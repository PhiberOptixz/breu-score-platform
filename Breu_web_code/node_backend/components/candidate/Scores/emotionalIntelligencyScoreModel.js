const mongoose = require("mongoose");

// Create User Schema
let emotionalIntelligencyScoreSchema = new mongoose.Schema({
  candidateId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "candidateDetails",
  },
  teamWork: {
    value: { type: Number },
    percentile: { type: Number },
    score: { type: Number },
  },
  complexityHandling: {
    value: { type: Number },
    percentile: { type: Number },
    score: { type: Number },
  },
  conflictResolution: {
    value: { type: Number },
    percentile: { type: Number },
    score: { type: Number },
  },
  initiative: {
    value: { type: Number },
    percentile: { type: Number },
    score: { type: Number },
  },
  culturalFitPresentation: {
    value: { type: Number },
    percentile: { type: Number },
    score: { type: Number },
  },
  communication: {
    value: { type: Number },
    percentile: { type: Number },
    score: { type: Number },
  },
  ownership: {
    value: { type: Number },
    percentile: { type: Number },
    score: { type: Number },
  },
  empathy: {
    value: { type: Number },
    percentile: { type: Number },
    score: { type: Number },
  },
  openness: {
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
  "emotionalIntelligencyScores",
  emotionalIntelligencyScoreSchema,
  "emotionalIntelligencyScores"
);
