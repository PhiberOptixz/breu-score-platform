const bcrypt = require("bcrypt");
const authValidator = require("./authValidations");
const corporateDAL = require("../corporate/corporateDAL");
const authJWT = require("../../middlewares/authJWT");
const authDAL = require("./authDAL");
let saltRounds = 10;
const colors = require("../../helpers/colors");
const AppError = require("../../helpers/appError");
const jwt = require("jsonwebtoken");

//Corporate Register
module.exports.corporateRegister = async function (req, res, next) {
  try {
    const data = req.body;
    try {
      await authValidator.corporateRegisterSchema.validateAsync(data);
    } catch (error) {
      if (error.isJoi === true) return next(new AppError(error.message, 422));
    }
    //Checking if Email Exists
    data.email = data?.email?.toLowerCase();
    const emailExist = await corporateDAL.getCorporateByEmail(data);
    if (emailExist) return next(new AppError("Email already exists !!!", 400));
    //Checking if Phone number Exists
    const phoneExist = await corporateDAL.getCorporateByPhoneNumber(data);
    if (phoneExist)
      return next(new AppError("Phone number already exists !!!", 400));
    // Storing user data with hashed password
    bcrypt.hash(data.password, saltRounds, async (err, hash) => {
      if (err) return next(new AppError("Error while hashing password", 400));
      data.password = hash;
      const registerCorporate = await authDAL.corporateRegister(data);
      return res
        .status(200)
        .json({ status: "SUCCESS", message: "Registered successfully" });
    });
  } catch (err) {
    console.error(colors.red, `Error creating corporate record`, err);
    return next(new AppError(err, 400));
  }
};

// Corporate login
module.exports.corporateSignIn = async function (req, res, next) {
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
    let corporateData = await authDAL.corporateLogin(data);
    if (corporateData) {
      try {
        const match = await bcrypt.compare(
          data.password,
          corporateData.password
        );
        if (match) {
          const token = await authJWT.signJWTToken({
            _id: corporateData._id,
          });
          corporateData.password = undefined;
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
      return next(new AppError("Corporate does not exists !", 400));
    }
  } catch (err) {
    return next(new AppError(err, 400));
  }
};

module.exports.getCorporateDetails = async (req, res, next) => {
  try {
    const corporateDetails = await corporateDAL.getCorporateById(
      req.decoded._id
    );
    corporateDetails.password = undefined;
    return res.send(corporateDetails);
  } catch (error) {
    console.error(colors.red, `Error getting user record`, error);
    return next(new AppError(error, 400));
  }
};
