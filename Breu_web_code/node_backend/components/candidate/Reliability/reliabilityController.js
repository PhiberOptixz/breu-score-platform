const colors = require("../../../helpers/colors");
const AppError = require("../../../helpers/appError");
const reliabilityDAL = require("./reliabilityDAL");
const candidateDAL = require("../candidateDAL");

module.exports.addQuestions = async function (req, res, next) {
  try {
    const data = req.body;
    const addQuestionsdata = await reliabilityDAL.addQuestions(data);
    return res
      .status(200)
      .json({ status: "SUCCESS", message: "Question added successfully" });
  } catch (err) {
    console.error(colors.red, `Error adding questions`, err);
    return next(new AppError(err, 400));
  }
};

module.exports.fetchQuestionsData = async (req, res, next) => {
  try {
    const candidateExists = await candidateDAL.getCandidateById(
      req.decoded._id
    );
    if (candidateExists) {
      const data = await reliabilityDAL.fetchQuestions(
        candidateExists.jobRole?._id
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
