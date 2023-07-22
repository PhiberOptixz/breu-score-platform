const colors = require("../../helpers/colors");
const AppError = require("../../helpers/appError");
const corporateDAL = require("./corporateDAL");
const mongoose = require("mongoose");

module.exports.getAllCorporates = async (req, res, next) => {
  try {
    const data = await corporateDAL.getAllCorporates();
    return res.send({ message: "SUCCESS", data: data });
  } catch (error) {
    console.error(colors.red, `Error fetching questions`, error);
    return next(new AppError(error, 400));
  }
};

module.exports.getCorporateCandidates = async (req, res, next) => {
  try {
    const corporateExists = await corporateDAL.getCorporateById(
      req.decoded._id
    );
    if (corporateExists) {
      const data = await corporateDAL.getCorporateCandidates(
        new mongoose.Types.ObjectId(req.decoded._id)
      );
      return res.send({ message: "SUCCESS", data: data });
    } else {
      return next(new AppError("Could not find candidate", 400));
    }
  } catch (error) {
    console.error(colors.red, `Error fetching questions`, error);
    return next(new AppError(error, 400));
  }
};
