const mongoose = require("mongoose");

const domainModelSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
});

const BelievabilityDomain = mongoose.model(
  "believabilityDomains",
  domainModelSchema,
  "believabilityDomains"
);

module.exports = BelievabilityDomain;
