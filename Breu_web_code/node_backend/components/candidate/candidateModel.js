const { number } = require("joi");
const mongoose = require("mongoose");

// Create User Schema
let candidateSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: Number,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  jobRole: {
    type: String,
  },
  currentJobExperience: {
    type: Number,
  },
  overallJobExperience: {
    type: Number,
  },
  preferredProgrammingLanguage: {
    type: String,
  },
  highestEducation: {
    type: String,
  },
  githubLink: {
    type: String,
  },
  stackOverFlowLink: {
    type: String,
  },
  kaggleLink: {
    type: String,
  },
  linkedInLink: {
    type: String,
  },
  educationDomain: {
    type: String,
  },
  status: {
    type: Boolean,
  },
  completedBelievability: {
    type: Boolean,
    default: false,
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
  "candidateDetails",
  candidateSchema,
  "candidateDetails"
);
