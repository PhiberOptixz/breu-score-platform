const colors = require("../../../helpers/colors");
const AppError = require("../../../helpers/appError");
const candidateScoreDAL = require("./candidateScoreDAL");
const candidateDAL = require("../candidateDAL");
const { default: mongoose } = require("mongoose");

module.exports.getCandidateScoreById = async (req, res, next) => {
  try {
    const id = req.params.candidateId;
    const candidateExists = await candidateDAL.getCandidateById(id);
    const data = await candidateScoreDAL.getCandidateScoreById(id);
    const allScore = await candidateScoreDAL.getAllCandidateScores(
      new mongoose.Types.ObjectId(candidateExists?.jobRole?._id)
    );
    const qualificationScores = new Set();
    const professionalExperienceScores = new Set();
    const socialScores = new Set();
    const patentScores = new Set();
    const whitepaperConferencePresentationScores = new Set();
    const blogScores = new Set();
    const teamWorkScores = new Set();
    const complexityHandlingScores = new Set();
    const conflictResolutionScores = new Set();
    const initiativeScores = new Set();
    const culturalFitPresentationScores = new Set();
    const presentationScores = new Set();
    const communicationScores = new Set();
    const ownershipScores = new Set();
    const empathyScores = new Set();
    const opennessScores = new Set();
    const designScores = new Set();
    const frameworkScores = new Set();
    const codingScores = new Set();
    const debuggingScores = new Set();
    const architectureScores = new Set();
    const implementationScores = new Set();
    const plagiarismScores = new Set();
    const trustIssuesScores = new Set();
    const fakeInformationScores = new Set();
    allScore?.map((item) => {
      item?.scores?.map((score) => {
        qualificationScores.add(
          score?.believabilityScores?.qualification?.score
        );
        professionalExperienceScores.add(
          score?.believabilityScores?.professionalExperience?.score
        );
        socialScores.add(score?.believabilityScores?.socialScore?.score);
        patentScores.add(score?.believabilityScores?.patents?.score);
        whitepaperConferencePresentationScores.add(
          score?.believabilityScores?.whitepaperConferencePresentation?.score
        );
        blogScores.add(score?.believabilityScores?.blog?.score);
        teamWorkScores.add(score?.emotionalIntelligencyScores?.teamWork?.score);
        complexityHandlingScores.add(
          score?.emotionalIntelligencyScores?.complexityHandling?.score
        );
        conflictResolutionScores.add(
          score?.emotionalIntelligencyScores?.conflictResolution?.score
        );
        initiativeScores.add(
          score?.emotionalIntelligencyScores?.initiative?.score
        );
        culturalFitPresentationScores.add(
          score?.emotionalIntelligencyScores?.culturalFitPresentation?.score
        );
        presentationScores.add(
          score?.emotionalIntelligencyScores?.presentation?.score
        );
        communicationScores.add(
          score?.emotionalIntelligencyScores?.communication?.score
        );
        ownershipScores.add(
          score?.emotionalIntelligencyScores?.ownership?.score
        );
        empathyScores.add(score?.emotionalIntelligencyScores?.empathy?.score);
        opennessScores.add(score?.emotionalIntelligencyScores?.openness?.score);
        designScores.add(score?.reliabilityScores?.design?.score);
        frameworkScores.add(score?.reliabilityScores?.framework?.score);
        codingScores.add(score?.reliabilityScores?.coding?.score);
        debuggingScores.add(score?.reliabilityScores?.debugging?.score);
        architectureScores.add(score?.reliabilityScores?.architecture?.score);
        implementationScores.add(
          score?.reliabilityScores?.implementation?.score
        );
        plagiarismScores.add(score?.undesirableScores?.plagiarism?.score);
        trustIssuesScores.add(score?.undesirableScores?.trustIssues?.score);
        fakeInformationScores.add(
          score?.undesirableScores?.fakeInformation?.score
        );
      });
    });
    qualificationScoresSorted = [...qualificationScores]
      .sort((a, b) => b - a)
      .map((parameter, idx, arr) => {
        return {
          score: parameter,
          rank:
            +(((arr.length - (idx + 1) + 1) / arr.length) * 100 - 0.01).toFixed(
              2
            ) + "%",
        };
      });
    professionalExperienceScoresSorted = [...professionalExperienceScores]
      .sort((a, b) => b - a)
      .map((parameter, idx, arr) => {
        return {
          score: parameter,
          rank:
            +(((arr.length - (idx + 1) + 1) / arr.length) * 100 - 0.01).toFixed(
              2
            ) + "%",
        };
      });
    socialScoresSorted = [...socialScores]
      .sort((a, b) => b - a)
      .map((parameter, idx, arr) => {
        return {
          score: parameter,
          rank:
            +(((arr.length - (idx + 1) + 1) / arr.length) * 100 - 0.01).toFixed(
              2
            ) + "%",
        };
      });
    patentScoresSorted = [...patentScores]
      .sort((a, b) => b - a)
      .map((parameter, idx, arr) => {
        return {
          score: parameter,
          rank:
            +(((arr.length - (idx + 1) + 1) / arr.length) * 100 - 0.01).toFixed(
              2
            ) + "%",
        };
      });
    whitepaperConferencePresentationScoresSorted = [
      ...whitepaperConferencePresentationScores,
    ]
      .sort((a, b) => b - a)
      .map((parameter, idx, arr) => {
        return {
          score: parameter,
          rank:
            +(((arr.length - (idx + 1) + 1) / arr.length) * 100 - 0.01).toFixed(
              2
            ) + "%",
        };
      });
    blogScoresSorted = [...blogScores]
      .sort((a, b) => b - a)
      .map((parameter, idx, arr) => {
        return {
          score: parameter,
          rank:
            +(((arr.length - (idx + 1) + 1) / arr.length) * 100 - 0.01).toFixed(
              2
            ) + "%",
        };
      });
    console.log([...teamWorkScores]);
    teamWorkScoresSorted = [...teamWorkScores]
      .sort((a, b) => b - a)
      .map((parameter, idx, arr) => {
        return {
          score: parameter,
          rank:
            +(((arr.length - (idx + 1) + 1) / arr.length) * 100 - 0.01).toFixed(
              2
            ) + "%",
        };
      });
    console.log(teamWorkScoresSorted);
    complexityHandlingScoresSorted = [...complexityHandlingScores]
      .sort((a, b) => b - a)
      .map((parameter, idx, arr) => {
        return {
          score: parameter,
          rank:
            +(((arr.length - (idx + 1) + 1) / arr.length) * 100 - 0.01).toFixed(
              2
            ) + "%",
        };
      });
    conflictResolutionScoresSorted = [...conflictResolutionScores]
      .sort((a, b) => b - a)
      .map((parameter, idx, arr) => {
        return {
          score: parameter,
          rank:
            +(((arr.length - (idx + 1) + 1) / arr.length) * 100 - 0.01).toFixed(
              2
            ) + "%",
        };
      });
    initiativeScoresSorted = [...initiativeScores]
      .sort((a, b) => b - a)
      .map((parameter, idx, arr) => {
        return {
          score: parameter,
          rank:
            +(((arr.length - (idx + 1) + 1) / arr.length) * 100 - 0.01).toFixed(
              2
            ) + "%",
        };
      });
    culturalFitPresentationScoresSorted = [...culturalFitPresentationScores]
      .sort((a, b) => b - a)
      .map((parameter, idx, arr) => {
        return {
          score: parameter,
          rank:
            +(((arr.length - (idx + 1) + 1) / arr.length) * 100 - 0.01).toFixed(
              2
            ) + "%",
        };
      });
    presentationScoresSorted = [...presentationScores]
      .sort((a, b) => b - a)
      .map((parameter, idx, arr) => {
        return {
          score: parameter,
          rank:
            +(((arr.length - (idx + 1) + 1) / arr.length) * 100 - 0.01).toFixed(
              2
            ) + "%",
        };
      });
    communicationScoresSorted = [...communicationScores]
      .sort((a, b) => b - a)
      .map((parameter, idx, arr) => {
        return {
          score: parameter,
          rank:
            +(((arr.length - (idx + 1) + 1) / arr.length) * 100 - 0.01).toFixed(
              2
            ) + "%",
        };
      });
    ownershipScoresSorted = [...ownershipScores]
      .sort((a, b) => b - a)
      .map((parameter, idx, arr) => {
        return {
          score: parameter,
          rank:
            +(((arr.length - (idx + 1) + 1) / arr.length) * 100 - 0.01).toFixed(
              2
            ) + "%",
        };
      });
    empathyScoresSorted = [...empathyScores]
      .sort((a, b) => b - a)
      .map((parameter, idx, arr) => {
        return {
          score: parameter,
          rank:
            +(((arr.length - (idx + 1) + 1) / arr.length) * 100 - 0.01).toFixed(
              2
            ) + "%",
        };
      });
    opennessScoresSorted = [...opennessScores]
      .sort((a, b) => b - a)
      .map((parameter, idx, arr) => {
        return {
          score: parameter,
          rank:
            +(((arr.length - (idx + 1) + 1) / arr.length) * 100 - 0.01).toFixed(
              2
            ) + "%",
        };
      });
    designScoresSorted = [...designScores]
      .sort((a, b) => b - a)
      .map((parameter, idx, arr) => {
        return {
          score: parameter,
          rank:
            +(((arr.length - (idx + 1) + 1) / arr.length) * 100 - 0.01).toFixed(
              2
            ) + "%",
        };
      });
    frameworkScoresSorted = [...frameworkScores]
      .sort((a, b) => b - a)
      .map((parameter, idx, arr) => {
        return {
          score: parameter,
          rank:
            +(((arr.length - (idx + 1) + 1) / arr.length) * 100 - 0.01).toFixed(
              2
            ) + "%",
        };
      });
    codingScoresSorted = [...codingScores]
      .sort((a, b) => b - a)
      .map((parameter, idx, arr) => {
        return {
          score: parameter,
          rank:
            +(((arr.length - (idx + 1) + 1) / arr.length) * 100 - 0.01).toFixed(
              2
            ) + "%",
        };
      });
    debuggingScoresSorted = [...debuggingScores]
      .sort((a, b) => b - a)
      .map((parameter, idx, arr) => {
        return {
          score: parameter,
          rank:
            +(((arr.length - (idx + 1) + 1) / arr.length) * 100 - 0.01).toFixed(
              2
            ) + "%",
        };
      });
    architectureScoresSorted = [...architectureScores]
      .sort((a, b) => b - a)
      .map((parameter, idx, arr) => {
        return {
          score: parameter,
          rank:
            +(((arr.length - (idx + 1) + 1) / arr.length) * 100 - 0.01).toFixed(
              2
            ) + "%",
        };
      });
    implementationScoresSorted = [...implementationScores]
      .sort((a, b) => b - a)
      .map((parameter, idx, arr) => {
        return {
          score: parameter,
          rank:
            +(((arr.length - (idx + 1) + 1) / arr.length) * 100 - 0.01).toFixed(
              2
            ) + "%",
        };
      });
    plagiarismScoresSorted = [...plagiarismScores]
      .sort((a, b) => b - a)
      .map((parameter, idx, arr) => {
        return {
          score: parameter,
          rank:
            +(((arr.length - (idx + 1) + 1) / arr.length) * 100 - 0.01).toFixed(
              2
            ) + "%",
        };
      });
    trustIssuesScoresSorted = [...trustIssuesScores]
      .sort((a, b) => b - a)
      .map((parameter, idx, arr) => {
        return {
          score: parameter,
          rank:
            +(((arr.length - (idx + 1) + 1) / arr.length) * 100 - 0.01).toFixed(
              2
            ) + "%",
        };
      });
    fakeInformationScoresSorted = [...fakeInformationScores]
      .sort((a, b) => b - a)
      .map((parameter, idx, arr) => {
        return {
          score: parameter,
          rank:
            +(((arr.length - (idx + 1) + 1) / arr.length) * 100 - 0.01).toFixed(
              2
            ) + "%",
        };
      });

    data.believabilityScores.qualification.percentile =
      qualificationScoresSorted?.find(
        (item) => item.score == data?.believabilityScores?.qualification?.score
      )?.rank;
    data.believabilityScores.professionalExperience.percentile =
      professionalExperienceScoresSorted?.find(
        (item) =>
          item.score == data?.believabilityScores?.professionalExperience?.score
      )?.rank;
    data.believabilityScores.socialScore.percentile = socialScoresSorted?.find(
      (item) => item.score == data?.believabilityScores?.socialScore?.score
    )?.rank;
    data.believabilityScores.patents.percentile = patentScoresSorted?.find(
      (item) => item.score == data?.believabilityScores?.patents?.score
    )?.rank;
    data.believabilityScores.whitepaperConferencePresentation.percentile =
      whitepaperConferencePresentationScoresSorted?.find(
        (item) =>
          item.score ==
          data?.believabilityScores?.whitepaperConferencePresentation?.score
      )?.rank;
    data.believabilityScores.blog.percentile = blogScoresSorted?.find(
      (item) => item.score == data?.believabilityScores?.blog?.score
    )?.rank;
    data.emotionalIntelligencyScores.teamWork.percentile =
      teamWorkScoresSorted?.find(
        (item) =>
          item.score == data?.emotionalIntelligencyScores?.teamWork?.score
      )?.rank;
    data.emotionalIntelligencyScores.complexityHandling.percentile =
      complexityHandlingScoresSorted?.find(
        (item) =>
          item.score ==
          data?.emotionalIntelligencyScores?.complexityHandling?.score
      )?.rank;
    data.emotionalIntelligencyScores.conflictResolution.percentile =
      conflictResolutionScoresSorted?.find(
        (item) =>
          item.score ==
          data?.emotionalIntelligencyScores?.conflictResolution?.score
      )?.rank;
    data.emotionalIntelligencyScores.initiative.percentile =
      initiativeScoresSorted?.find(
        (item) =>
          item.score == data?.emotionalIntelligencyScores?.initiative?.score
      )?.rank;
    data.emotionalIntelligencyScores.culturalFitPresentation.percentile =
      culturalFitPresentationScoresSorted?.find(
        (item) =>
          item.score ==
          data?.emotionalIntelligencyScores?.culturalFitPresentation?.score
      )?.rank;
    data.emotionalIntelligencyScores.presentation.percentile =
      presentationScoresSorted?.find(
        (item) =>
          item.score == data?.emotionalIntelligencyScores?.presentation?.score
      )?.rank;
    data.emotionalIntelligencyScores.communication.percentile =
      communicationScoresSorted?.find(
        (item) =>
          item.score == data?.emotionalIntelligencyScores?.communication?.score
      )?.rank;
    data.emotionalIntelligencyScores.ownership.percentile =
      ownershipScoresSorted?.find(
        (item) =>
          item.score == data?.emotionalIntelligencyScores?.ownership?.score
      )?.rank;
    data.emotionalIntelligencyScores.empathy.percentile =
      empathyScoresSorted?.find(
        (item) =>
          item.score == data?.emotionalIntelligencyScores?.empathy?.score
      )?.rank;
    data.emotionalIntelligencyScores.openness.percentile =
      opennessScoresSorted?.find(
        (item) =>
          item.score == data?.emotionalIntelligencyScores?.openness?.score
      )?.rank;
    data.reliabilityScores.design.percentile = designScoresSorted?.find(
      (item) => item.score == data?.reliabilityScores?.design?.score
    )?.rank;
    data.reliabilityScores.framework.percentile = frameworkScoresSorted?.find(
      (item) => item.score == data?.reliabilityScores?.framework?.score
    )?.rank;
    data.reliabilityScores.coding.percentile = codingScoresSorted?.find(
      (item) => item.score == data?.reliabilityScores?.coding?.score
    )?.rank;
    data.reliabilityScores.debugging.percentile = debuggingScoresSorted?.find(
      (item) => item.score == data?.reliabilityScores?.debugging?.score
    )?.rank;
    data.reliabilityScores.architecture.percentile =
      architectureScoresSorted?.find(
        (item) => item.score == data?.reliabilityScores?.architecture?.score
      )?.rank;
    data.reliabilityScores.implementation.percentile =
      implementationScoresSorted?.find(
        (item) => item.score == data?.reliabilityScores?.implementation?.score
      )?.rank;
    data.undesirableScores.plagiarism.percentile = plagiarismScoresSorted?.find(
      (item) => item.score == data?.undesirableScores?.plagiarism?.score
    )?.rank;
    data.undesirableScores.trustIssues.percentile =
      trustIssuesScoresSorted?.find(
        (item) => item.score == data?.undesirableScores?.trustIssues?.score
      )?.rank;
    data.undesirableScores.fakeInformation.percentile =
      fakeInformationScoresSorted?.find(
        (item) => item.score == data?.undesirableScores?.fakeInformation?.score
      )?.rank;
    return res.send({ message: "SUCCESS", data: data });
  } catch (error) {
    console.error(colors.red, `Error fetching candidate Score`, error);
    return next(new AppError(error, 400));
  }
};
