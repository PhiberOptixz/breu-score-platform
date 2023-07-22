const colors = require("../../helpers/colors");
const AppError = require("../../helpers/appError");
const candidateDAL = require("./candidateDAL");

module.exports.postDeclarationData = async (req, res) => {
  try {
    const data = req.body;
    data.updatedAt = new Date();
    let updateFunction = await candidateDAL.updateCandidateDetails(data);
    return res.status(200).send({
      status: 200,
      message: "Successfully submitted the declaration",
    });
  } catch (error) {
    return res.status(400).send({ message: "Declaration error", error: error });
  }
};
