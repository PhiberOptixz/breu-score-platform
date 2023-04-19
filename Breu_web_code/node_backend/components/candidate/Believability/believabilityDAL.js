const domainModel = require("./domainModel");
const educationModel = require("./educationModel");
const experienceModel = require("./experienceModel");
const proficiencyModel = require("./proficiencyModel");
const programmingLanguageModel = require("./programmingLanguageModel");
const roleModel = require("./roleModel");
const candidateModel = require("../candidateModel");

async function getAllDomains() {
  try {
    let result = await domainModel.find({}).lean();
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

async function getAllEducations() {
  try {
    let result = await educationModel.find({}).lean();
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
async function getAllExperiences() {
  try {
    let result = await experienceModel.find({}).lean();
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
async function getAllProficiencies() {
  try {
    let result = await proficiencyModel.find({}).lean();
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
async function getAllLanguages() {
  try {
    let result = await programmingLanguageModel.find({}).lean();
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
async function getAllRoles() {
  try {
    let result = await roleModel.find({}).lean();
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

async function addBelievabilityDetails(data) {
  try {
    let result = await candidateModel.findOneAndUpdate(
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
  getAllDomains,
  getAllEducations,
  getAllExperiences,
  getAllLanguages,
  getAllProficiencies,
  getAllRoles,
  addBelievabilityDetails,
};
