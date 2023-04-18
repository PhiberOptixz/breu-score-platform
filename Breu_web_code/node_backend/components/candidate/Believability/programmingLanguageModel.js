const mongoose = require("mongoose");

const languageScehma = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
});

const BelievabilityLanguage = mongoose.model(
  "believabilityLanguages",
  languageScehma,
  "believabilityLanguages"
);

module.exports = BelievabilityLanguage;
