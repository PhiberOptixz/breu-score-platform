const parameterWeightagesModel = require("./parameterWeightagesModel");

async function addWeightage(data) {
  data.createdAt = new Date();
  data.updatedAt = new Date();
  const adminDetails = new parameterWeightagesModel(data);
  try {
    let result = await adminDetails.save();
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

async function getAllWeightages(data) {
  try {
    let result = await parameterWeightagesModel.findOne({}).lean();
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

async function getWeightageById(data) {
  try {
    let result = await parameterWeightagesModel.findById({ _id: data }).lean();
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

async function updateWeightageDetails(data) {
  try {
    let result = await parameterWeightagesModel.findOneAndUpdate(
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
  addWeightage,
  getAllWeightages,
  getWeightageById,
  updateWeightageDetails,
};
