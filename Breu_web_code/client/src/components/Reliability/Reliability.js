import React, { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import Header from "../../common/header";
import SingleChoiceQuestions from "../../common/SingleChoiceQuestions";
import { Typography } from "@mui/material";
import ButtonField from "../../common/button";

const Reliability = () => {
  return (
    <>
      <Header name="Reliability" />
      <Grid container className="believabilityContainer">
        <Grid
          item
          xs={12}
          md={12}
          style={{ marginTop: "100px" }}
          align={"center"}
        >
          <Typography>Please Select any one of these</Typography>
        </Grid>
        <Grid item xs={12} md={12}>
          <SingleChoiceQuestions />
        </Grid>
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
              // onClick={() => navigate("/reliability")}
            />
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};
export default Reliability;
