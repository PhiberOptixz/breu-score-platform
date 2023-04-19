const believabilityDAL = require("./believabilityDAL");
const believabilityValidations = require("./believabilityValidations");

module.exports.getAllDomains = async (req, res, next) => {
  try {
    const domainData = await believabilityDAL.getAllDomains();
    return res.send({ message: "SUCCESS", data: domainData });
  } catch (error) {
    console.error(colors.red, `Error getting domain data`, error);
    return next(new AppError(error, 400));
  }
};

module.exports.getAllEducations = async (req, res, next) => {
  try {
    const data = await believabilityDAL.getAllEducations();
    return res.send({ message: "SUCCESS", data: data });
  } catch (error) {
    console.error(colors.red, `Error getting education data`, error);
    return next(new AppError(error, 400));
  }
};

module.exports.getAllExperiences = async (req, res, next) => {
  try {
    const data = await believabilityDAL.getAllExperiences();
    return res.send({ message: "SUCCESS", data: data });
  } catch (error) {
    console.error(colors.red, `Error getting experiences data`, error);
    return next(new AppError(error, 400));
  }
};

module.exports.getAllLanguages = async (req, res, next) => {
  try {
    const data = await believabilityDAL.getAllLanguages();
    return res.send({ message: "SUCCESS", data: data });
  } catch (error) {
    console.error(colors.red, `Error getting languages data`, error);
    return next(new AppError(error, 400));
  }
};

module.exports.getAllProficiencies = async (req, res, next) => {
  try {
    const data = await believabilityDAL.getAllProficiencies();
    return res.send({ message: "SUCCESS", data: data });
  } catch (error) {
    console.error(colors.red, `Error getting Proficiency data`, error);
    return next(new AppError(error, 400));
  }
};

module.exports.getAllRoles = async (req, res, next) => {
  try {
    const data = await believabilityDAL.getAllRoles();
    return res.send({ message: "SUCCESS", data: data });
  } catch (error) {
    console.error(colors.red, `Error getting roles data`, error);
    return next(new AppError(error, 400));
  }
};

module.exports.addBelievabilityDetails = async (req, res) => {
  try {
    const data = req.body;
    try {
      const { error, value } =
        believabilityValidations.believabilitySchema.validate(data);
    } catch (error) {
      if (error.isJoi === true) return next(new AppError(error.message, 422));
    }
    data.completedBelievability = true;
    data.updatedAt = new Date();
    let updateFunction = await believabilityDAL.addBelievabilityDetails(data);
    return res.status(200).send({
      status: 200,
      message: "Successfully added Believability Details",
    });
  } catch (error) {
    return res
      .status(400)
      .send({ message: "Believability error", error: error });
  }
};
