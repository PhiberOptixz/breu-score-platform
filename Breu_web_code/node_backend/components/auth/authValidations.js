const Joi = require("joi");

const candidateRegisterSchema = Joi.object({
  firstName: Joi.string().min(4).required(),
  lastName: Joi.string().required(),
  email: Joi.string().email().required(),
  phoneNumber: Joi.number().required(),
  password: Joi.string().required(),
});

const corporateRegisterSchema = Joi.object({
  firstName: Joi.string().min(3).required(),
  lastName: Joi.string().required(),
  email: Joi.string().email().required(),
  corporateName: Joi.string().required(),
  phoneNumber: Joi.number().required(),
  password: Joi.string().required(),
});

const recruiterRegisterSchema = Joi.object({
  firstName: Joi.string().min(3).required(),
  lastName: Joi.string().required(),
  email: Joi.string().email().required(),
  recruiterName: Joi.string().required(),
  phoneNumber: Joi.number().required(),
  password: Joi.string().required(),
});

const authSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required(),
});

module.exports = {
  candidateRegisterSchema,
  corporateRegisterSchema,
  recruiterRegisterSchema,
  authSchema,
};
