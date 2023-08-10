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

async function fetchDesignQuestions(data) {
  try {
    let result = await questionsModel.aggregate([
      {
        $match: {
          roles: { $in: [data] },
          reliabilityType: "design",
        },
      },
      {
        $sample: {
          size: 2,
        },
      },
    ]);
    return result;
  } catch (err) {
    throw err;
  }
}

async function fetchArchitectureQuestions(data) {
  try {
    let result = await questionsModel.aggregate([
      {
        $match: {
          roles: { $in: [data] },
          reliabilityType: "architecture",
        },
      },
      {
        $sample: {
          size: 2,
        },
      },
    ]);
    return result;
  } catch (err) {
    throw err;
  }
}

async function fetchCodingQuestions(data) {
  try {
    let result = await questionsModel.aggregate([
      {
        $match: {
          roles: { $in: [data] },
          reliabilityType: "coding",
        },
      },
      {
        $sample: {
          size: 2,
        },
      },
    ]);
    return result;
  } catch (err) {
    throw err;
  }
}

async function fetchDebuggingQuestions(data) {
  try {
    let result = await questionsModel.aggregate([
      {
        $match: {
          roles: { $in: [data] },
          reliabilityType: "debugging",
        },
      },
      {
        $sample: {
          size: 2,
        },
      },
    ]);
    return result;
  } catch (err) {
    throw err;
  }
}

async function fetchFrameworkQuestions(data) {
  try {
    let result = await questionsModel.aggregate([
      {
        $match: {
          roles: { $in: [data] },
          reliabilityType: "framework",
        },
      },
      {
        $sample: {
          size: 2,
        },
      },
    ]);
    return result;
  } catch (err) {
    throw err;
  }
}

async function fetchImplementationQuestions(data) {
  try {
    let result = await questionsModel.aggregate([
      {
        $match: {
          roles: { $in: [data] },
          reliabilityType: "implementation",
        },
      },
      {
        $sample: {
          size: 2,
        },
      },
    ]);
    return result;
  } catch (err) {
    throw err;
  }
}

async function getReliabilityResults(data) {
  try {
    let result = await reliabilityModel.aggregate([
      {
        $match: { candidateId: data },
      },
      {
        $lookup: {
          from: "believabilityQuestions",
          localField: "questionsAttended.questionId",
          foreignField: "_id",
          as: "questions",
        },
      },
    ]);
    return result;
  } catch (err) {
    throw err;
  }
}

async function getCandidateReliabilityData(data) {
  try {
    let result = await reliabilityModel.findOne({ candidateId: data }).lean();
    return result;
  } catch (err) {
    throw err;
  }
}

module.exports = {
  addQuestions,
  fetchDesignQuestions,
  fetchArchitectureQuestions,
  fetchCodingQuestions,
  fetchDebuggingQuestions,
  fetchFrameworkQuestions,
  fetchImplementationQuestions,
  postUserReliabiltyQuestions,
  getReliabilityResults,
  getCandidateReliabilityData,
};
