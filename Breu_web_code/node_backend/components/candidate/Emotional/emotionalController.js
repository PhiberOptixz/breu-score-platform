const emotionalDAL = require("./emotionalDAL");
const candidateDAL = require("../candidateDAL");

module.exports.addCandidateVideo = async (req, res) => {
  try {
    const data = req.body;
    // try {
    //   const { error, value } =
    //     believabilityValidations.believabilitySchema.validate(data);
    // } catch (error) {
    //   if (error.isJoi === true) return next(new AppError(error.message, 422));
    // }
    let videoData = {};
    let userData = {};
    if (data.type === "Demo 1") {
      videoData = {
        candidateId: data.candidateId,
        interestingProjectVideo: res?.fileData,
        updatedAt: new Date(),
      };
      userData = {
        _id: data.candidateId,
        completedInterestingVideo: true,
        updatedAt: new Date(),
      };
    } else {
      videoData = {
        candidateId: data.candidateId,
        conflictResolutionVideo: res?.fileData,
        updatedAt: new Date(),
      };
      userData = {
        _id: data.candidateId,
        completedConflictVideo: true,
        updatedAt: new Date(),
      };
    }
    emotionalDAL.addCandidateVideo(videoData).then(async () => {
      const updateUser = await candidateDAL.updateCandidateDetails(userData);

      return res.status(200).send({
        status: 200,
        message: "Successfully submitted video",
      });
    });
  } catch (error) {
    return res
      .status(400)
      .send({ message: "Emotional Intelligibility error", error: error });
  }
};
