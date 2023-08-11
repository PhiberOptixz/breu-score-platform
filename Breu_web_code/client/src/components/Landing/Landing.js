import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import ReactPlayer from "react-player";
import Button from "@mui/material/Button";
import BreuButton from "../../common/button";
import { Typography } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
// import video from "../BREU TRAILER 720.mp4";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import { Link } from "react-router-dom";
import Header from "../../common/header";
import Footer from "../../common/Footer";
import { useNavigate } from "react-router-dom";

const Landing = () => {
  const [selectedValue, setSelectedValue] = React.useState("a");
  const [slectedUser, setSlectedUser] = React.useState("Candidate");
  const navigate = useNavigate();

  const theme = createTheme();

  const handleContinue = () => {
    if (slectedUser === "Candidate") {
      navigate("/sign-in");
    } else if (slectedUser === "Recruiter") {
      navigate("/recruiter-sign-in");
    } else {
      navigate("/corporate-sign-in");
    }
  };

  return (
    <div>
      <Header name="BREU.AI" page={true} />
      <Grid container>
        <Grid item xs={12} md={7}>
          <div className="player-wrapper LandingVideoGrid">
            {/* <video loop autoPlay style={{ width: "300px" }}>
              <source src={video} type="video/mp4" />
            </video> */}
            <ReactPlayer
              className="react-player"
              url="https://www.youtube.com/embed/y7k1QzcoXYI?rel=0&autoplay=1&mute=1"
              // controls
              // url={video}
              width="100%"
              height="100%"
              playing={true}
            />
          </div>
        </Grid>
        <Grid item xs={12} md={5}>
          <Card className="landinCard">
            <CardContent sx={{ padding: 0, margin: 0 }}>
              <p align="center" className="cardHeading">
                BREU
              </p>
              <p align="center" className="cardParagraph">
                Continue As A
              </p>

              <CardContent className="candidateCard">
                <Grid container>
                  <Grid item md={10} xs={10}>
                    <p className="candidateCardParagraph">Candidate</p>
                  </Grid>
                  <Grid item md={2} xs={2}>
                    <Radio
                      sx={{
                        paddingTop: "20%",
                        "&, &.Mui-checked": {
                          color: "#FFFFFF",
                        },
                      }}
                      className="candidateCardParagraph"
                      value="Candidate"
                      checked={slectedUser === "Candidate" ? true : false}
                      onClick={() => setSlectedUser("Candidate")}
                    />
                  </Grid>
                </Grid>
              </CardContent>

              <CardContent className="candidateCard">
                <Grid container>
                  <Grid item md={10} xs={10}>
                    <p className="candidateCardParagraph">Corporate</p>
                  </Grid>
                  <Grid item md={2} xs={2}>
                    <Radio
                      sx={{
                        paddingTop: "20%",
                        "&, &.Mui-checked": {
                          color: "#FFFFFF",
                        },
                      }}
                      className="candidateCardParagraph"
                      value="Corporate"
                      checked={slectedUser === "Corporate" ? true : false}
                      onClick={() => setSlectedUser("Corporate")}
                    />
                  </Grid>
                </Grid>
              </CardContent>

              <CardContent className="candidateCard">
                <Grid container>
                  <Grid item md={10} xs={10}>
                    <p className="candidateCardParagraph">Recruiter</p>
                  </Grid>
                  <Grid item md={2} xs={2}>
                    <Radio
                      sx={{
                        paddingTop: "20%",
                        "&, &.Mui-checked": {
                          color: "#FFFFFF",
                        },
                      }}
                      className="candidateCardParagraph"
                      value="Recruiter"
                      checked={slectedUser === "Recruiter" ? true : false}
                      onClick={() => setSlectedUser("Recruiter")}
                    />
                  </Grid>
                </Grid>
              </CardContent>

              <CardContent align="center">
                <Button
                  align="center"
                  type="button"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 2, mb: 1, width: "70%", height: "50px" }}
                  onClick={() => handleContinue()}
                >
                  {/* <Link
                    to="/sign-in"
                    style={{ textDecoration: "none", color: "#FFFFFF" }}
                  > */}
                  Continue
                  {/* </Link> */}
                </Button>
              </CardContent>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <Footer />
    </div>
  );
};

export default Landing;
