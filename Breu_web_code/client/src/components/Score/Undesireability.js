import * as React from "react";
import Grid from "@mui/material/Grid";

const UndesireabilityScore = ({ scoreData }) => {
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
            <td className="tdh">Plagiarism</td>
            <td className="tdh">{scoreData?.plagiarism?.percentile}</td>
            <td className="tdh">{scoreData?.plagiarism?.score}</td>
          </tr>
          <tr className="trn">
            <td className="tdh">Trust issues</td>
            <td className="tdh">{scoreData?.trustIssues?.percentile}</td>
            <td className="tdh">{scoreData?.trustIssues?.score}</td>
          </tr>
          <tr className="trn">
            <td className="tdh">Fake information</td>
            <td className="tdh">{scoreData?.fakeInformation?.percentile}</td>
            <td className="tdh">{scoreData?.fakeInformation?.score}</td>
          </tr>
        </table>
      </Grid>
      <Grid item xs={0} sm={0} md={2}></Grid>
    </Grid>
  );
};
export default UndesireabilityScore;
