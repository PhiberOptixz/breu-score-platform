const corporateModel = require("./corporateModel");

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

module.exports = {
  getCorporateByEmail,
  getCorporateByPhoneNumber,
  getCorporateById,
  updateCorporateDetails,
};
