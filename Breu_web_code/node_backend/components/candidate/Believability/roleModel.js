const mongoose = require("mongoose");

const RoleScehma = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
});

const BelievabilityRole = mongoose.model(
  "believabilityRoles",
  RoleScehma,
  "believabilityRoles"
);

module.exports = BelievabilityRole;
