const emotionalDAL = require("./emotionalDAL");

module.exports.addCandidateVideo = async (req, res) => {
  try {
    const data = req.body;
    // try {
    //   const { error, value } =
    //     believabilityValidations.believabilitySchema.validate(data);
    // } catch (error) {
    //   if (error.isJoi === true) return next(new AppError(error.message, 422));
    // }
    data.completedBelievability = true;
    data.updatedAt = new Date();
    let updateFunction = await emotionalDAL.addCandidateVideo(data);
    return res.status(200).send({
      status: 200,
      message: "Successfully submitted video",
    });
  } catch (error) {
    return res
      .status(400)
      .send({ message: "Undesirability error", error: error });
  }
};
