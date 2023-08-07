const adminModel = require("./adminModel");
const candidateScoreModel = require("../candidate/Scores/candidateScoreModel");

async function getAdminById(data) {
  try {
    let result = await adminModel.findById({ _id: data }).lean();
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

async function getAdminByEmail(data) {
  try {
    let result = await adminModel
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

async function getAdminByPhoneNumber(data) {
  try {
    let result = await adminModel
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

async function updateAdminDetails(data) {
  try {
    let result = await adminModel.findOneAndUpdate({ _id: data._id }, data, {
      new: true,
    });
    return result;
  } catch (err) {
    throw err;
  }
}

async function addCandidateScores(data) {
  data.createdAt = new Date();
  data.updatedAt = new Date();
  const scoreDetails = new candidateScoreModel(data);
  try {
    let result = await scoreDetails.save();
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

async function updateCandidateScores(data) {
  try {
    data.updatedAt = new Date();
    let result = await candidateScoreModel.findOneAndUpdate(
      { candidateId: data.candidateId },
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

async function getCandidateScoreById(data) {
  try {
    let result = await adminModel.findOne({ candidateId: data }).lean();
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
  getAdminByEmail,
  getAdminByPhoneNumber,
  getAdminById,
  updateAdminDetails,
  addCandidateScores,
  getCandidateScoreById,
  updateCandidateScores,
};
