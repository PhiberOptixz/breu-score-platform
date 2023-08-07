const mongoose = require("mongoose");

// Create User Schema
let believabilityScoreSchema = new mongoose.Schema({
  candidateId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "candidateDetails",
  },
  believabilityScores: {
    qualification: {
      value: { type: Number },
      weightage: { type: Number },
      score: { type: Number },
    },
    professionalExperience: {
      value: { type: Number },
      weightage: { type: Number },
      score: { type: Number },
    },
    socialScore: {
      value: { type: Number },
      weightage: { type: Number },
      score: { type: Number },
    },
    patents: {
      value: { type: Number },
      weightage: { type: Number },
      score: { type: Number },
    },
    whitepaperConferencePresentation: {
      value: { type: Number },
      weightage: { type: Number },
      score: { type: Number },
    },
    blog: {
      value: { type: Number },
      weightage: { type: Number },
      score: { type: Number },
    },
  },
  emotionalIntelligencyScores: {
    teamWork: {
      value: { type: Number },
      weightage: { type: Number },
      score: { type: Number },
    },
    complexityHandling: {
      value: { type: Number },
      weightage: { type: Number },
      score: { type: Number },
    },
    conflictResolution: {
      value: { type: Number },
      weightage: { type: Number },
      score: { type: Number },
    },
    initiative: {
      value: { type: Number },
      weightage: { type: Number },
      score: { type: Number },
    },
    culturalFitPresentation: {
      value: { type: Number },
      weightage: { type: Number },
      score: { type: Number },
    },
    presentation: {
      value: { type: Number },
      weightage: { type: Number },
      score: { type: Number },
    },
    communication: {
      value: { type: Number },
      weightage: { type: Number },
      score: { type: Number },
    },
    ownership: {
      value: { type: Number },
      weightage: { type: Number },
      score: { type: Number },
    },
    empathy: {
      value: { type: Number },
      weightage: { type: Number },
      score: { type: Number },
    },
    openness: {
      value: { type: Number },
      weightage: { type: Number },
      score: { type: Number },
    },
  },
  reliabilityScores: {
    design: {
      value: { type: Number },
      weightage: { type: Number },
      score: { type: Number },
    },
    framework: {
      value: { type: Number },
      weightage: { type: Number },
      score: { type: Number },
    },
    coding: {
      value: { type: Number },
      weightage: { type: Number },
      score: { type: Number },
    },
    debugging: {
      value: { type: Number },
      weightage: { type: Number },
      score: { type: Number },
    },
    architecture: {
      value: { type: Number },
      weightage: { type: Number },
      score: { type: Number },
    },
    implementation: {
      value: { type: Number },
      weightage: { type: Number },
      score: { type: Number },
    },
  },
  undesirableScores: {
    plagiarism: {
      value: { type: Number },
      weightage: { type: Number },
      score: { type: Number },
    },
    trustIssues: {
      value: { type: Number },
      weightage: { type: Number },
      score: { type: Number },
    },
    fakeInformation: {
      value: { type: Number },
      weightage: { type: Number },
      score: { type: Number },
    },
  },
  mainBelievabilityScore: { type: Number },
  mainEmotionalIntelligencyScores: { type: Number },
  mainreliabilityScore: { type: Number },
  mainUndesirableScore: { type: Number },
  mainScore: {
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
  "candidateScores",
  believabilityScoreSchema,
  "candidateScores"
);
