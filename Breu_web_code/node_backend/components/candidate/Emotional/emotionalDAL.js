const reliabilityModel = require("../Reliability/reliabilityModel");

async function addCandidateVideo(data) {
  data.createdAt = new Date();
  data.updatedAt = new Date();
  try {
    let result = await reliabilityModel.findOneAndUpdate(
      { candidateId: data.candidateId },
      data,
      {
        new: true,
      }
    );
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
  addCandidateVideo,
};
