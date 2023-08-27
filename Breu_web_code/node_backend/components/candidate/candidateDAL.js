const candidateModel = require("./candidateModel");

async function getCandidateById(data) {
  try {
    let result = await candidateModel
      .findById({ _id: data })
      .populate({
        path: "jobRole",
        model: "believabilityRoles",
        select: "name",
      })
      .populate({
        path: "currentJobExperience",
        model: "believabilityExperiences",
        select: "name",
      })
      .populate({
        path: "overallJobExperience",
        model: "believabilityExperiences",
        select: "name",
      })
      .populate({
        path: "overallJobExperience",
        model: "believabilityOverallExperiences",
        select: "name",
      })
      .populate({
        path: "preferredProgrammingLanguage",
        model: "believabilityLanguages",
        select: "name",
      })
      .populate({
        path: "proficiency",
        model: "believabilityProficiencys",
        select: "name",
      })
      .populate({
        path: "highestEducation",
        model: "believabilityEducations",
        select: "name",
      })
      .populate({
        path: "domain",
        model: "believabilityDomains",
        select: "name",
      })
      .populate({
        path: "employmentMode",
        model: "believabilityEmploymentModes",
        select: "name",
      })
      .lean();
    return result;
  } catch (err) {
    console.log(err);
    if (err.message) {
      throw err.message;
    } else {
      throw err;
    }
  }
}

async function getCandidateByEmail(data) {
  try {
    let result = await candidateModel
      .findOne({ email: data.email.toLowerCase() })
      .lean();
    return result;
  } catch (err) {
    console.log(err);
    if (err.message) {
      throw err.message;
    } else {
      throw err;
    }
  }
}

async function getAllCandidates(data) {
  try {
    let result = await candidateModel.aggregate([
      {
        $lookup: {
          from: "reliability",
          localField: "_id",
          foreignField: "candidateId",
          as: "videos",
        },
      },
      {
        $lookup: {
          from: "candidateScores",
          localField: "_id",
          foreignField: "candidateId",
          as: "score",
        },
      },
      {
        $unwind: {
          path: "$score",
          preserveNullAndEmptyArrays: true,
        },
      },
      {
        $sort: {
          "score.mainScore": -1,
        },
      },
    ]);

    return result;
  } catch (err) {
    console.log(err);
    if (err.message) {
      throw err.message;
    } else {
      throw err;
    }
  }
}

async function getCandidateByPhoneNumber(data) {
  try {
    let result = await candidateModel
      .findOne({ phoneNumber: data.phoneNumber })
      .lean();
    return result;
  } catch (err) {
    console.log(err);
    if (err.message) {
      throw err.message;
    } else {
      throw err;
    }
  }
}

async function updateCandidateDetails(data) {
  try {
    let result = await candidateModel.findOneAndUpdate(
      { _id: data._id },
      data,
      {
        new: true,
      }
    );
    return result;
  } catch (err) {
    throw err;
  }
}

module.exports = {
  getCandidateByEmail,
  getCandidateByPhoneNumber,
  getCandidateById,
  updateCandidateDetails,
  getAllCandidates,
};
