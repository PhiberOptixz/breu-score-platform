const bcrypt = require("bcrypt");
const authValidator = require("./authValidations");
const candidateDAL = require("../candidate/candidateDAL");
const authJWT = require("../../middlewares/authJWT");
const authDAL = require("./authDAL");
let saltRounds = 10;
const colors = require("../../helpers/colors");
const AppError = require("../../helpers/appError");
const jwt = require("jsonwebtoken");

//Candidate Register
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
    const phoneExist = await candidateDAL.getCandidateByPhoneNumber(data);
    if (phoneExist)
      return next(new AppError("Phone number already exists !!!", 400));
    // Storing user data with hashed password
    bcrypt.hash(data.password, saltRounds, async (err, hash) => {
      if (err) return next(new AppError("Error while hashing password", 400));
      data.password = hash;
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

// Candidate login
module.exports.candidateSignIn = async function (req, res, next) {
  try {
    try {
      await authValidator.authSchema.validateAsync(req.body);
    } catch (error) {
      if (error.isJoi === true) return next(new AppError(error.message, 422));
    }
    const data = {
      email: req.body.email.toLowerCase(),
      password: req.body.password,
    };
    let candidateData = await authDAL.candidateLogin(data);
    if (candidateData) {
      try {
        const match = await bcrypt.compare(
          data.password,
          candidateData.password
        );
        if (match) {
          const token = await authJWT.signJWTToken({
            _id: candidateData._id,
          });
          candidateData.password = undefined;
          res.header("Authorization", token).status(200).json({
            status: "SUCCESS",
            message: "Login successfull !",
            token: token,
          });
        } else {
          return next(new AppError("Password is incorrect !", 400));
        }
      } catch (err) {
        console.log(colors.red, `bcrypt compare err ${err}`);
        return next(new AppError(err, 400));
      }
    } else {
      return next(new AppError("Candidate does not exists !", 400));
    }
  } catch (err) {
    return next(new AppError(err, 400));
  }
};

module.exports.getCandidateDetails = async (req, res, next) => {
  try {
    const candidateDetails = await candidateDAL.getCandidateById(
      req.decoded._id
    );
    candidateDetails.password = undefined;
    return res.send(candidateDetails);
  } catch (error) {
    console.error(colors.red, `Error getting user record`, error);
    return next(new AppError(error, 400));
  }
};
