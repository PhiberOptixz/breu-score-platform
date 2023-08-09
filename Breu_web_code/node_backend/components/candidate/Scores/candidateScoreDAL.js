const candidateScoreModel = require("./candidateScoreModel");

async function getCandidateScoreById(data) {
  try {
    let result = await candidateScoreModel
      .findOne({ candidateId: data })
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

async function getAllCandidateScores(data) {
  console.log(data);
  try {
    let result = await candidateScoreModel.aggregate([
      {
        $lookup: {
          from: "candidateDetails",
          localField: "candidateId",
          foreignField: "_id",
          as: "candidate",
        },
      },
      {
        $unwind: "$candidate",
      },
      {
        $lookup: {
          from: "believabilityRoles",
          localField: "candidate.jobRole",
          foreignField: "_id",
          as: "role",
        },
      },
      {
        $unwind: "$role",
      },
      {
        $match: {
          "role._id": data,
        },
      },
      {
        $group: {
          _id: { role: "$role.name", _id: "$role._id" },
          scores: { $push: "$$ROOT" },
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

module.exports = {
  getCandidateScoreById,
  getAllCandidateScores,
};
