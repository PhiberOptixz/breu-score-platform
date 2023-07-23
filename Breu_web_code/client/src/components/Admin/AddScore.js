import React, { useState, useEffect } from "react";
import { Grid, Button, Container } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";
import Header from "../../common/header";
import TextFieldGroup from "../../common/TextFieldGroup";
import {} from "../../features/adminSlice";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { addScore } from "../../features/adminSlice";
import { fetchCandidateScores } from "../../features/candidateSlice";
import { setFormikValues } from "./setFormikValues";

const AddScore = ({ setOpenPopup }) => {
  const params = useParams();
  const { adminAuthSlice, candidateSlice } = useSelector((state) => state);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (adminAuthSlice?.isAuthenticated) {
      dispatch(fetchCandidateScores(params?.candidateId));
    }
  }, [adminAuthSlice?.isAuthenticated]);

  useEffect(() => {
    if (candidateSlice.candidateScore) {
      formik.setFieldValue(
        "qualification",
        candidateSlice.candidateScore?.believabilityScores?.qualification?.score
      );
      formik.setFieldValue(
        "professionalExperience",
        candidateSlice.candidateScore?.believabilityScores
          ?.professionalExperience?.score
      );
      formik.setFieldValue(
        "socialscore",
        candidateSlice.candidateScore?.believabilityScores?.socialscore?.score
      );
      formik.setFieldValue(
        "patents",
        candidateSlice.candidateScore?.believabilityScores?.patents?.score
      );
      formik.setFieldValue(
        "presentation",
        candidateSlice.candidateScore?.believabilityScores
          ?.whitepaperConferencePresentation?.score
      );
      formik.setFieldValue(
        "blog",
        candidateSlice.candidateScore?.believabilityScores?.blog?.score
      );
      formik.setFieldValue(
        "design",
        candidateSlice.candidateScore?.reliabilityScores?.design?.score
      );
      formik.setFieldValue(
        "framework",
        candidateSlice.candidateScore?.reliabilityScores?.framework?.score
      );
      formik.setFieldValue(
        "coding",
        candidateSlice.candidateScore?.reliabilityScores?.coding?.score
      );
      formik.setFieldValue(
        "debugging",
        candidateSlice.candidateScore?.reliabilityScores?.debugging?.score
      );
      formik.setFieldValue(
        "architecture",
        candidateSlice.candidateScore?.reliabilityScores?.architecture?.score
      );
      formik.setFieldValue(
        "implementation",
        candidateSlice.candidateScore?.reliabilityScores?.implementation?.score
      );
      formik.setFieldValue(
        "teamwork",
        candidateSlice.candidateScore?.emotionalIntelligencyScores?.teamWork
          ?.score
      );
      formik.setFieldValue(
        "complexityhandling",
        candidateSlice.candidateScore?.emotionalIntelligencyScores
          ?.complexityHandling?.score
      );
      formik.setFieldValue(
        "conflictresolution",
        candidateSlice.candidateScore?.emotionalIntelligencyScores
          ?.conflictResolution?.score
      );
      formik.setFieldValue(
        "initiative",
        candidateSlice.candidateScore?.emotionalIntelligencyScores?.initiative
          ?.score
      );
      formik.setFieldValue(
        "culturalFit",
        candidateSlice.candidateScore?.emotionalIntelligencyScores
          ?.culturalFitPresentation?.score
      );
      formik.setFieldValue(
        "communication",
        candidateSlice.candidateScore?.emotionalIntelligencyScores
          ?.communication?.score
      );
      formik.setFieldValue(
        "ownership",
        candidateSlice.candidateScore?.emotionalIntelligencyScores?.ownership
          ?.score
      );
      formik.setFieldValue(
        "empathy",
        candidateSlice.candidateScore?.emotionalIntelligencyScores?.empathy
          ?.score
      );
      formik.setFieldValue(
        "openness",
        candidateSlice.candidateScore?.emotionalIntelligencyScores?.openness
          ?.score
      );
      formik.setFieldValue(
        "plagiarism",
        candidateSlice.candidateScore?.undesirableScores?.fakeInformation?.score
      );
      formik.setFieldValue(
        "trustissues",
        candidateSlice.candidateScore?.undesirableScores?.plagiarism?.score
      );
      formik.setFieldValue(
        "fakeinformation",
        candidateSlice.candidateScore?.undesirableScores?.trustIssues?.score
      );
      formik.setFieldValue(
        "qualificationpercent",
        candidateSlice.candidateScore?.believabilityScores?.qualification
          ?.percentile
      );
      formik.setFieldValue(
        "professionalExperiencepercent",
        candidateSlice.candidateScore?.believabilityScores
          ?.professionalExperience?.percentile
      );
      formik.setFieldValue(
        "socialscorepercent",
        candidateSlice.candidateScore?.believabilityScores?.socialScore
          ?.percentile
      );
      formik.setFieldValue(
        "patentspercent",
        candidateSlice.candidateScore?.believabilityScores?.patents?.percentile
      );
      formik.setFieldValue(
        "blogpercent",
        candidateSlice.candidateScore?.believabilityScores?.blog?.percentile
      );
      formik.setFieldValue(
        "presentationpercent",
        candidateSlice.candidateScore?.believabilityScores
          ?.whitepaperConferencePresentation?.percentile
      );
      formik.setFieldValue(
        "designpercent",
        candidateSlice.candidateScore?.reliabilityScores?.design?.percentile
      );
      formik.setFieldValue(
        "frameworkpercent",
        candidateSlice.candidateScore?.reliabilityScores?.framework?.percentile
      );
      formik.setFieldValue(
        "codingpercent",
        candidateSlice.candidateScore?.reliabilityScores?.coding?.percentile
      );
      formik.setFieldValue(
        "debuggingpercent",
        candidateSlice.candidateScore?.reliabilityScores?.debugging?.percentile
      );
      formik.setFieldValue(
        "architecturepercent",
        candidateSlice.candidateScore?.reliabilityScores?.architecture
          ?.percentile
      );
      formik.setFieldValue(
        "implementationpercent",
        candidateSlice.candidateScore?.reliabilityScores?.implementation
          ?.percentile
      );
      formik.setFieldValue(
        "teamworkpercent",
        candidateSlice.candidateScore?.emotionalIntelligencyScores?.teamWork
          ?.percentile
      );
      formik.setFieldValue(
        "complexityhandlingpercent",
        candidateSlice.candidateScore?.emotionalIntelligencyScores
          ?.complexityHandling?.percentile
      );
      formik.setFieldValue(
        "conflictresolutionpercent",
        candidateSlice.candidateScore?.emotionalIntelligencyScores
          ?.conflictResolution?.percentile
      );
      formik.setFieldValue(
        "initiativepercent",
        candidateSlice.candidateScore?.emotionalIntelligencyScores?.initiative
          ?.percentile
      );
      formik.setFieldValue(
        "culturalFitpercent",
        candidateSlice.candidateScore?.emotionalIntelligencyScores
          ?.culturalFitPresentation?.percentile
      );
      formik.setFieldValue(
        "communicationpercent",
        candidateSlice.candidateScore?.emotionalIntelligencyScores
          ?.communication?.percentile
      );
      formik.setFieldValue(
        "ownershippercent",
        candidateSlice.candidateScore?.emotionalIntelligencyScores?.ownership
          ?.percentile
      );
      formik.setFieldValue(
        "empathypercent",
        candidateSlice.candidateScore?.emotionalIntelligencyScores?.empathy
          ?.percentile
      );
      formik.setFieldValue(
        "opennesspercent",
        candidateSlice.candidateScore?.emotionalIntelligencyScores?.openness
          ?.percentile
      );
      formik.setFieldValue(
        "plagiarismpercent",
        candidateSlice.candidateScore?.undesirableScores?.plagiarism?.percentile
      );
      formik.setFieldValue(
        "trustissuespercent",
        candidateSlice.candidateScore?.undesirableScores?.trustIssues
          ?.percentile
      );
      formik.setFieldValue(
        "fakeinformationpercent",
        candidateSlice.candidateScore?.undesirableScores?.fakeInformation
          ?.percentile
      );
      formik.setFieldValue(
        "mainScore",
        candidateSlice.candidateScore?.mainScore
      );
    }
  }, [candidateSlice.candidateScore]);

  const formik = useFormik({
    initialValues: {
      qualification: "",
      professionalExperience: "",
      socialscore: "",
      patents: "",
      blog: "",
      presentation: "",
      design: "",
      framework: "",
      coding: "",
      debugging: "",
      architecture: "",
      implementation: "",
      teamwork: "",
      complexityhandling: "",
      conflictresolution: "",
      initiative: "",
      culturalFit: "",
      epresentation: "",
      communication: "",
      ownership: "",
      empathy: "",
      openness: "",
      plagiarism: "",
      trustissues: "",
      fakeinformation: "",

      qualificationpercent: "",
      professionalExperiencepercent: "",
      socialscorepercent: "",
      patentspercent: "",
      blogpercent: "",
      presentationpercent: "",
      designpercent: "",
      frameworkpercent: "",
      codingpercent: "",
      debuggingpercent: "",
      architecturepercent: "",
      implementationpercent: "",
      teamworkpercent: "",
      complexityhandlingpercent: "",
      conflictresolutionpercent: "",
      initiativepercent: "",
      culturalFitpercent: "",
      epresentationpercent: "",
      communicationpercent: "",
      ownershippercent: "",
      empathypercent: "",
      opennesspercent: "",
      plagiarismpercent: "",
      trustissuespercent: "",
      fakeinformationpercent: "",
      mainScore: "",
    },
    validationSchema: Yup.object({
      // scheduleDescription: Yup.string()
      //   .trim()
      //   .required("Schedule Description is required field"),
      qualification: Yup.number()
        .min(1)
        .required("Please enter the value")
        .typeError("Qualification value should be a number"),

      professionalExperience: Yup.number()
        .min(1)
        .required("Please enter the value")
        .typeError("ProfessionalExperience value should be a number"),

      socialscore: Yup.number()
        .min(1)
        .required("Please enter the value")
        .typeError("Socialscore value should be a number"),

      patents: Yup.number()
        .min(1)
        .required("Please enter the value")
        .typeError("Patents value should be a number"),

      blog: Yup.number()
        .min(1)
        .required("Please enter the value")
        .typeError("Blog value should be a number"),

      presentation: Yup.number()
        .min(1)
        .required("Please enter the value")
        .typeError("Presentation value should be a number"),

      //Reliability

      design: Yup.number()
        .min(1)
        .required("Please enter the value")
        .typeError("design value should be a number"),

      framework: Yup.number()
        .min(1)
        .required("Please enter the value")
        .typeError("framework value should be a number"),

      coding: Yup.number()
        .min(1)
        .required("Please enter the value")
        .typeError("coding value should be a number"),

      debugging: Yup.number()
        .min(1)
        .required("Please enter the value")
        .typeError("debugging value should be a number"),

      architecture: Yup.number()
        .min(1)
        .required("Please enter the value")
        .typeError("architecture  value should be a number"),

      implementation: Yup.number()
        .min(1)
        .required("Please enter the value")
        .typeError("implementation value should be a number"),

      //EI

      teamwork: Yup.number()
        .min(1)
        .required("Please enter the value")
        .typeError("teamwork value should be a number"),

      complexityhandling: Yup.number()
        .min(1)
        .required("Please enter the value")
        .typeError("complexityhandling value should be a number"),

      conflictresolution: Yup.number()
        .min(1)
        .required("Please enter the value")
        .typeError("conflictresolution value should be a number"),

      initiative: Yup.number()
        .min(1)
        .required("Please enter the value")
        .typeError("initiative value should be a number"),

      ownership: Yup.number()
        .min(1)
        .required("Please enter the value")
        .typeError("Ownership value should be a number"),

      epresentation: Yup.number()
        .min(1)
        .required("Please enter the value")
        .typeError("Presentation value should be a number"),

      communication: Yup.number()
        .min(1)
        .required("Please enter the value")
        .typeError("communication value should be a number"),

      empathy: Yup.number()
        .min(1)
        .required("Please enter the value")
        .typeError("Empathy value should be a number"),

      openness: Yup.number()
        .min(1)
        .required("Please enter the value")
        .typeError("Openness value should be a number"),

      //Undesirable

      plagiarism: Yup.number()
        .min(1)
        .required("Please enter the value")
        .typeError("plagiarism value should be a number"),

      trustissues: Yup.number()
        .min(1)
        .required("Please enter the value")
        .typeError("Trustissues value should be a number"),

      fakeinformation: Yup.number()
        .min(1)
        .required("Please enter the value")
        .typeError("Fakeinformation value should be a number"),

      qualificationpercent: Yup.number()
        .min(1)
        .required("Please enter the value")
        .typeError("Qualificationpercent value should be a number"),

      professionalExperiencepercent: Yup.number()
        .min(1)
        .required("Please enter the value")
        .typeError("ProfessionalExperiencepercent value should be a number"),

      socialscorepercent: Yup.number()
        .min(1)
        .required("Please enter the value")
        .typeError("Socialscorepercent value should be a number"),

      patentspercent: Yup.number()
        .min(1)
        .required("Please enter the value")
        .typeError("Patentspercent value should be a number"),

      blogpercent: Yup.number()
        .min(1)
        .required("Please enter the value")
        .typeError("Blogpercent value should be a number"),

      presentationpercent: Yup.number()
        .min(1)
        .required("Please enter the value")
        .typeError("Presentationpercent value should be a number"),

      //Reliability

      designpercent: Yup.number()
        .min(1)
        .required("Please enter the value")
        .typeError("designpercent value should be a number"),

      frameworkpercent: Yup.number()
        .min(1)
        .required("Please enter the value")
        .typeError("frameworkpercent value should be a number"),

      codingpercent: Yup.number()
        .min(1)
        .required("Please enter the value")
        .typeError("codingpercent value should be a number"),

      debuggingpercent: Yup.number()
        .min(1)
        .required("Please enter the value")
        .typeError("debuggingpercent value should be a number"),

      architecturepercent: Yup.number()
        .min(1)
        .required("Please enter the value")
        .typeError("architecturepercent  value should be a number"),

      implementationpercent: Yup.number()
        .min(1)
        .required("Please enter the value")
        .typeError("implementationpercent value should be a number"),

      //EI

      teamworkpercent: Yup.number()
        .min(1)
        .required("Please enter the value")
        .typeError("teamworkpercent value should be a number"),

      complexityhandlingpercent: Yup.number()
        .min(1)
        .required("Please enter the value")
        .typeError("complexityhandlingpercent value should be a number"),

      conflictresolutionpercent: Yup.number()
        .min(1)
        .required("Please enter the value")
        .typeError("conflictresolutionpercent value should be a number"),

      initiativepercent: Yup.number()
        .min(1)
        .required("Please enter the value")
        .typeError("initiativepercent value should be a number"),

      ownershippercent: Yup.number()
        .min(1)
        .required("Please enter the value")
        .typeError("Ownershippercent value should be a number"),

      epresentationpercent: Yup.number()
        .min(1)
        .required("Please enter the value")
        .typeError("Presentationpercent value should be a number"),

      communicationpercent: Yup.number()
        .min(1)
        .required("Please enter the value")
        .typeError("communicationpercent value should be a number"),

      empathypercent: Yup.number()
        .min(1)
        .required("Please enter the value")
        .typeError("Empathypercent value should be a number"),

      opennesspercent: Yup.number()
        .min(1)
        .required("Please enter the value")
        .typeError("Opennesspercent value should be a number"),

      //Undesirable

      plagiarismpercent: Yup.number()
        .min(1)
        .required("Please enter the value")
        .typeError("plagiarismpercent value should be a number"),

      trustissuespercent: Yup.number()
        .min(1)
        .required("Please enter the value")
        .typeError("Trustissuespercent value should be a number"),

      fakeinformationpercent: Yup.number()
        .min(1)
        .required("Please enter the value")
        .typeError("Fakeinformationpercent value should be a number"),
    }),

    onSubmit: async (values) => {
      // console.log("submit value", values);
      const apidata = {
        candidateId: params.candidateId,
        believabilityScores: {
          qualification: {
            value: values?.qualification,
            percentile: values?.qualificationpercent,
            score: values?.qualification,
          },
          professionalExperience: {
            value: 3,
            percentile: values?.professionalExperiencepercent,
            score: values?.professionalExperience,
          },
          socialScore: {
            value: 3,
            percentile: values?.socialscorepercent,
            score: values?.socialscore,
          },
          patents: {
            value: 3,
            percentile: values?.patentspercent,
            score: values?.patents,
          },
          whitepaperConferencePresentation: {
            value: 3,
            percentile: values?.presentationpercent,
            score: values?.presentation,
          },
          blog: {
            value: 3,
            percentile: values?.blogpercent,
            score: values?.blog,
          },
        },
        emotionalIntelligencyScores: {
          teamWork: {
            value: 3,
            percentile: values?.teamworkpercent,
            score: values?.teamwork,
          },
          complexityHandling: {
            value: 3,
            percentile: values?.complexityhandlingpercent,
            score: values?.complexityHandling,
          },
          conflictResolution: {
            value: 3,
            percentile: values?.conflictresolutionpercent,
            score: values?.conflictresolution,
          },
          initiative: {
            value: 3,
            percentile: values?.initiativepercent,
            score: values?.initiative,
          },
          culturalFitPresentation: {
            value: 3,
            percentile: values?.culturalFitpercent,
            score: values?.culturalFit,
          },
          communication: {
            value: 3,
            percentile: values?.communicationpercent,
            score: values?.communication,
          },
          ownership: {
            value: 3,
            percentile: values?.ownershippercent,
            score: values?.ownership,
          },
          empathy: {
            value: 3,
            percentile: values?.empathypercent,
            score: values?.empathy,
          },
          openness: {
            value: 3,
            percentile: values?.opennesspercent,
            score: values?.openness,
          },
        },
        reliabilityScores: {
          design: {
            value: 3,
            percentile: values?.designpercent,
            score: values?.design,
          },
          framework: {
            value: 3,
            percentile: values?.frameworkpercent,
            score: values?.framework,
          },
          coding: {
            value: 3,
            percentile: values?.codingpercent,
            score: values?.coding,
          },
          debugging: {
            value: 3,
            percentile: values?.debuggingpercent,
            score: values?.debugging,
          },
          architecture: {
            value: 3,
            percentile: values?.architecturepercent,
            score: values?.architecture,
          },
          implementation: {
            value: 3,
            percentile: values?.implementationpercent,
            score: values?.implementation,
          },
        },
        undesirableScores: {
          plagiarism: {
            value: 3,
            percentile: values?.plagiarismpercent,
            score: values?.plagiarism,
          },
          trustIssues: {
            value: 3,
            percentile: values?.trustissuespercent,
            score: values?.trustissues,
          },
          fakeInformation: {
            value: 3,
            percentile: values?.fakeinformationpercent,
            score: values?.fakeinformation,
          },
        },
        mainScore: values?.mainScore,
      };
      console.log("submit data", apidata);
      const data = {
        data: apidata,
        navigate,
      };
      dispatch(addScore(data));
    },
  });

  useEffect(() => {
    console.log(formik.errors);
  }, [formik.errors]);

  const handleReset = () => {
    formik.resetForm();
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
        <Grid item xs={12} md={12}>
          <h1>Believeability </h1>
        </Grid>
        <Grid item xs={12} md={3}>
          <TextFieldGroup
            labelShink={true}
            variant="outlined"
            label="Qualification"
            name="qualification"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            disabled={candidateSlice?.candidateScore ? true : false}
            value={formik.values.qualification}
            errors={
              formik.touched.qualification && formik.errors.qualification
                ? formik.errors.qualification
                : null
            }
          />
        </Grid>

        <Grid item xs={12} md={3}>
          <TextFieldGroup
            labelShink={true}
            variant="outlined"
            label="Qualification percent"
            name="qualificationpercent"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            disabled={candidateSlice?.candidateScore ? true : false}
            value={formik.values.qualificationpercent}
            errors={
              formik.touched.qualificationpercent &&
              formik.errors.qualificationpercent
                ? formik.errors.qualificationpercent
                : null
            }
          />
        </Grid>

        <Grid item xs={12} md={3}>
          <TextFieldGroup
            labelShink={true}
            variant="outlined"
            label="Professional Experience"
            name="professionalExperience"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            disabled={candidateSlice?.candidateScore ? true : false}
            value={formik.values.professionalExperience}
            errors={
              formik.touched.professionalExperience &&
              formik.errors.professionalExperience
                ? formik.errors.professionalExperience
                : null
            }
          />
        </Grid>

        <Grid item xs={12} md={3}>
          <TextFieldGroup
            labelShink={true}
            variant="outlined"
            label="Professional Experience percent"
            name="professionalExperiencepercent"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            disabled={candidateSlice?.candidateScore ? true : false}
            value={formik.values.professionalExperiencepercent}
            errors={
              formik.touched.professionalExperiencepercent &&
              formik.errors.professionalExperiencepercent
                ? formik.errors.professionalExperiencepercent
                : null
            }
          />
        </Grid>

        <Grid item xs={12} md={3}>
          <TextFieldGroup
            labelShink={true}
            variant="outlined"
            label="Social Score"
            name="socialscore"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            disabled={candidateSlice?.candidateScore ? true : false}
            value={formik.values.socialscore}
            errors={
              formik.touched.socialscore && formik.errors.socialscore
                ? formik.errors.socialscore
                : null
            }
          />
        </Grid>

        <Grid item xs={12} md={3}>
          <TextFieldGroup
            labelShink={true}
            variant="outlined"
            label="Social Score percent"
            name="socialscorepercent"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            disabled={candidateSlice?.candidateScore ? true : false}
            value={formik.values.socialscorepercent}
            errors={
              formik.touched.socialscorepercent &&
              formik.errors.socialscorepercent
                ? formik.errors.socialscorepercent
                : null
            }
          />
        </Grid>

        <Grid item xs={12} md={3}>
          <TextFieldGroup
            labelShink={true}
            variant="outlined"
            label="Patents"
            name="patents"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            disabled={candidateSlice?.candidateScore ? true : false}
            value={formik.values.patents}
            errors={
              formik.touched.patents && formik.errors.patents
                ? formik.errors.patents
                : null
            }
          />
        </Grid>

        <Grid item xs={12} md={3}>
          <TextFieldGroup
            labelShink={true}
            variant="outlined"
            label="Patents percent"
            name="patentspercent"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            disabled={candidateSlice?.candidateScore ? true : false}
            value={formik.values.patentspercent}
            errors={
              formik.touched.patentspercent && formik.errors.patentspercent
                ? formik.errors.patentspercent
                : null
            }
          />
        </Grid>

        <Grid item xs={12} md={3}>
          <TextFieldGroup
            labelShink={true}
            variant="outlined"
            label="Blog"
            name="blog"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            disabled={candidateSlice?.candidateScore ? true : false}
            value={formik.values.blog}
            errors={
              formik.touched.blog && formik.errors.blog
                ? formik.errors.blog
                : null
            }
          />
        </Grid>

        <Grid item xs={12} md={3}>
          <TextFieldGroup
            labelShink={true}
            variant="outlined"
            label="Blogpercent"
            name="blogpercent"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            disabled={candidateSlice?.candidateScore ? true : false}
            value={formik.values.blogpercent}
            errors={
              formik.touched.blogpercent && formik.errors.blogpercent
                ? formik.errors.blogpercent
                : null
            }
          />
        </Grid>

        <Grid item xs={12} md={3}>
          <TextFieldGroup
            variant="outlined"
            labelShink={true}
            label="Presentation"
            name="presentation"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            disabled={candidateSlice?.candidateScore ? true : false}
            value={formik.values.presentation}
            errors={
              formik.touched.presentation && formik.errors.presentation
                ? formik.errors.presentation
                : null
            }
          />
        </Grid>

        <Grid item xs={12} md={3}>
          <TextFieldGroup
            variant="outlined"
            labelShink={true}
            label="Presentation percent"
            name="presentationpercent"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            disabled={candidateSlice?.candidateScore ? true : false}
            value={formik.values.presentationpercent}
            errors={
              formik.touched.presentationpercent &&
              formik.errors.presentationpercent
                ? formik.errors.presentationpercent
                : null
            }
          />
        </Grid>

        <Grid item xs={12} md={12}>
          <h1>Reliability</h1>
        </Grid>
        <Grid item xs={12} md={3}>
          <TextFieldGroup
            labelShink={true}
            variant="outlined"
            label="Design"
            name="design"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            disabled={candidateSlice?.candidateScore ? true : false}
            value={formik.values.design}
            errors={
              formik.touched.design && formik.errors.design
                ? formik.errors.design
                : null
            }
          />
        </Grid>

        <Grid item xs={12} md={3}>
          <TextFieldGroup
            labelShink={true}
            variant="outlined"
            label="Design percent"
            name="designpercent"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            disabled={candidateSlice?.candidateScore ? true : false}
            value={formik.values.designpercent}
            errors={
              formik.touched.designpercent && formik.errors.designpercent
                ? formik.errors.designpercent
                : null
            }
          />
        </Grid>

        <Grid item xs={12} md={3}>
          <TextFieldGroup
            labelShink={true}
            variant="outlined"
            label="Framework"
            name="framework"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            disabled={candidateSlice?.candidateScore ? true : false}
            value={formik.values.framework}
            errors={
              formik.touched.framework && formik.errors.framework
                ? formik.errors.framework
                : null
            }
          />
        </Grid>

        <Grid item xs={12} md={3}>
          <TextFieldGroup
            labelShink={true}
            variant="outlined"
            label="Framework percent"
            name="frameworkpercent"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            disabled={candidateSlice?.candidateScore ? true : false}
            value={formik.values.frameworkpercent}
            errors={
              formik.touched.frameworkpercent && formik.errors.frameworkpercent
                ? formik.errors.frameworkpercent
                : null
            }
          />
        </Grid>

        <Grid item xs={12} md={3}>
          <TextFieldGroup
            labelShink={true}
            variant="outlined"
            label="Coding"
            name="coding"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            disabled={candidateSlice?.candidateScore ? true : false}
            value={formik.values.coding}
            errors={
              formik.touched.coding && formik.errors.coding
                ? formik.errors.coding
                : null
            }
          />
        </Grid>

        <Grid item xs={12} md={3}>
          <TextFieldGroup
            labelShink={true}
            variant="outlined"
            label="Coding percent"
            name="codingpercent"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            disabled={candidateSlice?.candidateScore ? true : false}
            value={formik.values.codingpercent}
            errors={
              formik.touched.codingpercent && formik.errors.codingpercent
                ? formik.errors.codingpercent
                : null
            }
          />
        </Grid>

        <Grid item xs={12} md={3}>
          <TextFieldGroup
            labelShink={true}
            variant="outlined"
            label="Debugging"
            name="debugging"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            disabled={candidateSlice?.candidateScore ? true : false}
            value={formik.values.debugging}
            errors={
              formik.touched.debugging && formik.errors.debugging
                ? formik.errors.debugging
                : null
            }
          />
        </Grid>

        <Grid item xs={12} md={3}>
          <TextFieldGroup
            labelShink={true}
            variant="outlined"
            label="Debugging percent"
            name="debuggingpercent"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            disabled={candidateSlice?.candidateScore ? true : false}
            value={formik.values.debuggingpercent}
            errors={
              formik.touched.debuggingpercent && formik.errors.debuggingpercent
                ? formik.errors.debuggingpercent
                : null
            }
          />
        </Grid>

        <Grid item xs={12} md={3}>
          <TextFieldGroup
            labelShink={true}
            variant="outlined"
            label="Architecture "
            name="architecture"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            disabled={candidateSlice?.candidateScore ? true : false}
            value={formik.values.architecture}
            errors={
              formik.touched.architecture && formik.errors.architecture
                ? formik.errors.architecture
                : null
            }
          />
        </Grid>

        <Grid item xs={12} md={3}>
          <TextFieldGroup
            labelShink={true}
            variant="outlined"
            label="Architecture percent "
            name="architecturepercent"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            disabled={candidateSlice?.candidateScore ? true : false}
            value={formik.values.architecturepercent}
            errors={
              formik.touched.architecturepercent &&
              formik.errors.architecturepercent
                ? formik.errors.architecturepercent
                : null
            }
          />
        </Grid>

        <Grid item xs={12} md={3}>
          <TextFieldGroup
            variant="outlined"
            labelShink={true}
            label="Implementation"
            name="implementation"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            disabled={candidateSlice?.candidateScore ? true : false}
            value={formik.values.implementation}
            errors={
              formik.touched.implementation && formik.errors.implementation
                ? formik.errors.implementation
                : null
            }
          />
        </Grid>

        <Grid item xs={12} md={3}>
          <TextFieldGroup
            variant="outlined"
            labelShink={true}
            label="Implementation percent"
            name="implementationpercent"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            disabled={candidateSlice?.candidateScore ? true : false}
            value={formik.values.implementationpercent}
            errors={
              formik.touched.implementationpercent &&
              formik.errors.implementationpercent
                ? formik.errors.implementationpercent
                : null
            }
          />
        </Grid>

        <Grid item xs={12} md={12}>
          <h1>EI</h1>
        </Grid>
        <Grid item xs={12} md={3}>
          <TextFieldGroup
            labelShink={true}
            variant="outlined"
            label="Team Work"
            name="teamwork"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            disabled={candidateSlice?.candidateScore ? true : false}
            value={formik.values.teamwork}
            errors={
              formik.touched.teamwork && formik.errors.teamwork
                ? formik.errors.teamwork
                : null
            }
          />
        </Grid>

        <Grid item xs={12} md={3}>
          <TextFieldGroup
            labelShink={true}
            variant="outlined"
            label="Team Work percent"
            name="teamworkpercent"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            disabled={candidateSlice?.candidateScore ? true : false}
            value={formik.values.teamworkpercent}
            errors={
              formik.touched.teamworkpercent && formik.errors.teamworkpercent
                ? formik.errors.teamworkpercent
                : null
            }
          />
        </Grid>

        <Grid item xs={12} md={3}>
          <TextFieldGroup
            labelShink={true}
            variant="outlined"
            label="Complexity Handling"
            name="complexityhandling"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            disabled={candidateSlice?.candidateScore ? true : false}
            value={formik.values.complexityhandling}
            errors={
              formik.touched.complexityhandling &&
              formik.errors.complexityhandling
                ? formik.errors.complexityhandling
                : null
            }
          />
        </Grid>

        <Grid item xs={12} md={3}>
          <TextFieldGroup
            labelShink={true}
            variant="outlined"
            label="Complexity Handling percent"
            name="complexityhandlingpercent"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            disabled={candidateSlice?.candidateScore ? true : false}
            value={formik.values.complexityhandlingpercent}
            errors={
              formik.touched.complexityhandlingpercent &&
              formik.errors.complexityhandlingpercent
                ? formik.errors.complexityhandlingpercent
                : null
            }
          />
        </Grid>

        <Grid item xs={12} md={3}>
          <TextFieldGroup
            labelShink={true}
            variant="outlined"
            label="Conflict Resolution"
            name="conflictresolution"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            disabled={candidateSlice?.candidateScore ? true : false}
            value={formik.values.conflictresolution}
            errors={
              formik.touched.conflictresolution &&
              formik.errors.conflictresolution
                ? formik.errors.conflictresolution
                : null
            }
          />
        </Grid>
        <Grid item xs={12} md={3}>
          <TextFieldGroup
            labelShink={true}
            variant="outlined"
            label="Conflict Resolution percent"
            name="conflictresolutionpercent"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            disabled={candidateSlice?.candidateScore ? true : false}
            value={formik.values.conflictresolutionpercent}
            errors={
              formik.touched.conflictresolutionpercent &&
              formik.errors.conflictresolutionpercent
                ? formik.errors.conflictresolutionpercent
                : null
            }
          />
        </Grid>

        <Grid item xs={12} md={3}>
          <TextFieldGroup
            labelShink={true}
            variant="outlined"
            label="Initiative"
            name="initiative"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            disabled={candidateSlice?.candidateScore ? true : false}
            value={formik.values.initiative}
            errors={
              formik.touched.initiative && formik.errors.initiative
                ? formik.errors.initiative
                : null
            }
          />
        </Grid>
        <Grid item xs={12} md={3}>
          <TextFieldGroup
            labelShink={true}
            variant="outlined"
            label="Initiative percent"
            name="initiativepercent"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            disabled={candidateSlice?.candidateScore ? true : false}
            value={formik.values.initiativepercent}
            errors={
              formik.touched.initiativepercent &&
              formik.errors.initiativepercent
                ? formik.errors.initiativepercent
                : null
            }
          />
        </Grid>

        <Grid item xs={12} md={3}>
          <TextFieldGroup
            labelShink={true}
            variant="outlined"
            label="Cultural Fit"
            name="culturalFit"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            disabled={candidateSlice?.candidateScore ? true : false}
            value={formik.values.culturalFit}
            errors={
              formik.touched.culturalFit && formik.errors.culturalFit
                ? formik.errors.culturalFit
                : null
            }
          />
        </Grid>
        <Grid item xs={12} md={3}>
          <TextFieldGroup
            labelShink={true}
            variant="outlined"
            label="Cultural Fit percent"
            name="culturalFitpercent"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            disabled={candidateSlice?.candidateScore ? true : false}
            value={formik.values.culturalFitpercent}
            errors={
              formik.touched.culturalFitpercent &&
              formik.errors.culturalFitpercent
                ? formik.errors.culturalFitpercent
                : null
            }
          />
        </Grid>

        {/* <Grid item xs={12} md={3}>
          <TextFieldGroup
            labelShink={true}
            variant="outlined"
            label="Presentation"
            name="epresentation"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}disabled={candidateSlice?.candidateScore ? true : false}
            value={formik.values.epresentation}
            errors={
              formik.touched.epresentation && formik.errors.epresentation
                ? formik.errors.debepresentationugging
                : null
            }
          />
        </Grid> */}

        {/* <Grid item xs={12} md={3}>
          <TextFieldGroup
            labelShink={true}
            variant="outlined"
            label="Presentation percent"
            name="epresentationpercent"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}disabled={candidateSlice?.candidateScore ? true : false}
            value={formik.values.epresentationpercent}
            errors={
              formik.touched.epresentationpercent &&
              formik.errors.epresentationpercent
                ? formik.errors.debepresentationuggingpercent
                : null
            }
          />
        </Grid> */}

        <Grid item xs={12} md={3}>
          <TextFieldGroup
            variant="outlined"
            labelShink={true}
            label="Communication"
            name="communication"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            disabled={candidateSlice?.candidateScore ? true : false}
            value={formik.values.communication}
            errors={
              formik.touched.communication && formik.errors.communication
                ? formik.errors.communication
                : null
            }
          />
        </Grid>
        <Grid item xs={12} md={3}>
          <TextFieldGroup
            variant="outlined"
            labelShink={true}
            label="Communication percent"
            name="communicationpercent"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            disabled={candidateSlice?.candidateScore ? true : false}
            value={formik.values.communicationpercent}
            errors={
              formik.touched.communicationpercent &&
              formik.errors.communicationpercent
                ? formik.errors.communicationpercent
                : null
            }
          />
        </Grid>

        <Grid item xs={12} md={3}>
          <TextFieldGroup
            labelShink={true}
            variant="outlined"
            label="Ownership "
            name="ownership"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            disabled={candidateSlice?.candidateScore ? true : false}
            value={formik.values.ownership}
            errors={
              formik.touched.ownership && formik.errors.ownership
                ? formik.errors.ownership
                : null
            }
          />
        </Grid>

        <Grid item xs={12} md={3}>
          <TextFieldGroup
            labelShink={true}
            variant="outlined"
            label="Ownership percent "
            name="ownershippercent"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            disabled={candidateSlice?.candidateScore ? true : false}
            value={formik.values.ownershippercent}
            errors={
              formik.touched.ownershippercent && formik.errors.ownershippercent
                ? formik.errors.ownershippercent
                : null
            }
          />
        </Grid>

        <Grid item xs={12} md={3}>
          <TextFieldGroup
            variant="outlined"
            labelShink={true}
            label="Empathy"
            name="empathy"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            disabled={candidateSlice?.candidateScore ? true : false}
            value={formik.values.empathy}
            errors={
              formik.touched.empathy && formik.errors.empathy
                ? formik.errors.empathy
                : null
            }
          />
        </Grid>

        <Grid item xs={12} md={3}>
          <TextFieldGroup
            variant="outlined"
            labelShink={true}
            label="Empathy percent"
            name="empathypercent"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            disabled={candidateSlice?.candidateScore ? true : false}
            value={formik.values.empathypercent}
            errors={
              formik.touched.empathypercent && formik.errors.empathypercent
                ? formik.errors.empathypercent
                : null
            }
          />
        </Grid>

        <Grid item xs={12} md={3}>
          <TextFieldGroup
            variant="outlined"
            labelShink={true}
            label="Openness"
            name="openness"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            disabled={candidateSlice?.candidateScore ? true : false}
            value={formik.values.openness}
            errors={
              formik.touched.openness && formik.errors.openness
                ? formik.errors.openness
                : null
            }
          />
        </Grid>
        <Grid item xs={12} md={3}>
          <TextFieldGroup
            variant="outlined"
            labelShink={true}
            label="Openness percent"
            name="opennesspercent"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            disabled={candidateSlice?.candidateScore ? true : false}
            value={formik.values.opennesspercent}
            errors={
              formik.touched.opennesspercent && formik.errors.opennesspercent
                ? formik.errors.opennesspercent
                : null
            }
          />
        </Grid>

        <Grid item xs={12} md={12}>
          <h1>Undesirable</h1>
        </Grid>
        <Grid item xs={12} md={3}>
          <TextFieldGroup
            variant="outlined"
            labelShink={true}
            label="Plagiarism"
            name="plagiarism"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            disabled={candidateSlice?.candidateScore ? true : false}
            value={formik.values.plagiarism}
            errors={
              formik.touched.plagiarism && formik.errors.plagiarism
                ? formik.errors.plagiarism
                : null
            }
          />
        </Grid>
        <Grid item xs={12} md={3}>
          <TextFieldGroup
            variant="outlined"
            labelShink={true}
            label="Plagiarism percent"
            name="plagiarismpercent"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            disabled={candidateSlice?.candidateScore ? true : false}
            value={formik.values.plagiarismpercent}
            errors={
              formik.touched.plagiarismpercent &&
              formik.errors.plagiarismpercent
                ? formik.errors.plagiarismpercent
                : null
            }
          />
        </Grid>

        <Grid item xs={12} md={3}>
          <TextFieldGroup
            variant="outlined"
            labelShink={true}
            label="Trust Issues"
            name="trustissues"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            disabled={candidateSlice?.candidateScore ? true : false}
            value={formik.values.trustissues}
            errors={
              formik.touched.trustissues && formik.errors.trustissues
                ? formik.errors.trustissues
                : null
            }
          />
        </Grid>
        <Grid item xs={12} md={3}>
          <TextFieldGroup
            variant="outlined"
            labelShink={true}
            label="Trust Issues percent"
            name="trustissuespercent"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            disabled={candidateSlice?.candidateScore ? true : false}
            value={formik.values.trustissuespercent}
            errors={
              formik.touched.trustissuespercent &&
              formik.errors.trustissuespercent
                ? formik.errors.trustissuespercent
                : null
            }
          />
        </Grid>

        <Grid item xs={12} md={3}>
          <TextFieldGroup
            variant="outlined"
            labelShink={true}
            label="Fake Information"
            name="fakeinformation"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            disabled={candidateSlice?.candidateScore ? true : false}
            value={formik.values.fakeinformation}
            errors={
              formik.touched.fakeinformation && formik.errors.fakeinformation
                ? formik.errors.fakeinformation
                : null
            }
          />
        </Grid>
        <Grid item xs={12} md={3}>
          <TextFieldGroup
            variant="outlined"
            labelShink={true}
            label="Fake Information percent"
            name="fakeinformationpercent"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            disabled={candidateSlice?.candidateScore ? true : false}
            value={formik.values.fakeinformationpercent}
            errors={
              formik.touched.fakeinformationpercent &&
              formik.errors.fakeinformationpercent
                ? formik.errors.fakeinformationpercent
                : null
            }
          />
        </Grid>
        <Grid item xs={12} md={12}>
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
            disabled={candidateSlice?.candidateScore ? true : false}
            value={formik.values.mainScore}
            errors={
              formik.touched.mainScore && formik.errors.mainScore
                ? formik.errors.mainScore
                : null
            }
          />
        </Grid>
        <Grid item xs={12} md={6}></Grid>

        <Grid item xs={12} md={6} align="right">
          <div>
            <Button
              buttonStyle="submit"
              type="submit"
              name="save"
              color="primary"
              disabled={candidateSlice?.candidateScore ? true : false}
              //   className={classes.inputButtonFields}
              variant="contained"
              // onClick={submitForm}
            >
              Save
            </Button>
          </div>
        </Grid>

        <Grid item xs={12} md={6} align="left">
          <div>
            <Button
              buttonStyle="submit"
              type="reset"
              name="reset"
              color="primary"
              //   className={classes.inputButtonFields}
              variant="contained"
              onClick={handleReset}
            >
              Reset
            </Button>
          </div>
        </Grid>
      </Grid>
    </form>
  );

  return (
    <>
      <Header name="Scoring" caption="your opion is valuable" page={true} />
      <Container maxWidth="lg" className="adminAddNewEducator">
        {renderForm}
      </Container>
    </>
  );
};

export default AddScore;
