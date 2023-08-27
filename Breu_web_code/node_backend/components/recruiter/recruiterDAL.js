const recruiterModel = require("./recruiterModel");
const candidateModel = require("../candidate/candidateModel");
const corporateModel = require("../corporate/corporateModel");

async function getRecruiterById(data) {
  try {
    let result = await recruiterModel.findById({ _id: data }).lean();
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

async function getAllRecruiters() {
  try {
    let result = await recruiterModel.find({}).lean();
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

async function getRecruiterByEmail(data) {
  try {
    let result = await recruiterModel
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

async function getCandidatebyRecruiterId(data) {
  try {
    let result = await recruiterModel
      .findOne({ linkedRecruiters: { $in: [data] } })
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

async function getCandidateRecruiters(data) {
  try {
    let result = await candidateModel.aggregate([
      {
        $match: { linkedRecruiters: { $in: [data] } },
      },
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
          as: "scores",
        },
      },
      {
        $sort: {
          "scores.mainScore": -1,
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

async function getRecruiterByPhoneNumber(data) {
  try {
    let result = await recruiterModel
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

async function updateRecruiterDetails(data) {
  try {
    let result = await recruiterModel.findOneAndUpdate(
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

async function getCorporateByRecruiterId(data) {
  try {
    let result = await corporateModel.find({ _id: { $in: data } }).lean();
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
  getRecruiterByEmail,
  getRecruiterByPhoneNumber,
  getRecruiterById,
  updateRecruiterDetails,
  getCandidatebyRecruiterId,
  getCandidateRecruiters,
  getCorporateByRecruiterId,
  getAllRecruiters,
};
