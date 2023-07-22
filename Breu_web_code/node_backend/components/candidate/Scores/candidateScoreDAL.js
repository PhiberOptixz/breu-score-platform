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

module.exports = {
  getCandidateScoreById,
};
