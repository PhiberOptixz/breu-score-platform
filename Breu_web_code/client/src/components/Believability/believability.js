import React, { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import BreuSelect from "../../common/selectSingleValue";
import Header from "../../common/header";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { styled } from "@mui/material/styles";
import TextFieldGroup from "../../common/TextFieldGroup";
import ButtonField from "../../common/button";
import { useDispatch, useSelector } from "react-redux";
import {
  getDomainData,
  getEducationData,
  getExperienceData,
  getLanguageData,
  getProficiencyData,
  getRoleData,
} from "../../features/believabilitySlice";

const theme = createTheme();

const Responsive = styled("BreuSelect")(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    marginLeft: "0%",
    width: "15%",
  },
}));

const Believability = () => {
  const dispatch = useDispatch();
  const { believability } = useSelector((state) => state);

  useEffect(() => {
    dispatch(getDomainData());
    dispatch(getEducationData());
    dispatch(getExperienceData());
    dispatch(getLanguageData());
    dispatch(getProficiencyData());
    dispatch(getRoleData());
  }, []);

  return (
    <>
      <Header />
      <Grid container className="believabilityContainer">
        <Grid item className="believabilityLeftGrid" sx={{}} xs={12} md={6}>
          <p style={{ marginLeft: "8%" }} className="selectPara">
            Role
          </p>
          <BreuSelect
            align="center"
            label="Choose your current role"
            name="selectBatch"
            sx={{
              marginLeft: "8%",
              width: "80%",
              marginTop: "1%",
              backgroundColor: "#FFF",
            }}
            className="believabilityBreuSelect"
            values={believability.roleData}
            onSelect={() => console.log("df")}
          />

          <p style={{ marginLeft: "8%" }} className="selectPara">
            Current Working Experience (*Experience in selected role)
          </p>
          <BreuSelect
            align="center"
            label="Total years of exprience"
            name="selectBatch"
            sx={{
              marginLeft: "8%",
              width: "80%",
              marginTop: "1%",
              backgroundColor: "#FFF",
            }}
            className="believabilityBreuSelect"
            values={believability.experienceData}
          />

          <p style={{ marginLeft: "8%" }} className="selectPara">
            Overall Work Exprience
          </p>
          <BreuSelect
            align="center"
            label="Total overall years of exprience"
            name="selectBatch"
            sx={{
              marginLeft: "8%",
              width: "80%",
              marginTop: "1%",
              backgroundColor: "#FFF",
            }}
            className="believabilityBreuSelect"
            values={believability.experienceData}
          />

          <p style={{ marginLeft: "8%" }} className="selectPara">
            Programming Language
          </p>
          <BreuSelect
            align="center"
            label="Most preferable programming lang."
            name="selectBatch"
            sx={{
              marginLeft: "8%",
              width: "80%",
              marginTop: "1%",
              backgroundColor: "#FFF",
            }}
            className="believabilityBreuSelect"
            values={believability.languageData}
          />

          <p style={{ marginLeft: "8%" }} className="selectPara">
            Proficiency
          </p>
          <BreuSelect
            align="center"
            label="Framework Proficiency"
            name="selectBatch"
            sx={{
              marginLeft: "8%",
              width: "80%",
              marginTop: "1%",
              backgroundColor: "#FFF",
            }}
            className="believabilityBreuSelect"
            values={believability.proficiencyData}
          />

          <p style={{ marginLeft: "8%" }} className="selectPara">
            Education
          </p>
          <BreuSelect
            align="center"
            label="Choose your education"
            name="selectBatch"
            sx={{
              marginLeft: "8%",
              width: "80%",
              marginTop: "1%",
              backgroundColor: "#FFF",
            }}
            className="believabilityBreuSelect"
            values={believability.educationData}
          />

          <p style={{ marginLeft: "8%" }} className="selectPara">
            Domain
          </p>
          <BreuSelect
            align="center"
            label="Choose your strongest Domain"
            name="selectBatch"
            sx={{
              marginLeft: "8%",
              width: "80%",
              marginTop: "1%",
              backgroundColor: "#FFF",
            }}
            className="believabilityBreuSelect"
            values={believability.domainData}
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
          />

          <p style={{ marginLeft: "8%" }} className="selectPara">
            Satck Overflow
          </p>

          <TextFieldGroup
            placeholder="https://www.stackoverflow.com"
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
          />

          <p style={{ marginLeft: "8%" }} className="selectPara">
            Kaggle
          </p>

          <TextFieldGroup
            placeholder="https://www.kaggle.com"
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
            <Grid item xs={6} md={6}>
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
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};
export default Believability;
