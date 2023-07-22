const bcrypt = require("bcrypt");
const authValidator = require("./authValidations");
const adminDAL = require("../admin/adminDAL");
const authJWT = require("../../middlewares/authJWT");
const authDAL = require("./authDAL");
let saltRounds = 10;
const colors = require("../../helpers/colors");
const AppError = require("../../helpers/appError");
const jwt = require("jsonwebtoken");

//Admin Register
module.exports.adminRegister = async function (req, res, next) {
  try {
    const data = req.body;
    try {
      await authValidator.adminRegisterSchema.validateAsync(data);
    } catch (error) {
      if (error.isJoi === true) return next(new AppError(error.message, 422));
    }
    //Checking if Email Exists
    data.email = data?.email?.toLowerCase();
    const emailExist = await adminDAL.getAdminByEmail(data);
    if (emailExist) return next(new AppError("Email already exists !!!", 400));
    //Checking if Phone number Exists
    const phoneExist = await adminDAL.getAdminByPhoneNumber(data);
    if (phoneExist)
      return next(new AppError("Phone number already exists !!!", 400));
    // Storing user data with hashed password
    bcrypt.hash(data.password, saltRounds, async (err, hash) => {
      if (err) return next(new AppError("Error while hashing password", 400));
      data.password = hash;
      const registerAdmin = await authDAL.adminRegister(data);
      return res
        .status(200)
        .json({ status: "SUCCESS", message: "Registered successfully" });
    });
  } catch (err) {
    console.error(colors.red, `Error creating admin record`, err);
    return next(new AppError(err, 400));
  }
};

// Admin login
module.exports.adminSignIn = async function (req, res, next) {
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
    let adminData = await authDAL.adminLogin(data);
    if (adminData) {
      try {
        const match = await bcrypt.compare(data.password, adminData.password);
        if (match) {
          const token = await authJWT.signJWTToken({
            _id: adminData._id,
          });
          adminData.password = undefined;
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
      return next(new AppError("Admin does not exists !", 400));
    }
  } catch (err) {
    return next(new AppError(err, 400));
  }
};

module.exports.getAdminDetails = async (req, res, next) => {
  try {
    const adminDetails = await adminDAL.getAdminById(req.decoded._id);
    adminDetails.password = undefined;
    return res.send(adminDetails);
  } catch (error) {
    console.error(colors.red, `Error getting user record`, error);
    return next(new AppError(error, 400));
  }
};

// admin login
module.exports.adminSignIn = async function (req, res, next) {
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
    let adminData = await authDAL.adminLogin(data);
    if (adminData) {
      try {
        const match = await bcrypt.compare(data.password, adminData.password);
        if (match) {
          const token = await authJWT.signJWTToken({
            _id: adminData._id,
          });
          adminData.password = undefined;
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
      return next(new AppError("Admin does not exists !", 400));
    }
  } catch (err) {
    return next(new AppError(err, 400));
  }
};

module.exports.getAdminDetails = async (req, res, next) => {
  try {
    const adminDetails = await adminDAL.getAdminById(req.decoded._id);
    adminDetails.password = undefined;
    return res.send(adminDetails);
  } catch (error) {
    console.error(colors.red, `Error getting user record`, error);
    return next(new AppError(error, 400));
  }
};
