import React, { Component, useState } from "react";

import HorizontalGauge from "react-horizontal-gauge";

// import CardContent from "@mui/material/CardContent";
import { Grid, Card } from "@mui/material";
import ProgressBar from "../../common/ProgressBar";
import { DataGrid } from "@mui/x-data-grid";
import DataGridReusable from "../../common/DataGridReusable";

const ResultScreen = () => {
  const [columns, setColumns] = useState();
  const [rows, setRows] = useState();

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
      <Grid container>
        <Grid item xs={12} md={6} align="left" style={{ paddingLeft: "10%" }}>
          <p className="scoresText" align="left">
            Scores
          </p>
          <HorizontalGauge
            ticks={[
              { label: "0", value: 0 },
              { label: "1", value: 1 },
              { label: "2", value: 2 },
              { label: "3", value: 3 },
              { label: "4", value: 4 },
              { label: "5", value: 5 },
            ]}
            height={70}
            width={300}
            min={0}
            max={5}
            value={1}
          />
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
                  setColumns(believeabilityColumns);
                  setRows(believeabilityRows);
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

            <Grid item xs={4} md={3}>
              <Card
                className="scoreBreakdownCard"
                style={{ borderColor: "green" }}
              >
                <p className="scoreBreakdownCardP1" style={{ color: "green" }}>
                  5
                </p>
                <p className="scoreBreakdownCardP2">Excellent</p>
              </Card>
            </Grid>
            {/* <Grid item xs={false} md={1}></Grid> */}
          </Grid>
        </Grid>

        <Grid item xs={12} md={12} align="center">
          {/* <div style={{ height: 350, width: "100%" }}> */}
          {/* <DataGrid
              rows={believeabilityRows}
              columns={believeabilityColumns}
              autoHeight
              disableColumnMenu
              hideFooterSelectedRowCount
              //  getRowSpacing={getRowSpacing}
              // rowsPerPageOptions={[100]}
              // autoPageSize
              disableRowSelectionOnClick
              pagination
            /> */}
          <DataGridReusable
            rows={believeabilityRows}
            columns={believeabilityColumns}
          />
          {/* </div> */}
        </Grid>
        <ProgressBar />
      </Grid>
    </>
  );
};

export default ResultScreen;
