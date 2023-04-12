const Joi = require("joi");

const candidateRegisterSchema = Joi.object({
  firstName: Joi.string().min(4).required(),
  lastName: Joi.string().min(4).required(),
  email: Joi.string().email().required(),
  phoneNumber: Joi.number().required(),
  password: Joi.string().required(),
});

module.exports = {
  candidateRegisterSchema,
};
