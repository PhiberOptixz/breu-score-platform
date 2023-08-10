const corporateModel = require("./corporateModel");
const candidateModel = require("../candidate/candidateModel");

async function getCorporateById(data) {
  try {
    let result = await corporateModel.findById({ _id: data }).lean();
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

async function getAllCorporates(data) {
  try {
    let result = await corporateModel.find({}).lean();
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

async function getCorporateByEmail(data) {
  try {
    let result = await corporateModel
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

async function getCorporateByPhoneNumber(data) {
  try {
    let result = await corporateModel
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

async function updateCorporateDetails(data) {
  try {
    let result = await corporateModel.findOneAndUpdate(
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

async function getCorporateCandidates(data) {
  try {
    let result = await candidateModel.aggregate([
      {
        $match: { linkedCorporates: { $in: [data] } },
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
  getCorporateByEmail,
  getCorporateByPhoneNumber,
  getCorporateById,
  updateCorporateDetails,
  getAllCorporates,
  getCorporateCandidates,
};
