const mongoose = require("mongoose");

// Create User Schema
let weightageSchema = new mongoose.Schema({
  qualification: {
    type: Number,
  },
  professionalExperience: {
    type: Number,
  },
  socialScore: {
    type: Number,
  },
  patents: {
    type: Number,
  },
  whitepaperConferencePresentation: {
    type: Number,
  },
  blog: {
    type: Number,
  },
  design: {
    type: Number,
  },
  framework: {
    type: Number,
  },
  coding: {
    type: Number,
  },
  debugging: {
    type: Number,
  },
  architecture: {
    type: Number,
  },
  implementation: {
    type: Number,
  },
  teamWork: {
    type: Number,
  },
  complexityHandling: {
    type: Number,
  },
  conflictResolution: {
    type: Number,
  },
  initiative: {
    type: Number,
  },
  culturalFit: {
    type: Number,
  },
  presentation: {
    type: Number,
  },
  communication: {
    type: Number,
  },
  ownership: {
    type: Number,
  },
  empathy: {
    type: Number,
  },
  openness: {
    type: Number,
  },
  fakeInformation: {
    type: Number,
  },
  plagiarism: {
    type: Number,
  },
  trustIssues: {
    type: Number,
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
  "parameterWeightages",
  weightageSchema,
  "parameterWeightages"
);
