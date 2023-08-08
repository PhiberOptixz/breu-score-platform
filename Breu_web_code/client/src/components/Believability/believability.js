import React, { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import BreuSelect from "../../common/selectSingleValue";
import Header from "../../common/header";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { styled } from "@mui/material/styles";
import TextFieldGroup from "../../common/TextFieldGroup";
import { useFormik } from "formik";
import * as Yup from "yup";
import ButtonField from "../../common/button";
import { useDispatch, useSelector } from "react-redux";
import {
  getDomainData,
  getEducationData,
  getExperienceData,
  getLanguageData,
  getProficiencyData,
  getRoleData,
  addBelievabilityData,
  getAllOverallExperiences,
  getAllEmploymentModes,
} from "../../features/believabilitySlice";
import { useNavigate } from "react-router-dom";

const theme = createTheme();

const Responsive = styled("BreuSelect")(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    marginLeft: "0%",
    width: "15%",
  },
}));

const Believability = () => {
  const dispatch = useDispatch();
  const { believability, auth } = useSelector((state) => state);
  const navigate = useNavigate();
  const [overallExperienceData, setOverallExperienceData] = useState([]);
  const [proficiencyData, setProficiencyData] = useState([]);

  const formik = useFormik({
    initialValues: {
      selectRole: "",
      selectTotalExperience: "",
      overallExperience: "",
      selectProgrammingLanguage: "",
      selectProficiency: "",
      selectEducation: "",
      selectDomain: "",
      selectEmploymentMode: "",
      linkedIn: "",
      kaggle: "",
      gitHub: "",
      satckOverflow: "",
    },
    validationSchema: Yup.object({
      selectRole: Yup.object().nullable().required("Role is reqired field"),
      selectTotalExperience: Yup.object()
        .nullable()
        .required("Total Experience is reqired field"),
      overallExperience: Yup.object()
        .nullable()
        .required("Overall Experience is reqired field"),
      selectProgrammingLanguage: Yup.object()
        .nullable()
        .required("Programming Language is reqired field"),
      selectEmploymentMode: Yup.object()
        .nullable()
        .required("Preferred employment mode is reqired field"),
      selectProficiency: Yup.object()
        .nullable()
        .required("Proficiency is reqired field"),
      selectEducation: Yup.object()
        .nullable()
        .required("Education is reqired field"),
      selectDomain: Yup.object().nullable().required("Domain is reqired field"),
      linkedIn: Yup.string().url("Please enter valid url"),
      kaggle: Yup.string().url("Please enter valid url"),
      gitHub: Yup.string().url("Please enter valid url"),
      satckOverflow: Yup.string().url("Please enter valid url"),
    }),
    onSubmit: async (values) => {
      const data = {
        _id: auth?.user?._id,
        jobRole: values?.selectRole?._id,
        currentJobExperience: values?.selectTotalExperience?._id,
        overallJobExperience: values?.overallExperience?._id,
        preferredProgrammingLanguage: values?.selectProgrammingLanguage?._id,
        proficiency: values?.selectProficiency?._id,
        highestEducation: values?.selectEducation?._id,
        domain: values?.selectDomain?._id,
        employmentMode: values?.selectEmploymentMode?._id,
        githubLink: values?.gitHub,
        stackOverFlowLink: values?.satckOverflow,
        kaggleLink: values?.kaggle,
        linkedInLink: values?.linkedIn,
      };
      const apiData = {
        data,
        navigate,
      };
      // console.log(apiData);
      dispatch(addBelievabilityData(apiData));
    },
  });

  useEffect(() => {
    dispatch(getDomainData());
    dispatch(getEducationData());
    dispatch(getExperienceData());
    dispatch(getLanguageData());
    dispatch(getProficiencyData());
    dispatch(getRoleData());
    dispatch(getAllOverallExperiences());
    dispatch(getAllEmploymentModes());
    document.title = "Breu.ai - Believability";
  }, []);

  useEffect(() => {
    if (auth?.isAuthenticated) {
      if (auth?.user?.completedBelievability) {
        formik.setFieldValue("selectRole", auth?.user?.jobRole);
        formik.setFieldValue(
          "selectTotalExperience",
          auth?.user?.currentJobExperience
        );
        formik.setFieldValue(
          "overallExperience",
          auth?.user?.overallJobExperience
        );
        formik.setFieldValue(
          "selectProgrammingLanguage",
          auth?.user?.preferredProgrammingLanguage
        );
        formik.setFieldValue("selectProficiency", auth?.user?.proficiency);
        formik.setFieldValue("selectEducation", auth?.user?.highestEducation);
        formik.setFieldValue("selectDomain", auth?.user?.domain);
        formik.setFieldValue(
          "selectEmploymentMode",
          auth?.user?.employmentMode
        );
        formik.setFieldValue("linkedIn", auth?.user?.linkedInLink || "");
        formik.setFieldValue("gitHub", auth?.user?.githubLink || "");
        formik.setFieldValue(
          "satckOverflow",
          auth?.user?.stackOverFlowLink || ""
        );
        formik.setFieldValue("kaggle", auth?.user?.kaggleLink || "");
      }
    }
  }, [auth]);

  useEffect(() => {
    if (believability.overallExperienceData) {
      setOverallExperienceData(believability.overallExperienceData);
    }
    if (believability.proficiencyData) {
      setProficiencyData(believability.proficiencyData);
    }
  }, [believability.overallExperienceData]);

  useEffect(() => {
    console.log(formik.errors, formik.touched);
  }, [formik.errors, formik.touched]);

  // const filterExperienceData = (data) => {
  //   formik.setFieldValue("selectTotalExperience", data);
  //   const filteredData = believability?.overallExperienceData?.filter(
  //     (item) => item.order === data.order
  //   );
  //   setOverallExperienceData(filteredData);
  // };

  const filterProficiencyData = (data) => {
    formik.setFieldValue("selectProgrammingLanguage", data);
    const filteredData = believability.proficiencyData?.filter(
      (item) => item.language === data.name || item.language === "Others"
    );
    setProficiencyData(filteredData);
  };

  return (
    <>
      <Header name="Believability" caption="Help us to know you better" />
      <form onSubmit={formik.handleSubmit} noValidate autoComplete="off">
        <Grid container className="believabilityContainer">
          <Grid item className="believabilityLeftGrid" sx={{}} xs={12} md={6}>
            <p style={{ marginLeft: "8%" }} className="selectPara">
              Role
            </p>
            <BreuSelect
              align="center"
              placeholder="Choose your current role"
              name="selectRole"
              sx={{
                marginLeft: "8%",
                width: "80%",
                marginTop: "1%",
                backgroundColor: "#FFF",
              }}
              className="believabilityBreuSelect"
              values={believability.roleData}
              onSelect={(role) => formik.setFieldValue("selectRole", role)}
              disabled={auth?.user?.completedBelievability}
              selected={formik.values.selectRole}
              errors={
                formik.touched.selectRole && formik.errors.selectRole
                  ? formik.errors.selectRole
                  : null
              }
            />

            <p style={{ marginLeft: "8%" }} className="selectPara">
              Current Working Experience (*Experience in selected role)
            </p>
            <BreuSelect
              align="center"
              placeholder="Current Working Experience"
              name="selectTotalExperience"
              sx={{
                marginLeft: "8%",
                width: "80%",
                marginTop: "1%",
                backgroundColor: "#FFF",
              }}
              className="believabilityBreuSelect"
              values={believability.experienceData}
              onSelect={
                (totalExperience) =>
                  formik.setFieldValue("selectTotalExperience", totalExperience)
                // filterExperienceData(totalExperience)
              }
              disabled={auth?.user?.completedBelievability}
              selected={formik.values.selectTotalExperience}
              errors={
                formik.touched.selectTotalExperience &&
                formik.errors.selectTotalExperience
                  ? formik.errors.selectTotalExperience
                  : null
              }
            />

            <p style={{ marginLeft: "8%" }} className="selectPara">
              Overall Work Experience
            </p>
            <BreuSelect
              align="center"
              placeholder="Total overall years of Experience"
              name="overallExperience"
              sx={{
                marginLeft: "8%",
                width: "80%",
                marginTop: "1%",
                backgroundColor: "#FFF",
              }}
              className="believabilityBreuSelect"
              values={overallExperienceData}
              onSelect={(overallExperience) =>
                formik.setFieldValue("overallExperience", overallExperience)
              }
              disabled={auth?.user?.completedBelievability}
              // onSelect={(programDuration) => console.log(programDuration)}
              selected={formik.values.overallExperience}
              errors={
                formik.touched.overallExperience &&
                formik.errors.overallExperience
                  ? formik.errors.overallExperience
                  : null
              }
            />

            <p style={{ marginLeft: "8%" }} className="selectPara">
              Programming Language
            </p>
            <BreuSelect
              align="center"
              placeholder="Most preferable programming lang."
              name="selectProgrammingLanguage"
              sx={{
                marginLeft: "8%",
                width: "80%",
                marginTop: "1%",
                backgroundColor: "#FFF",
              }}
              className="believabilityBreuSelect"
              values={believability.languageData}
              onSelect={(programmingLanguage) =>
                filterProficiencyData(programmingLanguage)
              }
              disabled={auth?.user?.completedBelievability}
              selected={formik.values.selectProgrammingLanguage}
              errors={
                formik.touched.selectProgrammingLanguage &&
                formik.errors.selectProgrammingLanguage
                  ? formik.errors.selectProgrammingLanguage
                  : null
              }
            />

            <p style={{ marginLeft: "8%" }} className="selectPara">
              Proficiency
            </p>
            <BreuSelect
              align="center"
              placeholder="Framework Proficiency"
              name="selectProficiency"
              sx={{
                marginLeft: "8%",
                width: "80%",
                marginTop: "1%",
                backgroundColor: "#FFF",
              }}
              className="believabilityBreuSelect"
              values={proficiencyData}
              onSelect={(selectProficiency) =>
                formik.setFieldValue("selectProficiency", selectProficiency)
              }
              disabled={auth?.user?.completedBelievability}
              selected={formik.values.selectProficiency}
              errors={
                formik.touched.selectProficiency &&
                formik.errors.selectProficiency
                  ? formik.errors.selectProficiency
                  : null
              }
            />

            <p style={{ marginLeft: "8%" }} className="selectPara">
              Education
            </p>
            <BreuSelect
              align="center"
              placeholder="Choose your education"
              name="selectEducation"
              sx={{
                marginLeft: "8%",
                width: "80%",
                marginTop: "1%",
                backgroundColor: "#FFF",
              }}
              className="believabilityBreuSelect"
              values={believability.educationData}
              onSelect={(selectEducation) =>
                formik.setFieldValue("selectEducation", selectEducation)
              }
              disabled={auth?.user?.completedBelievability}
              selected={formik.values.selectEducation}
              errors={
                formik.touched.selectEducation && formik.errors.selectEducation
                  ? formik.errors.selectEducation
                  : null
              }
            />

            <p style={{ marginLeft: "8%" }} className="selectPara">
              Domain
            </p>
            <BreuSelect
              align="center"
              placeholder="Choose your strongest Domain"
              name="selectDomain"
              sx={{
                marginLeft: "8%",
                width: "80%",
                marginTop: "1%",
                backgroundColor: "#FFF",
              }}
              className="believabilityBreuSelect"
              values={believability.domainData}
              onSelect={(selectDomain) =>
                formik.setFieldValue("selectDomain", selectDomain)
              }
              disabled={auth?.user?.completedBelievability}
              selected={formik.values.selectDomain}
              errors={
                formik.touched.selectDomain && formik.errors.selectDomain
                  ? formik.errors.selectDomain
                  : null
              }
            />
          </Grid>

          <Grid item xs={12} md={6} sx={{}}>
            <p style={{ marginLeft: "8%" }} className="selectPara">
              Preferred Mode of Employment
            </p>
            <BreuSelect
              align="center"
              placeholder="Choose your Preferred Mode"
              name="selectEmploymentMode"
              sx={{
                marginLeft: "8%",
                width: "80%",
                marginTop: "1%",
                backgroundColor: "#FFF",
              }}
              className="believabilityBreuSelect"
              values={believability.employmentModes}
              onSelect={(selectEmploymentMode) =>
                formik.setFieldValue(
                  "selectEmploymentMode",
                  selectEmploymentMode
                )
              }
              disabled={auth?.user?.completedBelievability}
              selected={formik.values.selectEmploymentMode}
              errors={
                formik.touched.selectEmploymentMode &&
                formik.errors.selectEmploymentMode
                  ? formik.errors.selectEmploymentMode
                  : null
              }
            />
            <h2 style={{ paddingLeft: "6%" }}>Others-Provide Links</h2>

            <p style={{ marginLeft: "8%" }} className="selectPara">
              LinkedIn
            </p>

            <TextFieldGroup
              placeholder="https://www.linkedin.com"
              type="text"
              name="linkedIn"
              sx={{
                marginLeft: "8%",
                width: "80%",
                marginTop: "1%",
                backgroundColor: "#FFF",
              }}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.linkedIn}
              disabled={auth?.user?.completedBelievability}
              errors={
                formik.touched.linkedIn && formik.errors.linkedIn
                  ? formik.errors.linkedIn
                  : null
              }
            />

            <p
              style={{ marginLeft: "8%", marginTop: "4%" }}
              className="selectPara"
            >
              GitHub
            </p>

            <TextFieldGroup
              placeholder="https://www.github.com"
              type="text"
              name="gitHub"
              sx={{
                marginLeft: "8%",
                width: "80%",
                marginTop: "1%",
                backgroundColor: "#FFF",
              }}
              onChange={formik.handleChange}
              disabled={auth?.user?.completedBelievability}
              onBlur={formik.handleBlur}
              value={formik.values.gitHub}
              errors={
                formik.touched.gitHub && formik.errors.gitHub
                  ? formik.errors.gitHub
                  : null
              }
            />

            <p style={{ marginLeft: "8%" }} className="selectPara">
              Stack Overflow
            </p>

            <TextFieldGroup
              placeholder="https://www.stackoverflow.com"
              type="text"
              name="satckOverflow"
              sx={{
                marginLeft: "8%",
                width: "80%",
                marginTop: "1%",
                backgroundColor: "#FFF",
              }}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.satckOverflow}
              disabled={auth?.user?.completedBelievability}
              errors={
                formik.touched.satckOverflow && formik.errors.satckOverflow
                  ? formik.errors.satckOverflow
                  : null
              }
            />

            <p style={{ marginLeft: "8%" }} className="selectPara">
              Kaggle
            </p>

            <TextFieldGroup
              placeholder="https://www.kaggle.com"
              type="text"
              name="kaggle"
              sx={{
                marginLeft: "8%",
                width: "80%",
                marginTop: "1%",
                backgroundColor: "#FFF",
              }}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.kaggle}
              disabled={auth?.user?.completedBelievability}
              errors={
                formik.touched.kaggle && formik.errors.kaggle
                  ? formik.errors.kaggle
                  : null
              }
            />

            {/* <p style={{ marginLeft: "8%" }} className="selectPara">
            Patents
          </p>

          <TextFieldGroup
            placeholder="https://www.patents.com"
            type="text"
            name="firstName"
            sx={{
              marginLeft: "8%",
              width: "80%",
              marginTop: "1%",
              backgroundColor: "#FFF",
            }}
            // onChange={formik.handleChange}
            // onBlur={formik.handleBlur}
            // value={formik.values.firstName}
            // errors={
            //   formik.touched.firstName && formik.errors.firstName
            //     ? formik.errors.firstName
            //     : null
            // }
          /> */}
            <Grid container sx={{ marginTop: "4%" }}>
              <Grid item xs={6} md={6} align="center">
                {!auth?.user?.completedBelievability ? (
                  <ButtonField
                    buttonStyle="submit"
                    type="submit"
                    name="submit"
                    color="primary"
                    variant="contained"
                    sx={{
                      width: "60%",
                      backgroundColor: "#0a71b9",
                    }}
                  />
                ) : null}
              </Grid>
              <Grid item xs={6} md={6}>
                {auth?.user?.completedBelievability ? (
                  <ButtonField
                    buttonStyle="submit"
                    type="submit"
                    name="Next"
                    color="primary"
                    variant="contained"
                    sx={{
                      width: "60%",
                      backgroundColor: "#5a5a5c",
                    }}
                    onClick={() => navigate("/reliability")}
                  />
                ) : null}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </form>
    </>
  );
};
export default Believability;
