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

async function candidateLogin(data) {
  try {
    let result = await candidateModel.findOne({ email: data.email }).lean();
    return result;
  } catch (err) {
    throw err;
  }
}

module.exports = {
  candidateRegister,
  candidateLogin,
};
