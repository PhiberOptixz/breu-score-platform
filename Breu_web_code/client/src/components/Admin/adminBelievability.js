import React, { Component, useEffect } from "react";

import Grid from "@mui/material/Grid";
import Header from "../../common/header";
import { fetchCandidateBData } from "../../features/adminSlice";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { Button, Typography } from "@mui/material";

const AdminBelievability = () => {
  const { adminSlice, adminAuthSlice } = useSelector((state) => state);
  const dispatch = useDispatch();
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (adminAuthSlice?.isAuthenticated) {
      dispatch(fetchCandidateBData(params.candidateId));
    }
  }, [adminAuthSlice?.isAuthenticated]);

  return (
    <>
      <Header name="Admin" caption={"Your Choice Matters"} />
      <Grid container className="believabilityContainer">
        <Grid xs={12} md={3}>
          <Typography variant="h6">
            Name: {adminSlice?.candidateBData?.firstName}
          </Typography>
        </Grid>{" "}
        <Grid xs={12} md={3}>
          <Typography variant="h6">
            Email: {adminSlice?.candidateBData?.email}
          </Typography>
        </Grid>{" "}
        <Grid xs={12} md={3}>
          <Typography variant="h6">
            Phone Number: {adminSlice?.candidateBData?.phoneNumber}
          </Typography>
        </Grid>
        <Grid xs={12} md={3}>
          <Button color={"error"} onClick={() => navigate("/adminDashboard")}>
            <Typography variant="h5"> Back</Typography>
          </Button>
        </Grid>
        <Grid item className="believabilityLeftGrid" sx={{}} xs={12} md={6}>
          <p style={{ marginLeft: "8%" }} className="selectPara">
            Role
          </p>
          <p style={{ marginLeft: "8%" }} className="selectedPara">
            {adminSlice?.candidateBData?.jobRole?.name}
          </p>

          <p style={{ marginLeft: "8%" }} className="selectPara">
            Current Working Experience (*Experience in selected role)
          </p>

          <p style={{ marginLeft: "8%" }} className="selectedPara">
            {adminSlice?.candidateBData?.currentJobExperience?.name}
          </p>

          <p style={{ marginLeft: "8%" }} className="selectPara">
            Overall Work Experience
          </p>
          <p style={{ marginLeft: "8%" }} className="selectedPara">
            {adminSlice?.candidateBData?.overallJobExperience?.name}
          </p>

          <p style={{ marginLeft: "8%" }} className="selectPara">
            Programming Language
          </p>

          <p style={{ marginLeft: "8%" }} className="selectedPara">
            {adminSlice?.candidateBData?.preferredProgrammingLanguage?.name}
          </p>

          <p style={{ marginLeft: "8%" }} className="selectPara">
            Proficiency
          </p>

          <p style={{ marginLeft: "8%" }} className="selectedPara">
            {adminSlice?.candidateBData?.proficiency?.name}
          </p>

          <p style={{ marginLeft: "8%" }} className="selectPara">
            Education
          </p>

          <p style={{ marginLeft: "8%" }} className="selectedPara">
            {adminSlice?.candidateBData?.highestEducation?.name}
          </p>

          <p style={{ marginLeft: "8%" }} className="selectPara">
            Domain
          </p>

          <p style={{ marginLeft: "8%" }} className="selectedPara">
            {adminSlice?.candidateBData?.domain?.name}
          </p>
        </Grid>
        <Grid item xs={12} md={6} sx={{}}>
          <p style={{ marginLeft: "8%" }} className="selectPara">
            Preferred Mode of Employment
          </p>

          <p style={{ marginLeft: "8%" }} className="selectedPara">
            {adminSlice?.candidateBData?.employmentMode?.name}
          </p>

          <h2 style={{ paddingLeft: "6%" }}>Others-Provide Links</h2>

          <p style={{ marginLeft: "8%" }} className="selectPara">
            LinkedIn
          </p>

          <a
            href={adminSlice?.candidateBData?.linkedInLink}
            target="_blank"
            style={{ marginLeft: "8%" }}
            className="selectedPara"
          >
            {adminSlice?.candidateBData?.linkedInLink || ""}
          </a>

          <p
            style={{ marginLeft: "8%", marginTop: "4%" }}
            className="selectPara"
          >
            GitHub
          </p>
          <a
            href={adminSlice?.candidateBData?.githubLink}
            target="_blank"
            style={{ marginLeft: "8%" }}
            className="selectedPara"
          >
            {adminSlice?.candidateBData?.githubLink || ""}
          </a>

          <p style={{ marginLeft: "8%" }} className="selectPara">
            Stack Overflow
          </p>

          <a
            href={adminSlice?.candidateBData?.stackOverFlowLink}
            target="_blank"
            style={{ marginLeft: "8%" }}
            className="selectedPara"
          >
            {adminSlice?.candidateBData?.stackOverFlowLink || ""}
          </a>

          <p style={{ marginLeft: "8%" }} className="selectPara">
            Kaggle
          </p>

          <a
            href={adminSlice?.candidateBData?.kaggleLink}
            target="_blank"
            style={{ marginLeft: "8%" }}
            className="selectedPara"
          >
            {adminSlice?.candidateBData?.kaggleLink || ""}
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
