const mongoose = require("mongoose");

const ProficiencyScehma = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
});

const BelievabilityProficiency = mongoose.model(
  "believabilityProficiencys",
  ProficiencyScehma,
  "believabilityProficiencys"
);

module.exports = BelievabilityProficiency;
