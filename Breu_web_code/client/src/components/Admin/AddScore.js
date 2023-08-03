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
  const [disabled, setDisabled] = useState();

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

      // percentage

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
      
      //Base score
      formik.setFieldValue(
        "qualificationBasescore",
        candidateSlice.candidateScore?.believabilityScores?.qualification?.Basescore
      );
      formik.setFieldValue(
        "professionalExperienceBasescore",
        candidateSlice.candidateScore?.believabilityScores
          ?.professionalExperience?.Basescore
      );
      formik.setFieldValue(
        "socialscoreBasescore",
        candidateSlice.candidateScore?.believabilityScores?.socialscore?.Basescore
      );
      formik.setFieldValue(
        "patentsBasescore",
        candidateSlice.candidateScore?.believabilityScores?.patents?.Basescore
      );
      formik.setFieldValue(
        "presentationBasescore",
        candidateSlice.candidateScore?.believabilityScores
          ?.whitepaperConferencePresentation?.Basescore
      );
      formik.setFieldValue(
        "blogBasescore",
        candidateSlice.candidateScore?.believabilityScores?.blog?.Basescore
      );
      formik.setFieldValue(
        "designBasescore",
        candidateSlice.candidateScore?.reliabilityScores?.design?.Basescore
      );
      formik.setFieldValue(
        "frameworkBasescore",
        candidateSlice.candidateScore?.reliabilityScores?.framework?.Basescore
      );
      formik.setFieldValue(
        "codingBasescore",
        candidateSlice.candidateScore?.reliabilityScores?.coding?.Basescore
      );
      formik.setFieldValue(
        "debuggingBasescore",
        candidateSlice.candidateScore?.reliabilityScores?.debugging?.Basescore
      );
      formik.setFieldValue(
        "architectureBasescore",
        candidateSlice.candidateScore?.reliabilityScores?.architecture?.Basescore
      );
      formik.setFieldValue(
        "implementationBasescore",
        candidateSlice.candidateScore?.reliabilityScores?.implementation?.Basescore
      );
      formik.setFieldValue(
        "teamworkBasescore",
        candidateSlice.candidateScore?.emotionalIntelligencyScores?.teamWork
          ?.Basescore
      );
      formik.setFieldValue(
        "complexityhandlingBasescore",
        candidateSlice.candidateScore?.emotionalIntelligencyScores
          ?.complexityHandling?.Basescore
      );
      formik.setFieldValue(
        "conflictresolutionBasescore",
        candidateSlice.candidateScore?.emotionalIntelligencyScores
          ?.conflictResolution?.Basescore
      );
      formik.setFieldValue(
        "initiativeBasescore",
        candidateSlice.candidateScore?.emotionalIntelligencyScores?.initiative
          ?.Basescore
      );
      formik.setFieldValue(
        "culturalFitBasescore",
        candidateSlice.candidateScore?.emotionalIntelligencyScores
          ?.culturalFitPresentation?.Basescore
      );
      formik.setFieldValue(
        "communicationBasescore",
        candidateSlice.candidateScore?.emotionalIntelligencyScores
          ?.communication?.Basescore
      );
      formik.setFieldValue(
        "ownershipBasescore",
        candidateSlice.candidateScore?.emotionalIntelligencyScores?.ownership
          ?.Basescore
      );
      formik.setFieldValue(
        "empathyBasescore",
        candidateSlice.candidateScore?.emotionalIntelligencyScores?.empathy
          ?.Basescore
      );
      formik.setFieldValue(
        "opennessBasescore",
        candidateSlice.candidateScore?.emotionalIntelligencyScores?.openness
          ?.Basescore
      );
      formik.setFieldValue(
        "plagiarismBasescore",
        candidateSlice.candidateScore?.undesirableScores?.fakeInformation?.Basescore
      );
      formik.setFieldValue(
        "trustissuesBasescore",
        candidateSlice.candidateScore?.undesirableScores?.plagiarism?.Basescore
      );
      formik.setFieldValue(
        "fakeinformationBasescore",
        candidateSlice.candidateScore?.undesirableScores?.trustIssues?.Basescore
      );

      //Final Score
      formik.setFieldValue(
        "qualificationScore",
        candidateSlice.candidateScore?.believabilityScores?.qualification?.finalscore
      );
      formik.setFieldValue(
        "professionalExperienceScore",
        candidateSlice.candidateScore?.believabilityScores
          ?.professionalExperience?.finalscore
      );
      formik.setFieldValue(
        "socialscoreScore",
        candidateSlice.candidateScore?.believabilityScores?.socialscore?.finalscore
      );
      formik.setFieldValue(
        "patentsScore",
        candidateSlice.candidateScore?.believabilityScores?.patents?.finalscore
      );
      formik.setFieldValue(
        "presentationScore",
        candidateSlice.candidateScore?.believabilityScores
          ?.whitepaperConferencePresentation?.finalscore
      );
      formik.setFieldValue(
        "blogScore",
        candidateSlice.candidateScore?.believabilityScores?.blog?.finalscore
      );
      formik.setFieldValue(
        "designScore",
        candidateSlice.candidateScore?.reliabilityScores?.design?.finalscore
      );
      formik.setFieldValue(
        "frameworkScore",
        candidateSlice.candidateScore?.reliabilityScores?.framework?.finalscore
      );
      formik.setFieldValue(
        "codingScore",
        candidateSlice.candidateScore?.reliabilityScores?.coding?.finalscore
      );
      formik.setFieldValue(
        "debuggingScore",
        candidateSlice.candidateScore?.reliabilityScores?.debugging?.finalscore
      );
      formik.setFieldValue(
        "architectureScore",
        candidateSlice.candidateScore?.reliabilityScores?.architecture?.finalscore
      );
      formik.setFieldValue(
        "implementationScore",
        candidateSlice.candidateScore?.reliabilityScores?.implementation?.finalscore
      );
      formik.setFieldValue(
        "teamworkScore",
        candidateSlice.candidateScore?.emotionalIntelligencyScores?.teamWork
          ?.finalscore
      );
      formik.setFieldValue(
        "complexityhandlingScore",
        candidateSlice.candidateScore?.emotionalIntelligencyScores
          ?.complexityHandling?.finalscore
      );
      formik.setFieldValue(
        "conflictresolutionScore",
        candidateSlice.candidateScore?.emotionalIntelligencyScores
          ?.conflictResolution?.finalscore
      );
      formik.setFieldValue(
        "initiativeScore",
        candidateSlice.candidateScore?.emotionalIntelligencyScores?.initiative
          ?.finalscore
      );
      formik.setFieldValue(
        "culturalFitScore",
        candidateSlice.candidateScore?.emotionalIntelligencyScores
          ?.culturalFitPresentation?.finalscore
      );
      formik.setFieldValue(
        "communicationScore",
        candidateSlice.candidateScore?.emotionalIntelligencyScores
          ?.communication?.finalscore
      );
      formik.setFieldValue(
        "ownershipScore",
        candidateSlice.candidateScore?.emotionalIntelligencyScores?.ownership
          ?.finalscore
      );
      formik.setFieldValue(
        "empathyScore",
        candidateSlice.candidateScore?.emotionalIntelligencyScores?.empathy
          ?.finalscore
      );
      formik.setFieldValue(
        "opennessScore",
        candidateSlice.candidateScore?.emotionalIntelligencyScores?.openness
          ?.finalscore
      );
      formik.setFieldValue(
        "plagiarismScore",
        candidateSlice.candidateScore?.undesirableScores?.fakeInformation?.finalscore
      );
      formik.setFieldValue(
        "trustissuesScore",
        candidateSlice.candidateScore?.undesirableScores?.plagiarism?.finalscore
      );
      formik.setFieldValue(
        "fakeinformationScore",
        candidateSlice.candidateScore?.undesirableScores?.trustIssues?.finalscore
      );

      formik.setFieldValue(
        "mainScore",
        candidateSlice.candidateScore?.mainScore
      );
      setDisabled(true);
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
      // epresentation: "",
      communication: "",
      ownership: "",
      empathy: "",
      openness: "",
      plagiarism: "",
      trustissues: "",
      fakeinformation: "",

      //base score
      qualificationBasescore: "",
      professionalExperienceBasescore: "",
      socialscoreBasescore: "",
      patentsBasescore: "",
      blogBasescore: "",
      presentationBasescore: "",
      designBasescore: "",
      frameworkBasescore: "",
      codingBasescore: "",
      debuggingBasescore: "",
      architectureBasescore: "",
      implementationBasescore: "",

      teamworkBasescore: "",
      complexityhandlingBasescore: "",
      conflictresolutionBasescore: "",
      initiativeBasescore: "",
      culturalFitBasescore: "",
      // epresentation: "",
      communicationBasescore: "",
      ownershipBasescore: "",
      empathyBasescore: "",
      opennessBasescore: "",
      plagiarismBasescore: "",
      trustissuesBasescore: "",
      fakeinformationBasescore: "",


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
      // epresentationpercent: "",
      communicationpercent: "",
      ownershippercent: "",
      empathypercent: "",
      opennesspercent: "",
      plagiarismpercent: "",
      trustissuespercent: "",
      fakeinformationpercent: "",
      mainScore: "",

      //final score
      qualificationScore: "",
      professionalExperienceScore: "",
      socialscoreScore: "",
      patentsScore: "",
      blogScore: "",
      presentationScore: "",
      designScore: "",
      frameworkScore: "",
      codingScore: "",
      debuggingScore: "",
      architectureScore: "",
      implementationScore: "",
      teamworkScore: "",
      complexityhandlingScore: "",
      conflictresolutionScore: "",
      initiativeScore: "",
      culturalFitScore: "",
      // epresentation: "",
      communicationScore: "",
      ownershipScore: "",
      empathyScore: "",
      opennessScore: "",
      plagiarismScore: "",
      trustissuesScore: "",
      fakeinformationScore: "",
    },
    validationSchema: Yup.object({
      // scheduleDescription: Yup.string()
      //   .trim()
      //   .required("Schedule Description is required field"),
      qualification: Yup.number()
        .min(1)
        // .max(5)
        .required("Please enter the value")
        .typeError("Qualification value should be a number"),

      professionalExperience: Yup.number()
        .min(1)
        // .max(5)
        .required("Please enter the value")
        .typeError("ProfessionalExperience value should be a number"),

      socialscore: Yup.number()
        .min(1)
        // .max(5)
        .required("Please enter the value")
        .typeError("Socialscore value should be a number"),

      patents: Yup.number()
        .min(1)
        // .max(5)
        .required("Please enter the value")
        .typeError("Patents value should be a number"),

      blog: Yup.number()
        .min(1)
        // .max(5)
        .required("Please enter the value")
        .typeError("Blog value should be a number"),

      presentation: Yup.number()
        .min(1)
        // .max(5)
        .required("Please enter the value")
        .typeError("Presentation value should be a number"),

      //Reliability

      design: Yup.number()
        .min(1)
        // .max(5)
        .required("Please enter the value")
        .typeError("design value should be a number"),

      framework: Yup.number()
        .min(1)
        // .max(5)
        .required("Please enter the value")
        .typeError("framework value should be a number"),

      coding: Yup.number()
        .min(1)
        .required("Please enter the value")
        .typeError("coding value should be a number"),

      debugging: Yup.number()
        .min(1)
        // .max(5)
        .required("Please enter the value")
        .typeError("debugging value should be a number"),

      architecture: Yup.number()
        .min(1)
        // .max(5)
        .required("Please enter the value")
        .typeError("architecture  value should be a number"),

      implementation: Yup.number()
        .min(1)
        // .max(5)
        .required("Please enter the value")
        .typeError("implementation value should be a number"),

      //EI

      teamwork: Yup.number()
        .min(1)
        // .max(5)
        .required("Please enter the value")
        .typeError("teamwork value should be a number"),

      complexityhandling: Yup.number()
        .min(1)
        // .max(5)
        .required("Please enter the value")
        .typeError("complexityhandling value should be a number"),

      conflictresolution: Yup.number()
        .min(1)
        // .max(5)
        .required("Please enter the value")
        .typeError("conflictresolution value should be a number"),

      initiative: Yup.number()
        .min(1)
        // .max(5)
        .required("Please enter the value")
        .typeError("initiative value should be a number"),

      ownership: Yup.number()
        .min(1)
        // .max(5)
        .required("Please enter the value")
        .typeError("Ownership value should be a number"),

      // epresentation: Yup.number()
      //   .min(1)
      //   .required("Please enter the value")
      //   .typeError("Presentation value should be a number"),

      communication: Yup.number()
        .min(1)
        // .max(5)
        .required("Please enter the value")
        .typeError("communication value should be a number"),

      empathy: Yup.number()
        .min(1)
        // .max(5)
        .required("Please enter the value")
        .typeError("Empathy value should be a number"),

      openness: Yup.number()
        .min(1)
        // .max(5)
        .required("Please enter the value")
        .typeError("Openness value should be a number"),

      //Undesirable

      plagiarism: Yup.number()
        .min(1)
        // .max(5)
        .required("Please enter the value")
        .typeError("plagiarism value should be a number"),

      trustissues: Yup.number()
        .min(1)
        // .max(5)
        .required("Please enter the value")
        .typeError("Trustissues value should be a number"),

      fakeinformation: Yup.number()
        .min(1)
        // .max(5)
        .required("Please enter the value")
        .typeError("Fakeinformation value should be a number"),

//percentile
      
qualificationpercent: Yup.number()
        .min(1)
        .max(100)
        .required("Please enter the value")
        .typeError("Qualificationpercent value should be a number"),

      professionalExperiencepercent: Yup.number()
        .min(1)
        .max(100)
        .required("Please enter the value")
        .typeError("ProfessionalExperiencepercent value should be a number"),

      socialscorepercent: Yup.number()
        .min(1)
        .max(100)
        .required("Please enter the value")
        .typeError("Socialscorepercent value should be a number"),

      patentspercent: Yup.number()
        .min(1)
        .max(100)
        .required("Please enter the value")
        .typeError("Patentspercent value should be a number"),

      blogpercent: Yup.number()
        .min(1)
        .max(100)
        .required("Please enter the value")
        .typeError("Blogpercent value should be a number"),

      presentationpercent: Yup.number()
        .min(1)
        .max(100)
        .required("Please enter the value")
        .typeError("Presentationpercent value should be a number"),

      //Reliability

      designpercent: Yup.number()
        .min(1)
        .max(100)
        .required("Please enter the value")
        .typeError("designpercent value should be a number"),

      frameworkpercent: Yup.number()
        .min(1)
        .max(100)
        .required("Please enter the value")
        .typeError("frameworkpercent value should be a number"),

      codingpercent: Yup.number()
        .min(1)
        .max(100)
        .required("Please enter the value")
        .typeError("codingpercent value should be a number"),

      debuggingpercent: Yup.number()
        .min(1)
        .max(100)
        .required("Please enter the value")
        .typeError("debuggingpercent value should be a number"),

      architecturepercent: Yup.number()
        .min(1)
        .max(100)
        .required("Please enter the value")
        .typeError("architecturepercent  value should be a number"),

      implementationpercent: Yup.number()
        .min(1)
        .max(100)
        .required("Please enter the value")
        .typeError("implementationpercent value should be a number"),

      //EI

      teamworkpercent: Yup.number()
        .min(1)
        .max(100)
        .required("Please enter the value")
        .typeError("teamworkpercent value should be a number"),

      complexityhandlingpercent: Yup.number()
        .min(1)
        .max(100)
        .required("Please enter the value")
        .typeError("complexityhandlingpercent value should be a number"),

      conflictresolutionpercent: Yup.number()
        .min(1)
        .max(100)
        .required("Please enter the value")
        .typeError("conflictresolutionpercent value should be a number"),

      initiativepercent: Yup.number()
        .min(1)
        .max(100)
        .required("Please enter the value")
        .typeError("initiativepercent value should be a number"),

      ownershippercent: Yup.number()
        .min(1)
        .max(100)
        .required("Please enter the value")
        .typeError("Ownershippercent value should be a number"),

      // epresentationpercent: Yup.number()
      //   .min(1)
      //   .required("Please enter the value")
      //   .typeError("Presentationpercent value should be a number"),

      communicationpercent: Yup.number()
        .min(1)
        .max(100)
        .required("Please enter the value")
        .typeError("communicationpercent value should be a number"),

      empathypercent: Yup.number()
        .min(1)
        .max(100)
        .required("Please enter the value")
        .typeError("Empathypercent value should be a number"),

      opennesspercent: Yup.number()
        .min(1)
        .max(100)
        .required("Please enter the value")
        .typeError("Opennesspercent value should be a number"),

      //Undesirable

      plagiarismpercent: Yup.number()
        .min(1)
        .max(100)
        .required("Please enter the value")
        .typeError("plagiarismpercent value should be a number"),

      trustissuespercent: Yup.number()
        .min(1)
        .max(100)
        .required("Please enter the value")
        .typeError("Trustissuespercent value should be a number"),

      fakeinformationpercent: Yup.number()
        .min(1)
        .max(100)
        .required("Please enter the value")
        .typeError("Fakeinformationpercent value should be a number"),



       //base score
        qualificationBasescore: Yup.number()
        .min(1)
        .max(100)
        .required("Please enter the value")
        .typeError("Qualification Basescore should be a number"),

      professionalExperienceBasescore: Yup.number()
        .min(1)
        .max(100)
        .required("Please enter the value")
        .typeError("ProfessionalExperience Basescore should be a number"),

      socialscoreBasescore: Yup.number()
        .min(1)
        .max(100)
        .required("Please enter the value")
        .typeError("Socialscore Basescore should be a number"),

      patentsBasescore: Yup.number()
        .min(1)
        .max(100)
        .required("Please enter the value")
        .typeError("Patents Basescore should be a number"),

      blogBasescore: Yup.number()
        .min(1)
        .max(100)
        .required("Please enter the value")
        .typeError("Blog Basescore should be a number"),

      presentationBasescore: Yup.number()
        .min(1)
        .max(100)
        .required("Please enter the value")
        .typeError("Presentation Basescore should be a number"),

      //Reliability

      designBasescore: Yup.number()
        .min(1)
        .max(100)
        .required("Please enter the value")
        .typeError("design Basescore should be a number"),

      frameworkBasescore: Yup.number()
        .min(1)
        .max(100)
        .required("Please enter the value")
        .typeError("framework Basescore should be a number"),

      codingBasescore: Yup.number()
        .min(1)
        .max(100)
        .required("Please enter the value")
        .typeError("coding Basescore should be a number"),

      debuggingBasescore: Yup.number()
        .min(1)
        .max(100)
        .required("Please enter the value")
        .typeError("debugging Basescore should be a number"),

      architectureBasescore: Yup.number()
        .min(1)
        .max(100)
        .required("Please enter the value")
        .typeError("architecture  Basescore should be a number"),

      implementationBasescore: Yup.number()
        .min(1)
        .max(100)
        .required("Please enter the value")
        .typeError("implementation Basescore should be a number"),

      //EI

      teamworkBasescore: Yup.number()
        .min(1)
        .max(100)
        .required("Please enter the value")
        .typeError("teamwork Basescore should be a number"),

      complexityhandlingBasescore: Yup.number()
        .min(1)
        .max(100)
        .required("Please enter the value")
        .typeError("complexityhandling Basescore should be a number"),

      conflictresolutionBasescore: Yup.number()
        .min(1)
        .max(100)
        .required("Please enter the value")
        .typeError("conflictresolution Basescore should be a number"),

      initiativeBasescore: Yup.number()
        .min(1)
        .max(100)
        .required("Please enter the value")
        .typeError("initiative Basescore should be a number"),

      ownershipBasescore: Yup.number()
        .min(1)
        .max(100)
        .required("Please enter the value")
        .typeError("Ownership Basescore should be a number"),

      // epresentation: Yup.number()
      //   .min(1)
      //   .required("Please enter the value")
      //   .typeError("Presentation value should be a number"),

      communicationBasescore: Yup.number()
        .min(1)
        .max(100)
        .required("Please enter the value")
        .typeError("communication Basescore should be a number"),

      empathyBasescore: Yup.number()
        .min(1)
        .max(100)
        .required("Please enter the value")
        .typeError("Empathy Basescore should be a number"),

      opennessBasescore: Yup.number()
        .min(1)
        .max(100)
        .required("Please enter the value")
        .typeError("Openness Basescore should be a number"),

      //Undesirable

      plagiarismBasescore: Yup.number()
        .min(1)
        .max(100)
        .required("Please enter the value")
        .typeError("plagiarism Basescore should be a number"),

      trustissuesBasescore: Yup.number()
        .min(1)
        .max(100)
        .required("Please enter the value")
        .typeError("Trustissues Basescore should be a number"),

      fakeinformationBasescore: Yup.number()
        .min(1)
        .max(100)
        .required("Please enter the value")
        .typeError("Fakeinformation Basescore should be a number"),

        //Final score

        qualificationScore: Yup.number()
        .min(1)
        .max(5)
        .required("Please enter the value")
        .typeError("Qualification Score should be a number"),

      professionalExperienceScore: Yup.number()
        .min(1)
        .max(5)
        .required("Please enter the value")
        .typeError("ProfessionalExperience Score should be a number"),

      socialscoreScore: Yup.number()
        .min(1)
        .max(5)
        .required("Please enter the value")
        .typeError("Socialscore Score should be a number"),

      patentsScore: Yup.number()
        .min(1)
        .max(5)
        .required("Please enter the value")
        .typeError("Patents Score should be a number"),

      blogScore: Yup.number()
        .min(1)
        .max(5)
        .required("Please enter the value")
        .typeError("Blog Score should be a number"),

      presentationScore: Yup.number()
        .min(1)
        .max(5)
        .required("Please enter the value")
        .typeError("Presentation Score should be a number"),

      //Reliability

      designScore: Yup.number()
        .min(1)
        .max(5)
        .required("Please enter the value")
        .typeError("design Score should be a number"),

      frameworkScore: Yup.number()
        .min(1)
        .max(5)
        .required("Please enter the value")
        .typeError("framework Score should be a number"),

      codingScore: Yup.number()
        .min(1)
        .required("Please enter the value")
        .typeError("coding Score should be a number"),

      debuggingScore: Yup.number()
        .min(1)
        .max(5)
        .required("Please enter the value")
        .typeError("debugging Score should be a number"),

      architectureScore: Yup.number()
        .min(1)
        .max(5)
        .required("Please enter the value")
        .typeError("architecture  Score should be a number"),

      implementationScore: Yup.number()
        .min(1)
        .max(5)
        .required("Please enter the value")
        .typeError("implementation Score should be a number"),

      //EI

      teamworkScore: Yup.number()
        .min(1)
        .max(5)
        .required("Please enter the value")
        .typeError("teamwork Score should be a number"),

      complexityhandlingScore: Yup.number()
        .min(1)
        .max(5)
        .required("Please enter the value")
        .typeError("complexityhandling Score should be a number"),

      conflictresolutionScore: Yup.number()
        .min(1)
        .max(5)
        .required("Please enter the value")
        .typeError("conflictresolution Score should be a number"),

      initiativeScore: Yup.number()
        .min(1)
        .max(5)
        .required("Please enter the value")
        .typeError("initiative Score should be a number"),

      ownershipScore: Yup.number()
        .min(1)
        .max(5)
        .required("Please enter the value")
        .typeError("Ownership Score should be a number"),

      // epresentation: Yup.number()
      //   .min(1)
      //   .required("Please enter the value")
      //   .typeError("Presentation value should be a number"),

      communicationScore: Yup.number()
        .min(1)
        .max(5)
        .required("Please enter the value")
        .typeError("communication Score should be a number"),

      empathyScore: Yup.number()
        .min(1)
        .max(5)
        .required("Please enter the value")
        .typeError("Empathy Score should be a number"),

      opennessScore: Yup.number()
        .min(1)
        .max(5)
        .required("Please enter the value")
        .typeError("Openness Score should be a number"),

      //Undesirable

      plagiarismScore: Yup.number()
        .min(1)
        .max(5)
        .required("Please enter the value")
        .typeError("plagiarism Score should be a number"),

      trustissuesScore: Yup.number()
        .min(1)
        .max(5)
        .required("Please enter the value")
        .typeError("Trustissues Score should be a number"),

      fakeinformationScore: Yup.number()
        .min(1)
        .max(5)
        .required("Please enter the value")
        .typeError("Fakeinformation Score should be a number"),

    }),

    onSubmit: async (values) => {
      console.log("submit value", values);
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
      console.log(data);
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
            disabled={disabled}
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
            label="Qualification Basescore"
            name="qualificationBasescore"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            disabled={disabled}
            value={formik.values.qualificationBasescore}
            errors={
              formik.touched.qualificationBasescore && formik.errors.qualificationBasescore
                ? formik.errors.qualificationBasescore
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
            disabled={disabled}
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
            label="Qualification Score"
            name="qualificationScore"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            disabled={disabled}
            value={formik.values.qualificationScore}
            errors={
              formik.touched.qualificationScore && formik.errors.qualificationScore
                ? formik.errors.qualificationScore
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
            disabled={disabled}
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
            label="Professional Experience Basescore"
            name="professionalExperienceBasescore"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            disabled={disabled}
            value={formik.values.professionalExperienceBasescore}
            errors={
              formik.touched.professionalExperienceBasescore &&
              formik.errors.professionalExperienceBasescore
                ? formik.errors.professionalExperienceBasescore
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
            disabled={disabled}
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
            label="Professional Experience Score"
            name="professionalExperienceScore"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            disabled={disabled}
            value={formik.values.professionalExperienceScore}
            errors={
              formik.touched.professionalExperienceScore &&
              formik.errors.professionalExperienceScore
                ? formik.errors.professionalExperienceScore
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
            disabled={disabled}
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
            label="Social Score Basescore"
            name="socialscoreBasescore"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            disabled={disabled}
            value={formik.values.socialscoreBasescore}
            errors={
              formik.touched.socialscoreBasescore && formik.errors.socialscoreBasescore
                ? formik.errors.socialscoreBasescore
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
            disabled={disabled}
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
            label="Social Score"
            name="socialscoreScore"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            disabled={disabled}
            value={formik.values.socialscoreScore}
            errors={
              formik.touched.socialscoreScore && formik.errors.socialscoreScore
                ? formik.errors.socialscoreScore
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
            disabled={disabled}
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
            label="Patents Basescore"
            name="patentsBasescore"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            disabled={disabled}
            value={formik.values.patentsBasescore}
            errors={
              formik.touched.patentsBasescore && formik.errors.patentsBasescore
                ? formik.errors.patentsBasescore
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
            disabled={disabled}
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
            label="Patents Score"
            name="patentsScore"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            disabled={disabled}
            value={formik.values.patentsScore}
            errors={
              formik.touched.patentsScore && formik.errors.patentsScore
                ? formik.errors.patentsScore
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
            disabled={disabled}
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
            label="Blog Basescore"
            name="blogBasescore"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            disabled={disabled}
            value={formik.values.blogBasescore}
            errors={
              formik.touched.blogBasescore && formik.errors.blogBasescore
                ? formik.errors.blogBasescore
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
            disabled={disabled}
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
            labelShink={true}
            variant="outlined"
            label="Blog Score"
            name="blogScore"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            disabled={disabled}
            value={formik.values.blogScore}
            errors={
              formik.touched.blogScore && formik.errors.blogScore
                ? formik.errors.blogScore
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
            disabled={disabled}
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
            label="Presentation Basescore"
            name="presentationBasescore"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            disabled={disabled}
            value={formik.values.presentationBasescore}
            errors={
              formik.touched.presentationBasescore && formik.errors.presentationBasescore
                ? formik.errors.presentationBasescore
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
            disabled={disabled}
            value={formik.values.presentationpercent}
            errors={
              formik.touched.presentationpercent &&
              formik.errors.presentationpercent
                ? formik.errors.presentationpercent
                : null
            }
          />
        </Grid>

        <Grid item xs={12} md={3}>
          <TextFieldGroup
            variant="outlined"
            labelShink={true}
            label="Presentation Score"
            name="presentationScore"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            disabled={disabled}
            value={formik.values.presentationScore}
            errors={
              formik.touched.presentationScore && formik.errors.presentationScore
                ? formik.errors.presentationScore
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
            disabled={disabled}
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
            label="Design Basescore"
            name="designBasescore"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            disabled={disabled}
            value={formik.values.designBasescore}
            errors={
              formik.touched.designBasescore && formik.errors.designBasescore
                ? formik.errors.designBasescore
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
            disabled={disabled}
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
            label="Design Score"
            name="designScore"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            disabled={disabled}
            value={formik.values.designScore}
            errors={
              formik.touched.designScore && formik.errors.designScore
                ? formik.errors.designScore
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
            disabled={disabled}
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
            label="Framework Basescore"
            name="frameworkBasescore"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            disabled={disabled}
            value={formik.values.frameworkBasescore}
            errors={
              formik.touched.frameworkBasescore && formik.errors.frameworkBasescore
                ? formik.errors.frameworkBasescore
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
            disabled={disabled}
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
            label="Framework Score"
            name="frameworkScore"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            disabled={disabled}
            value={formik.values.frameworkScore}
            errors={
              formik.touched.frameworkScore && formik.errors.frameworkScore
                ? formik.errors.frameworkScore
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
            disabled={disabled}
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
            label="Coding Basescore"
            name="codingBasescore"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            disabled={disabled}
            value={formik.values.codingBasescore}
            errors={
              formik.touched.codingBasescore && formik.errors.codingBasescore
                ? formik.errors.codingBasescore
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
            disabled={disabled}
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
            label="Coding Score"
            name="codingScore"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            disabled={disabled}
            value={formik.values.codingScore}
            errors={
              formik.touched.codingScore && formik.errors.codingScore
                ? formik.errors.codingScore
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
            disabled={disabled}
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
            label="Debugging Basescore"
            name="debuggingBasescore"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            disabled={disabled}
            value={formik.values.debuggingBasescore}
            errors={
              formik.touched.debuggingBasescore && formik.errors.debuggingBasescore
                ? formik.errors.debuggingBasescore
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
            disabled={disabled}
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
            label="Debugging Score"
            name="debuggingScore"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            disabled={disabled}
            value={formik.values.debuggingScore}
            errors={
              formik.touched.debuggingScore && formik.errors.debuggingScore
                ? formik.errors.debuggingScore
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
            disabled={disabled}
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
            label="Architecture Basescore"
            name="architectureBasescore"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            disabled={disabled}
            value={formik.values.architectureBasescore}
            errors={
              formik.touched.architectureBasescore && formik.errors.architectureBasescore
                ? formik.errors.architectureBasescore
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
            disabled={disabled}
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
            labelShink={true}
            variant="outlined"
            label="Architecture Score "
            name="architectureScore"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            disabled={disabled}
            value={formik.values.architectureScore}
            errors={
              formik.touched.architectureScore && formik.errors.architectureScore
                ? formik.errors.architectureScore
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
            disabled={disabled}
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
            label="Implementation Basescore"
            name="implementationBasescore"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            disabled={disabled}
            value={formik.values.implementationBasescore}
            errors={
              formik.touched.implementationBasescore && formik.errors.implementationBasescore
                ? formik.errors.implementationBasescore
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
            disabled={disabled}
            value={formik.values.implementationpercent}
            errors={
              formik.touched.implementationpercent &&
              formik.errors.implementationpercent
                ? formik.errors.implementationpercent
                : null
            }
          />
        </Grid>

        <Grid item xs={12} md={3}>
          <TextFieldGroup
            variant="outlined"
            labelShink={true}
            label="Implementation Score"
            name="implementationScore"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            disabled={disabled}
            value={formik.values.implementationScore}
            errors={
              formik.touched.implementationScore && formik.errors.implementationScore
                ? formik.errors.implementationScore
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
            disabled={disabled}
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
            label="Team Work Basescore"
            name="teamworkBasescore"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            disabled={disabled}
            value={formik.values.teamworkBasescore}
            errors={
              formik.touched.teamworkBasescore && formik.errors.teamworkBasescore
                ? formik.errors.teamworkBasescore
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
            disabled={disabled}
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
            label="Team Work Score"
            name="teamworkScore"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            disabled={disabled}
            value={formik.values.teamworkScore}
            errors={
              formik.touched.teamworkScore && formik.errors.teamworkScore
                ? formik.errors.teamworkScore
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
            disabled={disabled}
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
            label="Complexity Handling Basescore"
            name="complexityhandlingBasescore"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            disabled={disabled}
            value={formik.values.complexityhandlingBasescore}
            errors={
              formik.touched.complexityhandlingBasescore &&
              formik.errors.complexityhandlingBasescore
                ? formik.errors.complexityhandlingBasescore
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
            disabled={disabled}
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
            label="Complexity Handling Score"
            name="complexityhandlingScore"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            disabled={disabled}
            value={formik.values.complexityhandlingScore}
            errors={
              formik.touched.complexityhandlingScore &&
              formik.errors.complexityhandlingScore
                ? formik.errors.complexityhandlingScore
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
            disabled={disabled}
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
            label="Conflict Resolution Basescore"
            name="conflictresolutionBasescore"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            disabled={disabled}
            value={formik.values.conflictresolutionBasescore}
            errors={
              formik.touched.conflictresolutionBasescore &&
              formik.errors.conflictresolutionBasescore
                ? formik.errors.conflictresolutionBasescore
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
            disabled={disabled}
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
            label="Conflict Resolution Score"
            name="conflictresolutionScore"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            disabled={disabled}
            value={formik.values.conflictresolutionScore}
            errors={
              formik.touched.conflictresolutionScore &&
              formik.errors.conflictresolutionScore
                ? formik.errors.conflictresolutionScore
                : null
            }
          />
        </Grid>

        <Grid item xs={12} md={3}>
          <TextFieldGroup
            labelShink={true}
            variant="outlined"
            label="Initiative "
            name="initiative"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            disabled={disabled}
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
            label="Initiative Basescore"
            name="initiativeBasescore"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            disabled={disabled}
            value={formik.values.initiativeBasescore}
            errors={
              formik.touched.initiativeBasescore && formik.errors.initiativeBasescore
                ? formik.errors.initiativeBasescore
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
            disabled={disabled}
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
            label="Initiative Score"
            name="initiativeScore"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            disabled={disabled}
            value={formik.values.initiativeScore}
            errors={
              formik.touched.initiativeScore && formik.errors.initiativeScore
                ? formik.errors.initiativeScore
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
            disabled={disabled}
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
            label="Cultural Fit Basescore"
            name="culturalFitBasescore"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            disabled={disabled}
            value={formik.values.culturalFitBasescore}
            errors={
              formik.touched.culturalFitBasescore && formik.errors.culturalFitBasescore
                ? formik.errors.culturalFitBasescore
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
            disabled={disabled}
            value={formik.values.culturalFitpercent}
            errors={
              formik.touched.culturalFitpercent &&
              formik.errors.culturalFitpercent
                ? formik.errors.culturalFitpercent
                : null
            }
          />
        </Grid>
        <Grid item xs={12} md={3}>
          <TextFieldGroup
            labelShink={true}
            variant="outlined"
            label="Cultural Fit Score"
            name="culturalFitScore"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            disabled={disabled}
            value={formik.values.culturalFitScore}
            errors={
              formik.touched.culturalFitScore && formik.errors.culturalFitScore
                ? formik.errors.culturalFitScore
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
            onBlur={formik.handleBlur}disabled={disabled}
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
            onBlur={formik.handleBlur}disabled={disabled}
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
            disabled={disabled}
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
            label="Communication Basescore"
            name="communicationBasescore"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            disabled={disabled}
            value={formik.values.communicationBasescore}
            errors={
              formik.touched.communicationBasescore && formik.errors.communicationBasescore
                ? formik.errors.communicationBasescore
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
            disabled={disabled}
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
            variant="outlined"
            labelShink={true}
            label="Communication Score"
            name="communicationScore"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            disabled={disabled}
            value={formik.values.communicationScore}
            errors={
              formik.touched.communicationScore && formik.errors.communicationScore
                ? formik.errors.communicationScore
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
            disabled={disabled}
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
            label="Ownership Basescore"
            name="ownershipBasescore"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            disabled={disabled}
            value={formik.values.ownershipBasescore}
            errors={
              formik.touched.ownershipBasescore && formik.errors.ownershipBasescore
                ? formik.errors.ownershipBasescore
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
            disabled={disabled}
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
            labelShink={true}
            variant="outlined"
            label="Ownership Score "
            name="ownershipScore"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            disabled={disabled}
            value={formik.values.ownershipScore}
            errors={
              formik.touched.ownershipScore && formik.errors.ownershipScore
                ? formik.errors.ownershipScore
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
            disabled={disabled}
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
            label="Empathy Basescore"
            name="empathyBasescore"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            disabled={disabled}
            value={formik.values.empathyBasescore}
            errors={
              formik.touched.empathyBasescore && formik.errors.empathyBasescore
                ? formik.errors.empathyBasescore
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
            disabled={disabled}
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
            label="Empathy Score"
            name="empathyScore"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            disabled={disabled}
            value={formik.values.empathyScore}
            errors={
              formik.touched.empathyScore && formik.errors.empathyScore
                ? formik.errors.empathyScore
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
            disabled={disabled}
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
            label="Openness Basescore"
            name="opennessBasescore"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            disabled={disabled}
            value={formik.values.opennessBasescore}
            errors={
              formik.touched.opennessBasescore && formik.errors.opennessBasescore
                ? formik.errors.opennessBasescore
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
            disabled={disabled}
            value={formik.values.opennesspercent}
            errors={
              formik.touched.opennesspercent && formik.errors.opennesspercent
                ? formik.errors.opennesspercent
                : null
            }
          />
        </Grid>

        <Grid item xs={12} md={3}>
          <TextFieldGroup
            variant="outlined"
            labelShink={true}
            label="Openness Score"
            name="opennessScore"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            disabled={disabled}
            value={formik.values.opennessScore}
            errors={
              formik.touched.opennessScore && formik.errors.opennessScore
                ? formik.errors.opennessScore
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
            disabled={disabled}
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
            label="Plagiarism Basescore"
            name="plagiarismBasescore"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            disabled={disabled}
            value={formik.values.plagiarismBasescore}
            errors={
              formik.touched.plagiarismBasescore && formik.errors.plagiarismBasescore
                ? formik.errors.plagiarismBasescore
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
            disabled={disabled}
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
            label="Plagiarism Score"
            name="plagiarismScore"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            disabled={disabled}
            value={formik.values.plagiarismScore}
            errors={
              formik.touched.plagiarismScore && formik.errors.plagiarismScore
                ? formik.errors.plagiarismScore
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
            disabled={disabled}
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
            label="Trust Issues Basescore"
            name="trustissuesBasescore"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            disabled={disabled}
            value={formik.values.trustissuesBasescore}
            errors={
              formik.touched.trustissuesBasescore && formik.errors.trustissuesBasescore
                ? formik.errors.trustissuesBasescore
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
            disabled={disabled}
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
            label="Trust Issues Score"
            name="trustissuesScore"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            disabled={disabled}
            value={formik.values.trustissuesScore}
            errors={
              formik.touched.trustissuesScore && formik.errors.trustissuesScore
                ? formik.errors.trustissuesScore
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
            disabled={disabled}
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
            label="Fake Information Basescore"
            name="fakeinformationBasescore"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            disabled={disabled}
            value={formik.values.fakeinformationBasescore}
            errors={
              formik.touched.fakeinformationBasescore && formik.errors.fakeinformationBasescore
                ? formik.errors.fakeinformationBasescore
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
            disabled={disabled}
            value={formik.values.fakeinformationpercent}
            errors={
              formik.touched.fakeinformationpercent &&
              formik.errors.fakeinformationpercent
                ? formik.errors.fakeinformationpercent
                : null
            }
          />
        </Grid>
        
        <Grid item xs={12} md={3}>
          <TextFieldGroup
            variant="outlined"
            labelShink={true}
            label="Fake Information Score"
            name="fakeinformationScore"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            disabled={disabled}
            value={formik.values.fakeinformationScore}
            errors={
              formik.touched.fakeinformationScore && formik.errors.fakeinformationScore
                ? formik.errors.fakeinformationScore
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
            disabled={disabled}
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
              disabled={disabled}
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
              onClick={() => {
                setDisabled(false);
                handleReset();
              }}
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
