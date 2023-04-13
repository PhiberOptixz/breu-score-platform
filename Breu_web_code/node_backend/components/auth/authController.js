const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const authValidator = require("./authValidations");
const candidateDAL = require("../candidate/candidateDAL");
const authDAL = require("./authDAL");
let saltRounds = 10;
const colors = require("../../helpers/colors");
const AppError = require("../../helpers/appError");

//Consumer Register
module.exports.candidateRegister = async function (req, res, next) {
  try {
    const data = req.body;
    try {
      await authValidator.candidateRegisterSchema.validateAsync(data);
    } catch (error) {
      if (error.isJoi === true) return next(new AppError(error.message, 422));
    }
    //Checking if Email Exists
    const emailExist = await candidateDAL.getCandidateByEmail(data);
    if (emailExist) return next(new AppError("Email already exists !!!", 400));
    //Checking if Phone number Exists
    const phoneExist = await candidateDAL.getCandidateByEmail(data);
    if (phoneExist)
      return next(new AppError("Phone number already exists !!!", 400));
    // Storing user data with hashed password
    bcrypt.hash(data.password, saltRounds, async (err, hash) => {
      if (err) return next(new AppError("Error while hashing password", 400));

      const registerCandidate = await authDAL.candidateRegister(data);
      return res
        .status(200)
        .json({ status: "SUCCESS", message: "Registered successfully" });
    });
  } catch (err) {
    console.error(colors.red, `Error creating candidate record`, err);
    return next(new AppError(err, 400));
  }
};
