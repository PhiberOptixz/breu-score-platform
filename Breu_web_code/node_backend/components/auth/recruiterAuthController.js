const bcrypt = require("bcrypt");
const authValidator = require("./authValidations");
const recruiterDAL = require("../recruiter/recruiterDAL");
const authJWT = require("../../middlewares/authJWT");
const authDAL = require("./authDAL");
let saltRounds = 10;
const colors = require("../../helpers/colors");
const AppError = require("../../helpers/appError");
const jwt = require("jsonwebtoken");

//Recruiter Register
module.exports.recruiterRegister = async function (req, res, next) {
  try {
    const data = req.body;
    try {
      await authValidator.recruiterRegisterSchema.validateAsync(data);
    } catch (error) {
      if (error.isJoi === true) return next(new AppError(error.message, 422));
    }
    //Checking if Email Exists
    data.email = data?.email?.toLowerCase();
    const emailExist = await recruiterDAL.getRecruiterByEmail(data);
    if (emailExist) return next(new AppError("Email already exists !!!", 400));
    //Checking if Phone number Exists
    const phoneExist = await recruiterDAL.getRecruiterByPhoneNumber(data);
    if (phoneExist)
      return next(new AppError("Phone number already exists !!!", 400));
    // Storing user data with hashed password
    bcrypt.hash(data.password, saltRounds, async (err, hash) => {
      if (err) return next(new AppError("Error while hashing password", 400));
      data.password = hash;
      const registerRecruiter = await authDAL.recruiterRegister(data);
      return res
        .status(200)
        .json({ status: "SUCCESS", message: "Registered successfully" });
    });
  } catch (err) {
    console.error(colors.red, `Error creating recruiter record`, err);
    return next(new AppError(err, 400));
  }
};

// Recruiter login
module.exports.recruiterSignIn = async function (req, res, next) {
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
    let recruiterData = await authDAL.recruiterLogin(data);
    if (recruiterData) {
      try {
        const match = await bcrypt.compare(
          data.password,
          recruiterData.password
        );
        if (match) {
          const token = await authJWT.signJWTToken({
            _id: recruiterData._id,
          });
          recruiterData.password = undefined;
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
      return next(new AppError("Recruiter does not exists !", 400));
    }
  } catch (err) {
    return next(new AppError(err, 400));
  }
};

module.exports.getRecruiterDetails = async (req, res, next) => {
  try {
    const recruiterDetails = await recruiterDAL.getRecruiterById(
      req.decoded._id
    );
    recruiterDetails.password = undefined;
    return res.send(recruiterDetails);
  } catch (error) {
    console.error(colors.red, `Error getting user record`, error);
    return next(new AppError(error, 400));
  }
};
