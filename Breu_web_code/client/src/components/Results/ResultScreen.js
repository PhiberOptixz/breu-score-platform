import React, { Component, useState } from "react";

import HorizontalGauge from "react-horizontal-gauge";

import { Grid, Card } from "@mui/material";
import ProgressBar from "../../common/ProgressBar";

import BelievabilityScore from "../Score/BeliveabilityScore";
import ReliabilityScore from "../Score/ReliabilityScore";
import EiScore from "../Score/EiScore";
import Undesireability from "../Score/Undesireability";

const ResultScreen = () => {
  const [columns, setColumns] = useState();
  const [rows, setRows] = useState();
  const [comp, setComp] = useState(<BelievabilityScore />);
  const [tableName, setTableName] = useState("Believability Score");

  const believeabilityColumns = [
    {
      field: "id",
      headerName: "Metric ",
      width: 180,
      headerAlign: "center",
      align: "center",
    },
    // {
    //   field: "value",
    //   headerName: "Value ",
    //   width: 100,
    //   headerAlign: "center",
    //   align: "center",
    // },
    {
      field: "percentile",
      headerName: "Percentile",
      width: 100,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "score",
      headerName: "Score (1-5)",
      width: 100,
      headerAlign: "center",
      align: "center",
    },
  ];

  const believeabilityRows = [
    { id: "Qualification", percentile: 3.5, score: "3" },
    { id: "Social Score", percentile: 3.5, score: "3" },
    { id: "Patents", percentile: 3.5, score: "3" },
  ];

  return (
    <>
      <Grid container style={{ marginTop: "2%" }}>
        <Grid item xs={12} md={6} align="left" style={{ paddingLeft: "10%" }}>
          <p className="scoresText" align="left">
            Scores
          </p>
          <ProgressBar value={1} />
        </Grid>
        {/* <Grid item xs={12} md={6}></Grid> */}
        <Grid item xs={12} md={6} style={{ padding: "2%", paddingTop: "0%" }}>
          <p className="scoresText" align="left" style={{ paddingLeft: "0%" }}>
            Score Breakdown
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
                  setComp(<BelievabilityScore />);
                  setTableName("Believability Score");
                }}
              >
                <p className="scoreBreakdownCardP1" style={{ color: "red" }}>
                  1
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
                  setComp(<ReliabilityScore />);
                  setTableName("Reliability Score");
                }}
              >
                <p className="scoreBreakdownCardP1" style={{ color: "orange" }}>
                  2
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
                  setComp(<EiScore />);
                  setTableName("EI Score");
                }}
              >
                <p className="scoreBreakdownCardP1" style={{ color: "yellow" }}>
                  2
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
                  setComp(<Undesireability />);
                  setTableName("Undesireability Score");
                }}
              >
                <p
                  className="scoreBreakdownCardP1"
                  style={{ color: "#4CBB17" }}
                >
                  4
                </p>
                <p className="scoreBreakdownCardP2">Undesirable</p>
              </Card>
            </Grid>

            {/* <Grid item xs={false} md={1}></Grid> */}
          </Grid>
        </Grid>
        <Grid container style={{ marginTop: "4%" }}>
          <Grid item xs={12} md={12} align="center">
            <p className="scoresText">{tableName}</p>
          </Grid>
          {/* <Grid item xs={2} md={2}></Grid> */}
          <Grid item xs={12} md={12}>
            {comp}
          </Grid>
          {/* <Grid item xs={} md={2}></Grid> */}
        </Grid>
      </Grid>
    </>
  );
};

export default ResultScreen;
