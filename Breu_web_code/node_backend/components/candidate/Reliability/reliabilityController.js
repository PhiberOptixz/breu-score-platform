const colors = require("../../../helpers/colors");
const AppError = require("../../../helpers/appError");
const reliabilityDAL = require("./reliabilityDAL");
const candidateDAL = require("../candidateDAL");
const { default: mongoose } = require("mongoose");

module.exports.addQuestions = async function (req, res, next) {
  try {
    const data = req.body;
    const addQuestionsdata = await reliabilityDAL.addQuestions(data);
    return res
      .status(200)
      .json({ status: "SUCCESS", message: "Question added successfully" });
  } catch (err) {
    console.error(colors.red, `Error while adding questions`, err);
    return next(new AppError(err, 400));
  }
};

module.exports.fetchQuestionsData = async (req, res, next) => {
  try {
    const candidateExists = await candidateDAL.getCandidateById(
      req.decoded._id
    );
    if (candidateExists) {
      const designQuestions = await reliabilityDAL.fetchDesignQuestions({
        role: new mongoose.Types.ObjectId(candidateExists.jobRole?._id),
        language: new mongoose.Types.ObjectId(
          candidateExists.preferredProgrammingLanguage?._id
        ),
      });
      const debuggingQuestions = await reliabilityDAL.fetchDebuggingQuestions({
        role: new mongoose.Types.ObjectId(candidateExists.jobRole?._id),
        language: new mongoose.Types.ObjectId(
          candidateExists.preferredProgrammingLanguage?._id
        ),
      });
      const architectureQuestions =
        await reliabilityDAL.fetchArchitectureQuestions({
          role: new mongoose.Types.ObjectId(candidateExists.jobRole?._id),
          language: new mongoose.Types.ObjectId(
            candidateExists.preferredProgrammingLanguage?._id
          ),
        });
      const frameworkQuestions = await reliabilityDAL.fetchFrameworkQuestions({
        role: new mongoose.Types.ObjectId(candidateExists.jobRole?._id),
        language: new mongoose.Types.ObjectId(
          candidateExists.preferredProgrammingLanguage?._id
        ),
      });
      const codingQuestions = await reliabilityDAL.fetchCodingQuestions({
        role: new mongoose.Types.ObjectId(candidateExists.jobRole?._id),
        language: new mongoose.Types.ObjectId(
          candidateExists.preferredProgrammingLanguage?._id
        ),
      });
      const implementationQuestins =
        await reliabilityDAL.fetchImplementationQuestions({
          role: new mongoose.Types.ObjectId(candidateExists.jobRole?._id),
          language: new mongoose.Types.ObjectId(
            candidateExists.preferredProgrammingLanguage?._id
          ),
        });
      return res.send({
        message: "SUCCESS",
        data: [
          ...designQuestions,
          ...debuggingQuestions,
          ...architectureQuestions,
          ...frameworkQuestions,
          ...codingQuestions,
          ...implementationQuestins,
        ],
      });
    } else {
      return next(new AppError("Could not find candidate", 400));
    }
  } catch (error) {
    console.error(colors.red, `Error fetching questions`, error);
    return next(new AppError(error, 400));
  }
};

module.exports.postCandidateAnswers = async function (req, res, next) {
  try {
    const data = req.body;
    const addReliabilitydata = await reliabilityDAL.postUserReliabiltyQuestions(
      data
    );
    const updateCandidateData = await candidateDAL.updateCandidateDetails({
      _id: data?.candidateId,
      completedReliability: true,
    });
    return res.status(200).json({
      status: "SUCCESS",
      message: "Reliability answers added successfully",
    });
  } catch (err) {
    console.error(colors.red, `Error while adding Reliability answers`, err);
    return next(new AppError(err, 400));
  }
};

module.exports.getReliabilityResults = async function (req, res, next) {
  try {
    const id = req.params.candidateId;
    const getResults = await reliabilityDAL.getReliabilityResults(
      new mongoose.Types.ObjectId(id)
    );
    let reliabilityScore = {
      architecture: 0,
      coding: 0,
      design: 0,
      debugging: 0,
      framework: 0,
      implementation: 0,
    };

    const resultData = await getResults[0]?.questionsAttended?.map((item) => {
      const questionFound = getResults[0]?.questions?.find(
        (question) => question?._id?.toString() === item?.questionId?.toString()
      );
      if (questionFound) {
        // console.log(
        //   item?.selectedChoice === questionFound?.questionAnswer,
        //   questionFound?.reliabilityType
        // );

        if (item?.selectedChoice === questionFound?.questionAnswer) {
          reliabilityScore = {
            ...reliabilityScore,
            [questionFound?.reliabilityType]:
              reliabilityScore[questionFound?.reliabilityType] + 1,
          };
        }
        return {
          _id: questionFound?._id,
          description: questionFound?.description,
          codeSnippet: questionFound?.codeSnippet,
          questionChoices: questionFound?.questionChoices,
          questionAnswer: questionFound?.questionAnswer,
          userAnswer: item?.selectedChoice,
          result: item?.selectedChoice === questionFound?.questionAnswer,
          reliabilityType: questionFound?.reliabilityType,
          reliabilityValue: questionFound?.reliabilityValue,
        };
      }
    });
    return res.status(200).json({
      status: "SUCCESS",
      message: "Reliability answers added successfully",
      data: resultData,
      reliabilityScore,
    });
  } catch (err) {
    console.error(colors.red, `Error while adding Reliability answers`, err);
    return next(new AppError(err, 400));
  }
};

module.exports.getCandidateVideos = async function (req, res, next) {
  try {
    const id = req.params.candidateId;
    const getReliabilityData = await reliabilityDAL.getCandidateReliabilityData(
      req.decoded._id
    );
    return res.status(200).json({
      status: "SUCCESS",
      message: "Fetched Reliability successfully",
      data: getReliabilityData,
    });
  } catch (err) {
    console.error(colors.red, `Error while fetching Reliability data`, err);
    return next(new AppError(err, 400));
  }
};
