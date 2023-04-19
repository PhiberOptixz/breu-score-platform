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

  useEffect(() => {
    dispatch(getDomainData());
    dispatch(getEducationData());
    dispatch(getExperienceData());
    dispatch(getLanguageData());
    dispatch(getProficiencyData());
    dispatch(getRoleData());
  }, []);

  useEffect(() => {
    if (auth?.isAuthenticated) {
      if (auth?.user?.completedBelievability) {
        navigate("/reliability");
      }
    }
  }, [auth]);

  const formik = useFormik({
    initialValues: {
      selectRole: "",
      selectTotalExprience: "",
      overallExprience: "",
      selectProgrammingLanguage: "",
      selectProficiency: "",
      selectEducation: "",
      selectDomain: "",
    },
    validationSchema: Yup.object({
      selectRole: Yup.object()
        .nullable()
        .required("Select Role is reqired field"),
      selectTotalExprience: Yup.object()
        .nullable()
        .required("Select Total Exprience is reqired field"),
      overallExprience: Yup.object()
        .nullable()
        .required("Select Overall Exprience is reqired field"),
      selectProgrammingLanguage: Yup.object()
        .nullable()
        .required("Select Programming Language is reqired field"),
      selectProficiency: Yup.object()
        .nullable()
        .required("Select Proficiency is reqired field"),
      selectEducation: Yup.object()
        .nullable()
        .required("Select Education is reqired field"),
      selectDomain: Yup.object()
        .nullable()
        .required("Select Domain is reqired field"),
    }),
    onSubmit: async (values) => {
      const data = {
        _id: auth?.user?._id,
        jobRole: values?.selectRole?._id,
        currentJobExperience: values?.selectTotalExprience?._id,
        overallJobExperience: values?.overallExprience?._id,
        preferredProgrammingLanguage: values?.selectProgrammingLanguage?._id,
        proficiency: values?.selectProficiency?._id,
        highestEducation: values?.selectEducation?._id,
        domain: values?.selectDomain?._id,
        githubLink: values?.gitHub,
        stackOverFlowLink: values?.satckOverflow,
        kaggleLink: values?.kaggle,
        linkedInLink: values?.linkedIn,
      };
      const apiData = {
        data,
        navigate,
      };
      dispatch(addBelievabilityData(apiData));
    },
  });

  return (
    <>
      <Header />
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
              // onSelect={(programDuration) => console.log(programDuration)}
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
              placeholder="Total years of exprience"
              name="selectTotalExprience"
              sx={{
                marginLeft: "8%",
                width: "80%",
                marginTop: "1%",
                backgroundColor: "#FFF",
              }}
              className="believabilityBreuSelect"
              values={believability.experienceData}
              onSelect={(totalExprience) =>
                formik.setFieldValue("selectTotalExprience", totalExprience)
              }
              // onSelect={(programDuration) => console.log(programDuration)}
              selected={formik.values.selectTotalExprience}
              errors={
                formik.touched.selectTotalExprience &&
                formik.errors.selectTotalExprience
                  ? formik.errors.selectTotalExprience
                  : null
              }
            />

            <p style={{ marginLeft: "8%" }} className="selectPara">
              Overall Work Exprience
            </p>
            <BreuSelect
              align="center"
              placeholder="Total overall years of exprience"
              name="overallExprience"
              sx={{
                marginLeft: "8%",
                width: "80%",
                marginTop: "1%",
                backgroundColor: "#FFF",
              }}
              className="believabilityBreuSelect"
              values={believability.experienceData}
              onSelect={(overallExprience) =>
                formik.setFieldValue("overallExprience", overallExprience)
              }
              // onSelect={(programDuration) => console.log(programDuration)}
              selected={formik.values.overallExprience}
              errors={
                formik.touched.overallExprience &&
                formik.errors.overallExprience
                  ? formik.errors.overallExprience
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
                formik.setFieldValue(
                  "selectProgrammingLanguage",
                  programmingLanguage
                )
              }
              // onSelect={(programDuration) => console.log(programDuration)}
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
              values={believability.proficiencyData}
              onSelect={(selectProficiency) =>
                formik.setFieldValue("selectProficiency", selectProficiency)
              }
              // onSelect={(programDuration) => console.log(programDuration)}
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
              // onSelect={(programDuration) => console.log(programDuration)}
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
              // onSelect={(programDuration) => console.log(programDuration)}
              selected={formik.values.selectDomain}
              errors={
                formik.touched.selectDomain && formik.errors.selectDomain
                  ? formik.errors.selectDomain
                  : null
              }
            />
          </Grid>

          <Grid item xs={12} md={6} sx={{}}>
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
              onBlur={formik.handleBlur}
              value={formik.values.gitHub}
              errors={
                formik.touched.gitHub && formik.errors.gitHub
                  ? formik.errors.gitHub
                  : null
              }
            />

            <p style={{ marginLeft: "8%" }} className="selectPara">
              Satck Overflow
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
              </Grid>
              {/* <Grid item xs={6} md={6}>
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
                  // onClick={submitForm}
                />
              </Grid> */}
            </Grid>
          </Grid>
        </Grid>
      </form>
    </>
  );
};
export default Believability;
