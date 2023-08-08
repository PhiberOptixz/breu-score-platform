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
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

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

  const believeabilityAvg =
    candidateSlice?.candidateScore?.mainBelievabilityScore;

  const reliabilityAvg = candidateSlice?.candidateScore?.mainreliabilityScore;

  const EIAvg = candidateSlice?.candidateScore?.mainEmotionalIntelligencyScores;

  const undesirabilityAvg =
    candidateSlice?.candidateScore?.mainUndesirableScore;

  return (
    <>
      {" "}
      {location?.pathname === "/breuscore" ? null : (
        <Header
          name="BREU Score"
          // caption={"Exploring your Emotional dimension"}
        />
      )}
      <Grid container style={{ marginTop: "2%" }}>
        {candidateSlice?.candidateScore ? (
          <>
            <Grid item xs={12} md={6} align="left">
              <p
                className="scoresText"
                align="left"
                style={{ paddingLeft: "5%" }}
              >
                BREU Score
              </p>
              <ProgressBar
                value={candidateSlice?.candidateScore?.mainScore}
                style={{ paddingLeft: "10%" }}
              />
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
                    style={
                      tableName === "Believability Score"
                        ? {
                            borderColor:
                              believeabilityAvg < 1.5
                                ? "red"
                                : believeabilityAvg > 1.6 &&
                                  believeabilityAvg <= 2.5
                                ? "orange"
                                : believeabilityAvg > 2.6 &&
                                  believeabilityAvg <= 3.5
                                ? "yellow"
                                : believeabilityAvg > 3.6 &&
                                  believeabilityAvg <= 4.5
                                ? "#4CBB17"
                                : "green",
                            backgroundColor: "#ebe0be",
                          }
                        : {
                            borderColor:
                              believeabilityAvg < 1.5
                                ? "red"
                                : believeabilityAvg > 1.6 &&
                                  believeabilityAvg <= 2.5
                                ? "orange"
                                : believeabilityAvg > 2.6 &&
                                  believeabilityAvg <= 3.5
                                ? "yellow"
                                : believeabilityAvg > 3.6 &&
                                  believeabilityAvg <= 4.5
                                ? "#4CBB17"
                                : "green",
                          }
                    }
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
                    <Grid container>
                      <Grid item xs={6} md={6}>
                        <p
                          className="scoreBreakdownCardP1"
                          style={{ paddingLeft: "15%" }}
                        >
                          {believeabilityAvg}
                        </p>
                      </Grid>
                      <Grid item xs={6} md={6} align="right">
                        {tableName === "Believability Score" ? (
                          <CheckCircleIcon sx={{ pt: "20%", pr: "5%" }} />
                        ) : null}
                      </Grid>
                    </Grid>
                    <p className="scoreBreakdownCardP2">Believeability</p>
                  </Card>
                </Grid>

                <Grid item xs={4} md={3}>
                  <Card
                    className="scoreBreakdownCard"
                    style={
                      tableName === "Reliability Score"
                        ? {
                            borderColor:
                              reliabilityAvg < 1.5
                                ? "red"
                                : reliabilityAvg > 1.6 && reliabilityAvg <= 2.5
                                ? "orange"
                                : reliabilityAvg > 2.6 && reliabilityAvg <= 3.5
                                ? "yellow"
                                : reliabilityAvg > 3.6 && reliabilityAvg <= 4.5
                                ? "#4CBB17"
                                : "green",
                            backgroundColor: "#ebe0be",
                          }
                        : {
                            borderColor:
                              reliabilityAvg < 1.5
                                ? "red"
                                : reliabilityAvg > 1.6 && reliabilityAvg <= 2.5
                                ? "orange"
                                : reliabilityAvg > 2.6 && reliabilityAvg <= 3.5
                                ? "yellow"
                                : reliabilityAvg > 3.6 && reliabilityAvg <= 4.5
                                ? "#4CBB17"
                                : "green",
                          }
                    }
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
                    <Grid container>
                      <Grid item xs={6} md={6}>
                        <p
                          className="scoreBreakdownCardP1"
                          style={{ paddingLeft: "15%" }}
                        >
                          {reliabilityAvg}
                        </p>
                      </Grid>
                      <Grid item xs={6} md={6} align="right">
                        {tableName === "Reliability Score" ? (
                          <CheckCircleIcon sx={{ pt: "20%", pr: "5%" }} />
                        ) : null}
                      </Grid>
                    </Grid>
                    <p className="scoreBreakdownCardP2">Reliability</p>
                  </Card>
                </Grid>

                <Grid item xs={4} md={3}>
                  <Card
                    className="scoreBreakdownCard"
                    style={
                      tableName === "EI Score"
                        ? {
                            borderColor:
                              EIAvg < 1.5
                                ? "red"
                                : EIAvg > 1.5 && EIAvg <= 2.5
                                ? "orange"
                                : EIAvg > 2.5 && EIAvg <= 3.5
                                ? "yellow"
                                : EIAvg > 2.5 && EIAvg <= 4.5
                                ? "#4CBB17"
                                : "green",
                            backgroundColor: "#ebe0be",
                          }
                        : {
                            borderColor:
                              EIAvg < 1.5
                                ? "red"
                                : EIAvg > 1.5 && EIAvg <= 2.5
                                ? "orange"
                                : EIAvg > 2.5 && EIAvg <= 3.5
                                ? "yellow"
                                : EIAvg > 2.5 && EIAvg <= 4.5
                                ? "#4CBB17"
                                : "green",
                          }
                    }
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
                    <Grid container>
                      <Grid item xs={6} md={6}>
                        <p
                          className="scoreBreakdownCardP1"
                          style={{ paddingLeft: "15%" }}
                        >
                          {EIAvg}
                        </p>
                      </Grid>
                      <Grid item xs={6} md={6} align="right">
                        {tableName === "EI Score" ? (
                          <CheckCircleIcon sx={{ pt: "20%", pr: "5%" }} />
                        ) : null}
                      </Grid>
                    </Grid>
                    <p className="scoreBreakdownCardP2">EI</p>
                  </Card>
                </Grid>

                <Grid item xs={4} md={3}>
                  <Card
                    className="scoreBreakdownCard"
                    // style={{ borderColor: "#4CBB17" }}
                    style={
                      tableName === "Undesireability Score"
                        ? {
                            borderColor:
                              undesirabilityAvg < 2
                                ? "green"
                                : undesirabilityAvg > 2 &&
                                  undesirabilityAvg <= 2.5
                                ? "red"
                                : undesirabilityAvg > 2.6 &&
                                  undesirabilityAvg <= 3.5
                                ? "red"
                                : undesirabilityAvg > 3.6 &&
                                  undesirabilityAvg <= 4.5
                                ? "red"
                                : "red",
                            backgroundColor: "#ebe0be",
                          }
                        : {
                            borderColor:
                              undesirabilityAvg < 2
                                ? "green"
                                : undesirabilityAvg > 2 &&
                                  undesirabilityAvg <= 2.5
                                ? "red"
                                : undesirabilityAvg > 2.6 &&
                                  undesirabilityAvg <= 3.5
                                ? "red"
                                : undesirabilityAvg > 3.6 &&
                                  undesirabilityAvg <= 4.5
                                ? "red"
                                : "red",
                          }
                    }
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
                    <Grid container>
                      <Grid item xs={6} md={6}>
                        <p
                          className="scoreBreakdownCardP1"
                          style={{ paddingLeft: "15%" }}
                        >
                          {undesirabilityAvg}
                        </p>
                      </Grid>
                      <Grid item xs={6} md={6} align="right">
                        {tableName === "Undesireability Score" ? (
                          <CheckCircleIcon sx={{ pt: "20%", pr: "5%" }} />
                        ) : null}
                      </Grid>
                    </Grid>
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
