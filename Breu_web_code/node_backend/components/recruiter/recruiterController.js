const colors = require("../../helpers/colors");
const AppError = require("../../helpers/appError");
const recruiterDAL = require("./recruiterDAL");
const candidateDAL = require("../candidate/candidateDAL");
const mongoose = require("mongoose");

module.exports.getRecruiterCandidates = async (req, res, next) => {
  try {
    const recruiterExists = await recruiterDAL.getRecruiterById(
      req.decoded._id
    );
    if (recruiterExists) {
      const data = await recruiterDAL.getCandidateRecruiters(
        new mongoose.Types.ObjectId(req.decoded._id)
      );
      return res.send({ message: "SUCCESS", data: data });
    } else {
      return next(new AppError("Could not find candidate", 400));
    }
  } catch (error) {
    console.error(colors.red, `Error fetching candidates`, error);
    return next(new AppError(error, 400));
  }
};

module.exports.getAllRecruiters = async (req, res, next) => {
  try {
    const data = await recruiterDAL.getAllRecruiters();
    return res.send({ message: "SUCCESS", data: data });
  } catch (error) {
    console.error(colors.red, `Error fetching candidates`, error);
    return next(new AppError(error, 400));
  }
};

module.exports.sendCandidateToCorporate = async (req, res) => {
  try {
    const data = req.body;

    data.updatedAt = new Date();
    let updateFunction = await candidateDAL.updateCandidateDetails(data);
    return res.status(200).send({
      status: 200,
      message: "Successfully sent to Corporate",
    });
  } catch (error) {
    return res
      .status(400)
      .send({ message: "Believability error", error: error });
  }
};

module.exports.getRecruiterSpecificCorporates = async (req, res, next) => {
  try {
    const recruiterExists = await recruiterDAL.getRecruiterById(
      req.decoded._id
    );
    const data = await recruiterDAL.getCorporateByRecruiterId(
      recruiterExists?.linkedCorporates
    );
    return res.send({ message: "SUCCESS", data: data });
  } catch (error) {
    console.error(colors.red, `Error fetching Corporate list`, error);
    return next(new AppError(error, 400));
  }
};
