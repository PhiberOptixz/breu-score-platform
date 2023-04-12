const candidateModel = require("../candidate/candidateModel");

async function candidateRegister(data) {
  data.createdAt = new Date();
  data.updatedAt = new Date();
  const candidateDetails = new candidateModel(data);
  try {
    let result = await candidateDetails.save();
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
  candidateRegister,
};
