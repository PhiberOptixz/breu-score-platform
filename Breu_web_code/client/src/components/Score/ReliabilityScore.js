import * as React from "react";
import Grid from "@mui/material/Grid";

const ReliabilityScore = ({ scoreData }) => {
  return (
    <Grid container>
      <Grid item xs={0} sm={0} md={2}></Grid>
      <Grid item xs={12} md={8}>
        <table className="tbl">
          <tr className="trn">
            <th className="tdh">Metric</th>
            <th className="tdh">Percentile</th>
            <th className="tdh">Score</th>
          </tr>
          <tr className="trn">
            <td className="tdh">Design</td>
            <td className="tdh">{scoreData?.design?.percentile}</td>
            <td className="tdh">{scoreData?.design?.score}</td>
          </tr>
          <tr className="trn">
            <td className="tdh">Framework</td>
            <td className="tdh">{scoreData?.framework?.percentile}</td>
            <td className="tdh">{scoreData?.framework?.score}</td>
          </tr>
          <tr className="trn">
            <td className="tdh">Coding</td>
            <td className="tdh">{scoreData?.coding?.percentile}</td>
            <td className="tdh">{scoreData?.coding?.score}</td>
          </tr>
          <tr className="trn">
            <td className="tdh">Debugging</td>
            <td className="tdh">{scoreData?.debugging?.percentile}</td>
            <td className="tdh">{scoreData?.debugging?.score}</td>
          </tr>
          <tr className="trn">
            <td className="tdh">Architecture </td>
            <td className="tdh">{scoreData?.architecture?.percentile}</td>
            <td className="tdh">{scoreData?.architecture?.score}</td>
          </tr>
          <tr className="trn">
            <td className="tdh">Implementation</td>
            <td className="tdh">{scoreData?.implementation?.percentile}</td>
            <td className="tdh">{scoreData?.implementation?.score}</td>
          </tr>
        </table>
      </Grid>
      <Grid item xs={0} sm={0} md={2}></Grid>
    </Grid>
  );
};
export default ReliabilityScore;
