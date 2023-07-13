const candidateModel = require("../candidate/candidateModel");
const corporateModel = require("../corporate/corporateModel");
const recruiterModel = require("../recruiter/recruiterModel");

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

async function corporateRegister(data) {
  data.createdAt = new Date();
  data.updatedAt = new Date();
  const corporateDetails = new corporateModel(data);
  try {
    let result = await corporateDetails.save();
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

async function corporateLogin(data) {
  try {
    let result = await corporateModel.findOne({ email: data.email }).lean();
    return result;
  } catch (err) {
    throw err;
  }
}

async function recruiterRegister(data) {
  data.createdAt = new Date();
  data.updatedAt = new Date();
  const recruiterDetails = new recruiterModel(data);
  try {
    let result = await recruiterDetails.save();
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

async function recruiterLogin(data) {
  try {
    let result = await recruiterModel.findOne({ email: data.email }).lean();
    return result;
  } catch (err) {
    throw err;
  }
}

module.exports = {
  candidateRegister,
  candidateLogin,
  corporateRegister,
  corporateLogin,
  recruiterRegister,
  recruiterLogin,
};
