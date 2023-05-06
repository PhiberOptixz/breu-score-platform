const questionsModel = require("./questionsModel");
const reliabilityModel = require("./reliabilityModel");

async function postUserReliabiltyQuestions(data) {
  data.createdAt = new Date();
  data.updatedAt = new Date();
  const questionDetails = new reliabilityModel(data);
  try {
    let result = await questionDetails.save();
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

async function addQuestions(data) {
  data.createdAt = new Date();
  data.updatedAt = new Date();
  const questionDetails = new questionsModel(data);
  try {
    let result = await questionDetails.save();
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

async function fetchQuestions(data) {
  try {
    let result = await questionsModel.aggregate([
      {
        $match: {
          roles: { $in: [data] },
        },
      },
      {
        $sample: {
          size: 4,
        },
      },
    ]);
    return result;
  } catch (err) {
    throw err;
  }
}

module.exports = {
  addQuestions,
  fetchQuestions,
  postUserReliabiltyQuestions,
};
