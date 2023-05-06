const mongoose = require("mongoose");

// Create User Schema
let reliabilitySchema = new mongoose.Schema({
  candidateId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "candidateDetails",
  },
  questionsAttended: [
    {
      questionId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "candidateDetails",
      },
      selectedChoice: {
        type: String,
      },
    },
  ],
  interestingProjectVideo: {
    link: { type: String },
    key: { type: String },
    name: { type: String },
  },
  conflictResolutionVideo: {
    link: { type: String },
    key: { type: String },
    name: { type: String },
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
  "reliability",
  reliabilitySchema,
  "reliability"
);
