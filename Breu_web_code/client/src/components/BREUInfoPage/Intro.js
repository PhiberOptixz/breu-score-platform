import { useEffect, useState, useRef } from "react";
import Header from "../../common/header";
import ReactPlayer from "react-player";
import { Grid, Paper } from "@mui/material";
import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
import Stack from "@mui/material/Stack";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import ButtonField from "../../common/button";
import StepConnector, {
  stepConnectorClasses,
} from "@mui/material/StepConnector";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Intro = () => {
  const { auth } = useSelector((state) => state);
  const [video, setVideo] = useState("https://youtu.be/brrQ9L88OFo");
  const navigate = useNavigate();
  const [nodeNumber, setNodeNumber] = useState();
  const [preNodeNumber, setPreNodeNumber] = useState(-1);
  const [repeat, setRepeat] = useState(0);

  useEffect(() => {
    if (auth?.isAuthenticated) {
      if (auth?.user?.completedBelievability) {
        setRepeat(1);
        setNodeNumber(4);
      }
    }
  }, [auth]);

  const ColorlibConnector = styled(StepConnector)(({ theme }) => ({
    [`&.${stepConnectorClasses.alternativeLabel}`]: {
      top: 20,
    },
    [`&.${stepConnectorClasses.active}`]: {
      [`& .${stepConnectorClasses.line}`]: {
        backgroundImage:
          "linear-gradient( 95deg,rgb(33 207 242) 0%,rgb(82 64 233) 50%,rgb(26 220 227) 100%)",
      },
    },
    [`&.${stepConnectorClasses.completed}`]: {
      [`& .${stepConnectorClasses.line}`]: {
        backgroundImage:
          "linear-gradient( 95deg,rgb(33 207 242) 0%,rgb(82 64 233) 50%,rgb(26 220 227) 100%)",
      },
    },
    [`& .${stepConnectorClasses.line}`]: {
      height: 3,
      border: 0,
      backgroundColor:
        theme.palette.mode === "dark" ? theme.palette.grey[800] : "#eaeaf0",
      borderRadius: 1,
      marginTop: 4,
    },
  }));

  const ColorlibStepIconRoot = styled("div")(({ theme, ownerState }) => ({
    backgroundColor:
      theme.palette.mode === "dark" ? theme.palette.grey[700] : "#ccc",
    zIndex: 1,
    color: "#fff",
    width: 50,
    height: 50,
    display: "flex",
    borderRadius: "50%",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
    ...(ownerState.active && {
      backgroundImage:
        "linear-gradient( 136deg, rgb(56 88 209) 0%, rgb(120 171 236) 50%, rgb(158 179 244) 100%)",
      boxShadow: "0 4px 10px 0 rgba(0,0,0,.25)",
    }),
    ...(ownerState.completed && {
      backgroundImage:
        "linear-gradient( 136deg, rgb(56 88 209) 0%, rgb(120 171 236) 50%, rgb(158 179 244) 100%)",
    }),
  }));

  function ColorlibStepIcon(props) {
    const { active, completed, className } = props;

    const handleClick = (icon) => {
      switch (icon) {
        case 1:
          setVideo("https://youtu.be/brrQ9L88OFo");
          setNodeNumber(0);
          break;
        case 2:
          if (preNodeNumber === -1 || repeat === 1) {
            setVideo("https://youtu.be/jWRdd7FFGgY");
            setPreNodeNumber(0);
            setNodeNumber(1);
          }
          break;
        case 3:
          if (preNodeNumber === 0 || repeat === 1) {
            setVideo("https://youtu.be/IXAdpLx9-OI");
            setPreNodeNumber(1);
            setNodeNumber(2);
          }
          break;
        case 4:
          if (preNodeNumber === 1 || repeat === 1) {
            setVideo("https://youtu.be/epjzFs3IlEA");
            setPreNodeNumber(2);
            setNodeNumber(3);
          }
          break;
        case 5:
          if (preNodeNumber === 2 || repeat === 1) {
            setVideo("https://youtu.be/oJjNaZPW8iI");
            setPreNodeNumber(3);
            setNodeNumber(4);
            setRepeat(1);
          }
          break;
        default:
          break;
      }
    };

    const icons = {
      1: "B",
      2: "R",
      3: "E",
      4: "U",
      5: "S",
    };

    return (
      <ColorlibStepIconRoot
        ownerState={{ completed, active }}
        className={className}
        onClick={() => handleClick(props.icon)}
      >
        <h2>{icons[String(props.icon)]}</h2>
      </ColorlibStepIconRoot>
    );
  }

  ColorlibStepIcon.propTypes = {
    active: PropTypes.bool,
    className: PropTypes.string,
    completed: PropTypes.bool,
    icon: PropTypes.node,
  };

  const steps = [
    "Believablility",
    "Reliability",
    "Emotional Intelligibility",
    "Undesirability",
    "Score",
  ];

  return (
    <>
      <Header name="Sneak peak of BREU journey" />

      <Grid container>
        <Grid item xs={0} md={3}></Grid>
        <Grid item xs={12} md={6}>
          <div className="player-wrapper LandingVideoGrid">
            <ReactPlayer
              className="react-player"
              url={video}
              width="100%"
              height="100%"
              playing={true}
            />
          </div>
        </Grid>
        <Grid item xs={0} md={3}></Grid>

        <Grid item xs={12} md={11} sx={{ marginTop: "4%" }}>
          <Stepper
            alternativeLabel
            activeStep={nodeNumber}
            connector={<ColorlibConnector />}
          >
            {steps.map((label) => (
              <Step key={label} sx={{ cursor: "pointer" }}>
                <StepLabel StepIconComponent={ColorlibStepIcon} />
              </Step>
            ))}
          </Stepper>
        </Grid>

        <Grid item xs={12} md={1} sx={{ marginTop: "4.2%" }} align="center">
          {repeat === 1 ? (
            <ButtonField
              buttonStyle="submit"
              type="submit"
              name="Next"
              color="primary"
              variant="contained"
              sx={{
                width: "30%",
                backgroundColor: "#5a5a5c",
              }}
              onClick={() => navigate("/believability")}
            />
          ) : null}
        </Grid>
      </Grid>
    </>
  );
};

export default Intro;
