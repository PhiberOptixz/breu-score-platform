const colors = require("../../helpers/colors");
const AppError = require("../../helpers/appError");
const candidateDAL = require("../candidate/candidateDAL");
const adminDAL = require("./adminDAL");

module.exports.getAllCandidates = async (req, res, next) => {
  try {
    const adminExists = await adminDAL.getAdminById(req.decoded._id);
    if (adminExists) {
      const data = await candidateDAL.getAllCandidates();
      return res.send({ message: "SUCCESS", data: data });
    } else {
      return next(new AppError("Could not find candidates", 400));
    }
  } catch (error) {
    console.error(colors.red, `Error fetching candidates`, error);
    return next(new AppError(error, 400));
  }
};

module.exports.getCandidateBData = async (req, res, next) => {
  try {
    const candidateId = req.params.candidateId;
    const adminExists = await adminDAL.getAdminById(req.decoded._id);
    if (adminExists) {
      const data = await candidateDAL.getCandidateById(candidateId);
      return res.send({ message: "SUCCESS", data: data });
    } else {
      return next(new AppError("Could not find candidate", 400));
    }
  } catch (error) {
    console.error(colors.red, `Error fetching candidate`, error);
    return next(new AppError(error, 400));
  }
};

module.exports.addScore = async function (req, res, next) {
  try {
    const data = req.body;
    const addScores = await adminDAL.addCandidateScores(data);
    return res
      .status(200)
      .json({ status: "SUCCESS", message: "Scores added successfully" });
  } catch (err) {
    console.error(colors.red, `Error while adding scores`, err);
    return next(new AppError(err, 400));
  }
};

module.exports.updateCandidateScore = async function (req, res, next) {
  try {
    const data = req.body;
    const updateScores = await adminDAL.updateCandidateScores(data);
    return res
      .status(200)
      .json({ status: "SUCCESS", message: "Scores updated successfully" });
  } catch (err) {
    console.error(colors.red, `Error while updating candidate score`, err);
    return next(new AppError(err, 400));
  }
};

module.exports.linkCandidateRecruiter = async function (req, res, next) {
  try {
    const data = req.body;
    const updateScores = await candidateDAL.updateCandidateDetails(data);
    return res
      .status(200)
      .json({ status: "SUCCESS", message: "Linked recruiter successfully" });
  } catch (err) {
    console.error(colors.red, `Error while updating candidate data`, err);
    return next(new AppError(err, 400));
  }
};
