const mongoose = require("mongoose");

// Create User Schema
let recruiterSchema = new mongoose.Schema({
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
  recruiterName: {
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
  linkedCorporates: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "corporateDetails",
    },
  ],
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
  "recruiterDetails",
  recruiterSchema,
  "recruiterDetails"
);
