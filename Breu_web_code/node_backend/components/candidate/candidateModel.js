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
    type: mongoose.Schema.Types.ObjectId,
    ref: "believabilityRoles",
  },
  currentJobExperience: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "believabilityExperiences",
  },
  overallJobExperience: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "believabilityExperiences",
  },
  preferredProgrammingLanguage: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "believabilityLanguages",
  },
  proficiency: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "believabilityProficiencys",
  },
  highestEducation: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "believabilityEducations",
  },
  domain: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "believabilityDomains",
  },
  employmentMode: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "believabilityEmploymentModes",
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
