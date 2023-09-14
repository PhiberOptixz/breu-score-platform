import * as React from "react";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import { createTheme } from "@mui/material/styles";
import { purple } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: {
      main: purple[500],
    },
    secondary: {
      main: "#f44336",
    },
  },
});

const BorderLinearProgress = styled(LinearProgress)(() => ({
  height: 10,
  borderTopLeftRadius: 5,
  borderBottomLeftRadius: 5,
  [`& .${linearProgressClasses.bar}`]: {
    backgroundColor: theme.palette.mode === "light" ? "#FF0032" : "green",
  },
}));

const BorderLinearProgress1 = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  [`& .${linearProgressClasses.bar}`]: {
    backgroundColor: theme.palette.mode === "light" ? "#FFA41B" : "green",
  },
}));

const BorderLinearProgress2 = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  [`& .${linearProgressClasses.bar}`]: {
    backgroundColor: theme.palette.mode === "light" ? "#FBDF07" : "green",
  },
}));

const BorderLinearProgress3 = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  [`& .${linearProgressClasses.bar}`]: {
    backgroundColor: theme.palette.mode === "light" ? "#77dd77" : "green",
  },
}));

const BorderLinearProgress4 = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderTopRightRadius: 5,
  borderBottomRightRadius: 5,
  [`& .${linearProgressClasses.bar}`]: {
    backgroundColor: theme.palette.mode === "light" ? "#539165" : "green",
  },
}));

const ProgressBar = ({ value }) => {
  return (
    <>
      <Grid container align="center">
        <Grid item xs={1} md={1}></Grid>
        <Grid item xs={2} md={2}>
          {value <= 2 ? (
            <>
              {value}
              <p>Weak</p>
              <div className="triContainer">
                <div className="revTriangle"></div>
              </div>
            </>
          ) : null}
        </Grid>
        <Grid item xs={2} md={2}>
          {value <= 2.5 && value > 2.0 ? (
            <>
              {value}
              <p style={{ fontWeight: "600" }}>Fair</p>
              <div className="triContainer">
                <div className="revTriangle"></div>
              </div>
            </>
          ) : null}
        </Grid>
        <Grid item xs={2} md={2}>
          {value <= 3.5 && value > 2.5 ? (
            <>
              {value}
              <p style={{ fontWeight: "600" }}>Good</p>
              <div className="triContainer">
                <div className="revTriangle"></div>
              </div>
            </>
          ) : null}
        </Grid>
        <Grid item xs={2} md={2}>
          {value <= 4.5 && value > 3.5 ? (
            <>
              {value}
              <p style={{ fontWeight: "600" }}>Great</p>
              <div className="triContainer">
                <div className="revTriangle"></div>
              </div>
            </>
          ) : null}
        </Grid>
        <Grid item xs={2} md={2}>
          {value <= 5 && value > 4.5 ? (
            <>
              {value}
              <p style={{ fontWeight: "600" }}>Excellent</p>
              <div className="triContainer">
                <div className="revTriangle"></div>
              </div>
            </>
          ) : null}
        </Grid>
        <Grid item xs={1} md={1}></Grid>
      </Grid>

      <Grid container style={{ paddingTop: "2%" }}>
        <Grid item xs={1} md={1}></Grid>
        <Grid item xs={2} md={2}>
          <BorderLinearProgress variant="determinate" value={100} />
        </Grid>
        <Grid item xs={2} md={2}>
          <BorderLinearProgress1 variant="determinate" value={100} />
        </Grid>
        <Grid item xs={2} md={2}>
          <BorderLinearProgress2 variant="determinate" value={100} />
        </Grid>
        <Grid item xs={2} md={2}>
          <BorderLinearProgress3 variant="determinate" value={100} />
        </Grid>
        <Grid item xs={2} md={2}>
          <BorderLinearProgress4 variant="determinate" value={100} />
        </Grid>
        <Grid item xs={1} md={1}></Grid>

        <Grid item xs={1} md={1}></Grid>
        <Grid item xs={2} md={2} align="center">
          <p>1</p>
        </Grid>
        <Grid item xs={2} md={2} align="center">
          <p>2</p>
        </Grid>
        <Grid item xs={2} md={2} align="center">
          <p>3</p>
        </Grid>
        <Grid item xs={2} md={2} align="center">
          <p>4</p>
        </Grid>
        <Grid item xs={2} md={2} align="center">
          <p>5</p>
        </Grid>
        <Grid item xs={1} md={1}></Grid>
      </Grid>
    </>
  );
};
export default ProgressBar;
