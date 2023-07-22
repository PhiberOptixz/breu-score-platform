import React, { Component, useEffect, useState } from "react";
import { Grid, Card, Typography, Button } from "@mui/material";
import ProgressBar from "../../common/ProgressBar";
import BelievabilityScore from "../Score/BeliveabilityScore";
import ReliabilityScore from "../Score/ReliabilityScore";
import EiScore from "../Score/EiScore";
import Undesireability from "../Score/Undesireability";
import { fetchCandidateScores } from "../../features/candidateSlice";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import Header from "../../common/header";

const ResultScreen = () => {
  const { candidateSlice } = useSelector((state) => state);
  const location = useLocation();
  const params = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [comp, setComp] = useState(
    <BelievabilityScore
      scoreData={candidateSlice?.candidateScore?.believabilityScores}
    />
  );
  const [tableName, setTableName] = useState("Believability Score");
  console.log(location.pathname);

  useEffect(() => {
    if (location?.pathname !== "/breuscore") {
      dispatch(fetchCandidateScores(params?.candidateId));
    }
  }, []);

  useEffect(() => {
    if (candidateSlice?.candidateScore) {
      setComp(
        <BelievabilityScore
          scoreData={candidateSlice?.candidateScore?.believabilityScores}
        />
      );
    }
  }, [candidateSlice?.candidateScore]);

  return (
    <>
      {" "}
      {location?.pathname === "/breuscore" ? null : (
        <Header
          name="BREU Score"
          caption={"Exploring your Emotional dimension"}
        />
      )}
      <Grid container style={{ marginTop: "2%" }}>
        {candidateSlice?.candidateScore ? (
          <>
            <Grid
              item
              xs={12}
              md={6}
              align="left"
              style={{ paddingLeft: "10%" }}
            >
              <p className="scoresText" align="left">
                Scores
              </p>
              <ProgressBar value={candidateSlice?.candidateScore?.mainScore} />
            </Grid>
            {/* <Grid item xs={12} md={6}></Grid> */}
            <Grid
              item
              xs={12}
              md={6}
              style={{ padding: "2%", paddingTop: "0%" }}
            >
              <p
                className="scoresText"
                align="left"
                style={{ paddingLeft: "0%" }}
              >
                Score Breakdown{" "}
                {location?.pathname !== "/breuscore" ? (
                  <Button
                    variant="outlined"
                    color="error"
                    sx={{ marginLeft: "40px", width: 100 }}
                    onClick={() => navigate(-1)}
                  >
                    Back
                  </Button>
                ) : null}
              </p>
              <Grid container spacing={2}>
                {/* <Grid item xs={false} md={1}></Grid> */}
                <Grid item xs={4} md={3}>
                  <Card
                    className="scoreBreakdownCard"
                    style={{ borderColor: "red" }}
                    onClick={() => {
                      // setColumns(believeabilityColumns);
                      // setRows(believeabilityRows);
                      setComp(
                        <BelievabilityScore
                          scoreData={
                            candidateSlice?.candidateScore?.believabilityScores
                          }
                        />
                      );
                      setTableName("Believability Score");
                    }}
                  >
                    <p
                      className="scoreBreakdownCardP1"
                      style={{ color: "red" }}
                    >
                      {(
                        (parseInt(
                          candidateSlice?.candidateScore?.believabilityScores
                            ?.qualification?.score
                        ) +
                          parseInt(
                            candidateSlice?.candidateScore?.believabilityScores
                              ?.professionalExperience?.score
                          ) +
                          parseInt(
                            candidateSlice?.candidateScore?.believabilityScores
                              ?.socialScore?.score || 1
                          ) +
                          parseInt(
                            candidateSlice?.candidateScore?.believabilityScores
                              ?.patents?.score
                          ) +
                          parseInt(
                            candidateSlice?.candidateScore?.believabilityScores
                              ?.whitepaperConferencePresentation?.score
                          ) +
                          parseInt(
                            candidateSlice?.candidateScore?.believabilityScores
                              ?.blog?.score
                          )) /
                        6
                      ).toFixed(1)}
                    </p>
                    <p className="scoreBreakdownCardP2">Believeability</p>
                  </Card>
                </Grid>

                <Grid item xs={4} md={3}>
                  <Card
                    className="scoreBreakdownCard"
                    style={{ borderColor: "orange" }}
                    onClick={() => {
                      // setColumns(believeabilityColumns);
                      // setRows(believeabilityRows);
                      setComp(
                        <ReliabilityScore
                          scoreData={
                            candidateSlice?.candidateScore?.reliabilityScores
                          }
                        />
                      );
                      setTableName("Reliability Score");
                    }}
                  >
                    <p
                      className="scoreBreakdownCardP1"
                      style={{ color: "orange" }}
                    >
                      {(
                        (parseInt(
                          candidateSlice?.candidateScore?.reliabilityScores
                            ?.design?.score
                        ) +
                          parseInt(
                            candidateSlice?.candidateScore?.reliabilityScores
                              ?.framework?.score
                          ) +
                          parseInt(
                            candidateSlice?.candidateScore?.reliabilityScores
                              ?.coding?.score
                          ) +
                          parseInt(
                            candidateSlice?.candidateScore?.reliabilityScores
                              ?.debugging?.score
                          ) +
                          parseInt(
                            candidateSlice?.candidateScore?.reliabilityScores
                              ?.architecture?.score
                          ) +
                          parseInt(
                            candidateSlice?.candidateScore?.reliabilityScores
                              ?.implementation?.score
                          )) /
                        6
                      ).toFixed(1)}
                    </p>
                    <p className="scoreBreakdownCardP2">Reliability</p>
                  </Card>
                </Grid>

                <Grid item xs={4} md={3}>
                  <Card
                    className="scoreBreakdownCard"
                    style={{ borderColor: "yellow" }}
                    onClick={() => {
                      // setColumns(believeabilityColumns);
                      // setRows(believeabilityRows);
                      setComp(
                        <EiScore
                          scoreData={
                            candidateSlice?.candidateScore
                              ?.emotionalIntelligencyScores
                          }
                        />
                      );
                      setTableName("EI Score");
                    }}
                  >
                    <p
                      className="scoreBreakdownCardP1"
                      style={{ color: "yellow" }}
                    >
                      {(
                        (parseInt(
                          candidateSlice?.candidateScore
                            ?.emotionalIntelligencyScores?.teamWork?.score
                        ) +
                          parseInt(
                            candidateSlice?.candidateScore
                              ?.emotionalIntelligencyScores?.complexityHandling
                              ?.score
                          ) +
                          parseInt(
                            candidateSlice?.candidateScore
                              ?.emotionalIntelligencyScores?.conflictResolution
                              ?.score || 1
                          ) +
                          parseInt(
                            candidateSlice?.candidateScore
                              ?.emotionalIntelligencyScores?.initiative?.score
                          ) +
                          parseInt(
                            candidateSlice?.candidateScore
                              ?.emotionalIntelligencyScores
                              ?.culturalFitPresentation?.score
                          ) +
                          parseInt(
                            candidateSlice?.candidateScore
                              ?.emotionalIntelligencyScores?.communication
                              ?.score
                          ) +
                          parseInt(
                            candidateSlice?.candidateScore
                              ?.emotionalIntelligencyScores?.ownership?.score
                          ) +
                          parseInt(
                            candidateSlice?.candidateScore
                              ?.emotionalIntelligencyScores?.empathy?.score
                          ) +
                          parseInt(
                            candidateSlice?.candidateScore
                              ?.emotionalIntelligencyScores?.openness?.score
                          )) /
                        9
                      ).toFixed(1)}
                    </p>
                    <p className="scoreBreakdownCardP2">EI</p>
                  </Card>
                </Grid>

                <Grid item xs={4} md={3}>
                  <Card
                    className="scoreBreakdownCard"
                    style={{ borderColor: "#4CBB17" }}
                    onClick={() => {
                      // setColumns(believeabilityColumns);
                      // setRows(believeabilityRows);
                      setComp(
                        <Undesireability
                          scoreData={
                            candidateSlice?.candidateScore?.undesirableScores
                          }
                        />
                      );
                      setTableName("Undesireability Score");
                    }}
                  >
                    <p
                      className="scoreBreakdownCardP1"
                      style={{ color: "#4CBB17" }}
                    >
                      {(
                        (parseInt(
                          candidateSlice?.candidateScore?.undesirableScores
                            ?.fakeInformation?.score
                        ) +
                          parseInt(
                            candidateSlice?.candidateScore?.undesirableScores
                              ?.plagiarism?.score
                          ) +
                          parseInt(
                            candidateSlice?.candidateScore?.undesirableScores
                              ?.trustIssues?.score
                          )) /
                        3
                      ).toFixed(1)}
                    </p>
                    <p className="scoreBreakdownCardP2">Undesirable</p>
                  </Card>
                </Grid>

                {/* <Grid item xs={false} md={1}></Grid> */}
              </Grid>
            </Grid>
            <Grid container>
              <Grid item xs={12} md={12} align="center">
                <p className="scoresText">{tableName}</p>
              </Grid>
              {/* <Grid item xs={2} md={2}></Grid> */}
              <Grid item xs={12} md={12}>
                {comp}
              </Grid>
              {/* <Grid item xs={} md={2}></Grid> */}
            </Grid>
          </>
        ) : (
          <Grid
            container
            direction="column"
            item
            xs={12}
            md={12}
            align="center"
          >
            <Typography sx={{ textAlign: "center" }} variant="h5" color={"red"}>
              No Scores Found
              <Button
                variant="outlined"
                color="error"
                sx={{ marginLeft: "40px", width: 100 }}
                onClick={() => navigate(-1)}
              >
                Back
              </Button>
            </Typography>
          </Grid>
        )}
      </Grid>
    </>
  );
};

export default ResultScreen;
