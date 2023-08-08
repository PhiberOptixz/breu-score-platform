import React, { useState, useEffect } from "react";
import { Grid, Button, Container } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";
import Header from "../../common/header";
import {} from "../../features/adminSlice";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import {
  addScore,
  fetchAllWeightages,
  updateScore,
} from "../../features/adminSlice";
import { fetchCandidateScores } from "../../features/candidateSlice";
import BelieveabilityScore from "./BelievabilityScore";
import ReliabilityScore from "./ReliabilityScore";
import EIScore from "./EIScore";
import UndesirabilityScore from "./UndesirabilityScore";
import { fetchReliabilityResults } from "../../features/reliabilitySlice";
import ConfirmationDialog from "../../common/ConfirmationDialog";

const AddScore = () => {
  const params = useParams();
  const { adminAuthSlice, candidateSlice, adminSlice, reliability } =
    useSelector((state) => state);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [disabled, setDisabled] = useState();
  const [isOpen, setIsOpen] = React.useState(false);
  const [finalApiData, setFinalApiData] = React.useState({});

  useEffect(() => {
    if (adminAuthSlice?.isAuthenticated) {
      dispatch(fetchCandidateScores(params?.candidateId));
      dispatch(fetchReliabilityResults(params?.candidateId));
      if (!adminSlice?.parameterWeightages) {
        dispatch(fetchAllWeightages());
      }
    }
  }, [adminAuthSlice?.isAuthenticated]);

  useEffect(() => {
    if (reliability?.reliabilityResults) {
      formik.setFieldValue(
        "designScore",
        reliability?.reliabilityResults?.design > 1
          ? 5
          : reliability?.reliabilityResults?.design === 1
          ? 2.5
          : 0
      );
      formik.setFieldValue(
        "frameworkScore",
        reliability?.reliabilityResults?.framework > 1
          ? 5
          : reliability?.reliabilityResults?.framework === 1
          ? 2.5
          : 0
      );
      formik.setFieldValue(
        "codingScore",
        reliability?.reliabilityResults?.coding > 1
          ? 5
          : reliability?.reliabilityResults?.coding === 1
          ? 2.5
          : 0
      );
      formik.setFieldValue(
        "debuggingScore",
        reliability?.reliabilityResults?.debugging > 1
          ? 5
          : reliability?.reliabilityResults?.debugging === 1
          ? 2.5
          : 0
      );
      formik.setFieldValue(
        "architectureScore",
        reliability?.reliabilityResults?.architecture > 1
          ? 5
          : reliability?.reliabilityResults?.architecture === 1
          ? 2.5
          : 0
      );
      formik.setFieldValue(
        "implementationScore",
        reliability?.reliabilityResults?.implementation > 1
          ? 5
          : reliability?.reliabilityResults?.implementation === 1
          ? 2.5
          : 0
      );
    }
  }, [reliability?.reliabilityResults]);

  useEffect(() => {
    if (candidateSlice.candidateScore) {
      formik.setFieldValue(
        "qualificationScore",
        candidateSlice.candidateScore?.believabilityScores?.qualification?.score
      );
      formik.setFieldValue(
        "professionalExperienceScore",
        candidateSlice.candidateScore?.believabilityScores
          ?.professionalExperience?.score
      );
      formik.setFieldValue(
        "socialScoreScore",
        candidateSlice.candidateScore?.believabilityScores?.socialScore?.score
      );
      formik.setFieldValue(
        "patentsScore",
        candidateSlice.candidateScore?.believabilityScores?.patents?.score
      );
      formik.setFieldValue(
        "whitepaperConferencePresentationScore",
        candidateSlice.candidateScore?.believabilityScores
          ?.whitepaperConferencePresentation?.score
      );
      formik.setFieldValue(
        "blogScore",
        candidateSlice.candidateScore?.believabilityScores?.blog?.score
      );
      formik.setFieldValue(
        "designScore",
        candidateSlice.candidateScore?.reliabilityScores?.design?.score
      );
      formik.setFieldValue(
        "frameworkScore",
        candidateSlice.candidateScore?.reliabilityScores?.framework?.score
      );
      formik.setFieldValue(
        "codingScore",
        candidateSlice.candidateScore?.reliabilityScores?.coding?.score
      );
      formik.setFieldValue(
        "debuggingScore",
        candidateSlice.candidateScore?.reliabilityScores?.debugging?.score
      );
      formik.setFieldValue(
        "architectureScore",
        candidateSlice.candidateScore?.reliabilityScores?.architecture?.score
      );
      formik.setFieldValue(
        "implementationScore",
        candidateSlice.candidateScore?.reliabilityScores?.implementation?.score
      );
      formik.setFieldValue(
        "teamworkScore",
        candidateSlice.candidateScore?.emotionalIntelligencyScores?.teamWork
          ?.score
      );
      formik.setFieldValue(
        "complexityhandlingScore",
        candidateSlice.candidateScore?.emotionalIntelligencyScores
          ?.complexityHandling?.score
      );
      formik.setFieldValue(
        "conflictResolutionScore",
        candidateSlice.candidateScore?.emotionalIntelligencyScores
          ?.conflictResolution?.score
      );
      formik.setFieldValue(
        "initiativeScore",
        candidateSlice.candidateScore?.emotionalIntelligencyScores?.initiative
          ?.score
      );
      formik.setFieldValue(
        "culturalFitScore",
        candidateSlice.candidateScore?.emotionalIntelligencyScores
          ?.culturalFitPresentation?.score
      );
      formik.setFieldValue(
        "presentationScore",
        candidateSlice.candidateScore?.emotionalIntelligencyScores?.presentation
          ?.score
      );
      formik.setFieldValue(
        "communicationScore",
        candidateSlice.candidateScore?.emotionalIntelligencyScores
          ?.communication?.score
      );
      formik.setFieldValue(
        "ownershipScore",
        candidateSlice.candidateScore?.emotionalIntelligencyScores?.ownership
          ?.score
      );
      formik.setFieldValue(
        "empathyScore",
        candidateSlice.candidateScore?.emotionalIntelligencyScores?.empathy
          ?.score
      );
      formik.setFieldValue(
        "opennessScore",
        candidateSlice.candidateScore?.emotionalIntelligencyScores?.openness
          ?.score
      );
      formik.setFieldValue(
        "plagiarismScore",
        candidateSlice.candidateScore?.undesirableScores?.fakeInformation?.score
      );
      formik.setFieldValue(
        "trustissuesScore",
        candidateSlice.candidateScore?.undesirableScores?.plagiarism?.score
      );
      formik.setFieldValue(
        "fakeinformationScore",
        candidateSlice.candidateScore?.undesirableScores?.trustIssues?.score
      );
      setDisabled(false);
    }
  }, [candidateSlice.candidateScore]);

  const formik = useFormik({
    initialValues: {
      //final score
      qualificationScore: "",
      professionalExperienceScore: "",
      socialScoreScore: "",
      patentsScore: "",
      blogScore: "",
      whitepaperConferencePresentationScore: "",
      designScore: "",
      frameworkScore: "",
      codingScore: "",
      debuggingScore: "",
      architectureScore: "",
      implementationScore: "",
      teamworkScore: "",
      complexityhandlingScore: "",
      conflictResolutionScore: "",
      initiativeScore: "",
      culturalFitScore: "",
      presentationScore: "",
      communicationScore: "",
      ownershipScore: "",
      empathyScore: "",
      opennessScore: "",
      plagiarismScore: "",
      trustissuesScore: "",
      fakeinformationScore: "",
    },
    validationSchema: Yup.object({
      qualificationScore: Yup.number()
        .min(0)
        .max(5)
        .required("Please enter the value")
        .typeError("Qualification Score should be a number"),

      professionalExperienceScore: Yup.number()
        .min(0)
        .max(5)
        .required("Please enter the value")
        .typeError("ProfessionalExperience Score should be a number"),

      socialScoreScore: Yup.number()
        .min(0)
        .max(5)
        .required("Please enter the value")
        .typeError("Socialscore Score should be a number"),

      patentsScore: Yup.number()
        .min(0)
        .max(5)
        .required("Please enter the value")
        .typeError("Patents Score should be a number"),

      blogScore: Yup.number()
        .min(0)
        .max(5)
        .required("Please enter the value")
        .typeError("Blog Score should be a number"),

      whitepaperConferencePresentationScore: Yup.number()
        .min(0)
        .max(5)
        .required("Please enter the value")
        .typeError("Presentation Score should be a number"),

      //Reliability

      designScore: Yup.number()
        .min(0)
        .max(5)
        .required("Please enter the value")
        .typeError("design Score should be a number"),

      frameworkScore: Yup.number()
        .min(0)
        .max(5)
        .required("Please enter the value")
        .typeError("framework Score should be a number"),

      codingScore: Yup.number()
        .min(0)
        .max(5)
        .required("Please enter the value")
        .typeError("coding Score should be a number"),

      debuggingScore: Yup.number()
        .min(0)
        .max(5)
        .required("Please enter the value")
        .typeError("debugging Score should be a number"),

      architectureScore: Yup.number()
        .min(0)
        .max(5)
        .required("Please enter the value")
        .typeError("architecture  Score should be a number"),

      implementationScore: Yup.number()
        .min(0)
        .max(5)
        .required("Please enter the value")
        .typeError("implementation Score should be a number"),

      //EI

      teamworkScore: Yup.number()
        .min(0)
        .max(5)
        .required("Please enter the value")
        .typeError("teamwork Score should be a number"),

      complexityhandlingScore: Yup.number()
        .min(0)
        .max(5)
        .required("Please enter the value")
        .typeError("complexityhandling Score should be a number"),

      conflictResolutionScore: Yup.number()
        .min(0)
        .max(5)
        .required("Please enter the value")
        .typeError("conflictresolution Score should be a number"),

      initiativeScore: Yup.number()
        .min(0)
        .max(5)
        .required("Please enter the value")
        .typeError("initiative Score should be a number"),

      ownershipScore: Yup.number()
        .min(0)
        .max(5)
        .required("Please enter the value")
        .typeError("Ownership Score should be a number"),

      presentationScore: Yup.number()
        .min(0)
        .max(5)
        .required("Please enter the value")
        .typeError("Presentation value should be a number"),

      communicationScore: Yup.number()
        .min(0)
        .max(5)
        .required("Please enter the value")
        .typeError("communication Score should be a number"),

      empathyScore: Yup.number()
        .min(0)
        .max(5)
        .required("Please enter the value")
        .typeError("Empathy Score should be a number"),

      opennessScore: Yup.number()
        .min(0)
        .max(5)
        .required("Please enter the value")
        .typeError("Openness Score should be a number"),

      //Undesirable

      plagiarismScore: Yup.number()
        .min(0)
        .max(5)
        .required("Please enter the value")
        .typeError("plagiarism Score should be a number"),

      trustissuesScore: Yup.number()
        .min(0)
        .max(5)
        .required("Please enter the value")
        .typeError("Trustissues Score should be a number"),

      fakeinformationScore: Yup.number()
        .min(0)
        .max(5)
        .required("Please enter the value")
        .typeError("Fakeinformation Score should be a number"),
    }),

    onSubmit: async (values) => {
      const weightages = adminSlice.parameterWeightages;
      let believabilityScore = 0;
      let reliabilityScore = 0;
      let emotionalIntelligencyScore = 0;
      let undesirableScore = 0;
      const apidata = {
        candidateId: params.candidateId,
        believabilityScores: {
          qualification: {
            value:
              (weightages?.qualification / 100) *
              (parseFloat(values?.qualificationScore) / 5),
            weightage: weightages?.qualification,
            score: values?.qualificationScore,
          },
          professionalExperience: {
            value:
              (weightages?.professionalExperience / 100) *
              (parseFloat(values?.professionalExperienceScore) / 5),
            weightage: weightages?.professionalExperience,
            score: values?.professionalExperienceScore,
          },
          socialScore: {
            value:
              (weightages?.socialScore / 100) *
              (parseFloat(values?.socialScoreScore) / 5),
            weightage: weightages?.socialScore,
            score: values?.socialScoreScore,
          },
          patents: {
            value:
              (weightages?.patents / 100) *
              (parseFloat(values?.patentsScore) / 5),
            weightage: weightages?.patents,
            score: values?.patentsScore,
          },
          whitepaperConferencePresentation: {
            value:
              (weightages?.whitepaperConferencePresentation / 100) *
              (parseFloat(values?.whitepaperConferencePresentationScore) / 5),
            weightage: weightages?.whitepaperConferencePresentation,
            score: values?.whitepaperConferencePresentationScore,
          },
          blog: {
            value:
              (weightages?.blog / 100) * (parseFloat(values?.blogScore) / 5),
            weightage: weightages?.blog,
            score: values?.blogScore,
          },
        },
        emotionalIntelligencyScores: {
          teamWork: {
            value:
              (weightages?.teamWork / 100) *
              (parseFloat(values?.teamworkScore) / 5),
            weightage: weightages?.teamWork,
            score: values?.teamworkScore,
          },
          complexityHandling: {
            value:
              (weightages?.complexityHandling / 100) *
              (parseFloat(values?.complexityhandlingScore) / 5),
            weightage: weightages?.complexityHandling,
            score: values?.complexityhandlingScore,
          },
          conflictResolution: {
            value:
              (weightages?.conflictResolution / 100) *
              (parseFloat(values?.conflictResolutionScore) / 5),
            weightage: weightages?.conflictResolution,
            score: values?.conflictResolutionScore,
          },
          initiative: {
            value:
              (weightages?.initiative / 100) *
              (parseFloat(values?.initiativeScore) / 5),
            weightage: weightages?.initiative,
            score: values?.initiativeScore,
          },
          culturalFitPresentation: {
            value:
              (weightages?.culturalFit / 100) *
              (parseFloat(values?.culturalFitScore) / 5),
            weightage: weightages?.culturalFit,
            score: values?.culturalFitScore,
          },
          presentation: {
            value:
              (weightages?.presentation / 100) *
              (parseFloat(values?.presentationScore) / 5),
            weightage: weightages?.presentation,
            score: values?.presentationScore,
          },
          communication: {
            value:
              (weightages?.communication / 100) *
              (parseFloat(values?.communicationScore) / 5),
            weightage: weightages?.communication,
            score: values?.communicationScore,
          },
          ownership: {
            value:
              (weightages?.ownership / 100) *
              (parseFloat(values?.ownershipScore) / 5),
            weightage: weightages?.ownership,
            score: values?.ownershipScore,
          },
          empathy: {
            value:
              (weightages?.empathy / 100) *
              (parseFloat(values?.empathyScore) / 5),
            weightage: weightages?.empathy,
            score: values?.empathyScore,
          },
          openness: {
            value:
              (weightages?.openness / 100) *
              (parseFloat(values?.opennessScore) / 5),
            weightage: weightages?.openness,
            score: values?.opennessScore,
          },
        },
        reliabilityScores: {
          design: {
            value:
              (weightages?.design / 100) *
              (parseFloat(values?.designScore) / 5),
            weightage: weightages?.design,
            score: values?.designScore,
          },
          framework: {
            value:
              (weightages?.framework / 100) *
              (parseFloat(values?.frameworkScore) / 5),
            weightage: weightages?.framework,
            score: values?.frameworkScore,
          },
          coding: {
            value:
              (weightages?.coding / 100) *
              (parseFloat(values?.codingScore) / 5),
            weightage: weightages?.coding,
            score: values?.codingScore,
          },
          debugging: {
            value:
              (weightages?.debugging / 100) *
              (parseFloat(values?.debuggingScore) / 5),
            weightage: weightages?.debugging,
            score: values?.debuggingScore,
          },
          architecture: {
            value:
              (weightages?.architecture / 100) *
              (parseFloat(values?.architectureScore) / 5),
            weightage: weightages?.architecture,
            score: values?.architectureScore,
          },
          implementation: {
            value:
              (weightages?.implementation / 100) *
              (parseFloat(values?.implementationScore) / 5),
            weightage: weightages?.implementation,
            score: values?.implementationScore,
          },
        },
        undesirableScores: {
          plagiarism: {
            value:
              (weightages?.plagiarism / 100) *
              (parseFloat(values?.plagiarismScore) / 5),
            weightage: weightages?.plagiarism,
            score: values?.plagiarismScore,
          },
          trustIssues: {
            value:
              (weightages?.trustIssues / 100) *
              (parseFloat(values?.trustissuesScore) / 5),
            weightage: weightages?.trustIssues,
            score: values?.trustissuesScore,
          },
          fakeInformation: {
            value:
              (weightages?.fakeInformation / 100) *
              (parseFloat(values?.fakeinformationScore) / 5),
            weightage: weightages?.fakeInformation,
            score: values?.fakeinformationScore,
          },
        },
      };
      for (let item in apidata) {
        if (item === "believabilityScores") {
          for (let param in apidata[item]) {
            believabilityScore =
              believabilityScore + apidata[item][param].value;
          }
        }
        if (item === "reliabilityScores") {
          for (let param in apidata[item]) {
            reliabilityScore = reliabilityScore + apidata[item][param].value;
          }
        }
        if (item === "emotionalIntelligencyScores") {
          for (let param in apidata[item]) {
            emotionalIntelligencyScore =
              emotionalIntelligencyScore + apidata[item][param].value;
          }
        }
        if (item === "undesirableScores") {
          for (let param in apidata[item]) {
            undesirableScore = undesirableScore + apidata[item][param].value;
          }
        }
      }
      apidata.mainBelievabilityScore = (believabilityScore * 5).toFixed(2);
      apidata.mainEmotionalIntelligencyScores = (
        emotionalIntelligencyScore * 5
      ).toFixed(2);
      apidata.mainreliabilityScore = (reliabilityScore * 5).toFixed(2);
      apidata.mainUndesirableScore = (undesirableScore * 5).toFixed(2);
      apidata.mainScore = (
        (believabilityScore * 5 +
          emotionalIntelligencyScore * 5 +
          reliabilityScore * 5) /
        3
      ).toFixed(2);
      const data = {
        data: apidata,
        navigate,
      };
      // console.log(data);
      setFinalApiData(data);
      setIsOpen(true);
    },
  });

  const handleScoreSubmit = () => {
    // console.log(finalApiData);
    if (candidateSlice.candidateScore) {
      dispatch(updateScore(finalApiData));
    } else {
      dispatch(addScore(finalApiData));
    }
  };

  const renderForm = (
    <form
      // onSubmit={()=>alert("am in form Submit")}
      onSubmit={formik.handleSubmit}
      enableReinitialize={true}
      noValidate
      autoComplete="off"
    >
      <Grid container spacing={3}>
        {isOpen && (
          <ConfirmationDialog
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            title={"Submit"}
            content={{
              mainContent: "Are you sure you want to save the scores?",
            }}
            handleSubmit={() => handleScoreSubmit()}
          />
        )}
        <BelieveabilityScore
          formik={formik}
          disabled={disabled}
          weightages={adminSlice?.parameterWeightages}
        />

        <ReliabilityScore
          formik={formik}
          disabled={disabled}
          weightages={adminSlice?.parameterWeightages}
        />

        <EIScore
          formik={formik}
          disabled={disabled}
          weightages={adminSlice?.parameterWeightages}
        />

        <UndesirabilityScore
          formik={formik}
          disabled={disabled}
          weightages={adminSlice?.parameterWeightages}
        />

        {/* <Grid item xs={12} md={12}>
          <h1>Total Score</h1>
        </Grid>
        <Grid item xs={12} md={6} align="center">
          <TextFieldGroup
            variant="outlined"
            labelShink={true}
            label="Main Score"
            name="mainScore"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            disabled={disabled}
            value={formik.values.mainScore}
            errors={
              formik.touched.mainScore && formik.errors.mainScore
                ? formik.errors.mainScore
                : null
            }
          />
        </Grid> */}
        <Grid item xs={12} md={6}></Grid>

        <Grid item xs={12} md={12} align="center">
          <div>
            <Button
              buttonStyle="submit"
              type="submit"
              name="save"
              color="primary"
              disabled={disabled}
              //   className={classes.inputButtonFields}
              variant="contained"
              // onClick={submitForm}
            >
              Save
            </Button>
          </div>
        </Grid>
      </Grid>
    </form>
  );

  return (
    <>
      <Header name="Scoring" caption="Your opinion is valuable" page={true} />
      <Container maxWidth="lg" className="adminAddNewEducator">
        {renderForm}
      </Container>
    </>
  );
};

export default AddScore;
