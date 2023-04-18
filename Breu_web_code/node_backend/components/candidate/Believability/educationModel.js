const mongoose = require("mongoose");

const educationSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
});

const BelievabilityEducation = mongoose.model(
  "believabilityEducations",
  educationSchema,
  "believabilityEducations"
);

module.exports = BelievabilityEducation;
