const mongoose = require("mongoose");

// Create User Schema
let questionLevelsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
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
  "questionLevels",
  questionLevelsSchema,
  "questionLevels"
);
