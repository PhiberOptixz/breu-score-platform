const candidateModel = require("./candidateModel");

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

module.exports = {
  getCandidateByEmail,
};
