const colors = require("../../../helpers/colors");
const AppError = require("../../../helpers/appError");
const candidateScoreDAL = require("./candidateScoreDAL");

module.exports.getCandidateScoreById = async (req, res, next) => {
  try {
    const id = req.params.candidateId;
    const data = await candidateScoreDAL.getCandidateScoreById(id);
    return res.send({ message: "SUCCESS", data: data });
  } catch (error) {
    console.error(colors.red, `Error fetching candidate Score`, error);
    return next(new AppError(error, 400));
  }
};
