import React, { Component } from "react";

import Grid from "@mui/material/Grid";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { styled } from "@mui/material/styles";
import { useDispatch, useSelector } from "react-redux";

const AdminBelievability = () => {
  return (
    <>
      <Grid container className="believabilityContainer">
        <Grid item className="believabilityLeftGrid" sx={{}} xs={12} md={6}>
          <p style={{ marginLeft: "8%" }} className="selectPara">
            Role
          </p>
          <p style={{ marginLeft: "8%" }} className="selectedPara">
            Vishwas
          </p>

          <p style={{ marginLeft: "8%" }} className="selectPara">
            Current Working Experience (*Experience in selected role)
          </p>

          <p style={{ marginLeft: "8%" }} className="selectedPara">
            Vishwas
          </p>

          <p style={{ marginLeft: "8%" }} className="selectPara">
            Overall Work Experience
          </p>
          <p style={{ marginLeft: "8%" }} className="selectedPara">
            Vishwas
          </p>

          <p style={{ marginLeft: "8%" }} className="selectPara">
            Programming Language
          </p>

          <p style={{ marginLeft: "8%" }} className="selectedPara">
            Vishwas
          </p>

          <p style={{ marginLeft: "8%" }} className="selectPara">
            Proficiency
          </p>

          <p style={{ marginLeft: "8%" }} className="selectedPara">
            Vishwas
          </p>

          <p style={{ marginLeft: "8%" }} className="selectPara">
            Education
          </p>

          <p style={{ marginLeft: "8%" }} className="selectedPara">
            Vishwas
          </p>

          <p style={{ marginLeft: "8%" }} className="selectPara">
            Domain
          </p>

          <p style={{ marginLeft: "8%" }} className="selectedPara">
            Vishwas
          </p>
        </Grid>

        <Grid item xs={12} md={6} sx={{}}>
          <p style={{ marginLeft: "8%" }} className="selectPara">
            Preferred Mode of Employment
          </p>

          <p style={{ marginLeft: "8%" }} className="selectedPara">
            Vishwas
          </p>

          <h2 style={{ paddingLeft: "6%" }}>Others-Provide Links</h2>

          <p style={{ marginLeft: "8%" }} className="selectPara">
            LinkedIn
          </p>

          <a
            href="https://www.w3schools.com"
            target="_blank"
            style={{ marginLeft: "8%" }}
            className="selectedPara"
          >
            Vishwas
          </a>

          <p
            style={{ marginLeft: "8%", marginTop: "4%" }}
            className="selectPara"
          >
            GitHub
          </p>
          <a
            href="https://www.w3schools.com"
            target="_blank"
            style={{ marginLeft: "8%" }}
            className="selectedPara"
          >
            Vishwas
          </a>

          <p style={{ marginLeft: "8%" }} className="selectPara">
            Stack Overflow
          </p>

          <a
            href="https://www.w3schools.com"
            target="_blank"
            style={{ marginLeft: "8%" }}
            className="selectedPara"
          >
            Vishwas
          </a>

          <p style={{ marginLeft: "8%" }} className="selectPara">
            Kaggle
          </p>

          <a
            href="https://www.w3schools.com"
            target="_blank"
            style={{ marginLeft: "8%" }}
            className="selectedPara"
          >
            Vishwas
          </a>

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
        </Grid>
      </Grid>
    </>
  );
};

export default AdminBelievability;
