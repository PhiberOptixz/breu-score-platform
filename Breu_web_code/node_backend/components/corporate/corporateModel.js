const mongoose = require("mongoose");

// Create User Schema
let corporateSchema = new mongoose.Schema({
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
  corporateName: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: Number,
  },
  password: {
    type: String,
    required: true,
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
  "corporateDetails",
  corporateSchema,
  "corporateDetails"
);
