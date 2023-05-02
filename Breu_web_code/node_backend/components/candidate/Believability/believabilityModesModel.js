const mongoose = require("mongoose");

const employmentModeSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
});

const BelievabilityEmploymentMode = mongoose.model(
  "believabilityEmploymentModes",
  employmentModeSchema,
  "believabilityEmploymentModes"
);

module.exports = BelievabilityEmploymentMode;
