const Joi = require("joi");

const believabilitySchema = Joi.object({
  _id: Joi.string().min(24).max(24).required().messages({
    "string.empty": "User id is not allowed to be empty",
    "any.required": "User id is required",
  }),
  jobRole: Joi.string().min(24).max(24).required().messages({
    "string.empty": "Job Role is not allowed to be empty",
    "any.required": "Job Role is required",
  }),
  currentJobExperience: Joi.string().min(24).max(24).required().messages({
    "string.empty": "Current Job Experience is not allowed to be empty",
    "any.required": "Current Job Experience is required",
  }),
  overallJobExperience: Joi.string().min(24).max(24).required().messages({
    "string.empty": "Overall Job Experience is not allowed to be empty",
    "any.required": "Overall Job Experience is required",
  }),
  preferredProgrammingLanguage: Joi.string()
    .min(24)
    .max(24)
    .required()
    .messages({
      "string.empty":
        "Preferred Programming Language is not allowed to be empty",
      "any.required": "Preferred Programming Language is required",
    }),
  highestEducation: Joi.string().min(24).max(24).required().messages({
    "string.empty": "Highest Education is not allowed to be empty",
    "any.required": "Highest Education is required",
  }),
  githubLink: Joi.any(),
  stackOverFlowLink: Joi.any(),
  kaggleLink: Joi.any(),
  linkedInLink: Joi.any(),
  educationDomain: Joi.any(),
});

module.exports = {
  believabilitySchema,
};
