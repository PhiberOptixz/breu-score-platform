import * as React from "react";
import Grid from "@mui/material/Grid";

const ReliabilityScore = () => {
  return (
    <Grid container>
      <Grid item xs={0} sm={0} md={2}></Grid>
      <Grid item xs={12} md={8}>
        <table className="tbl">
          <tr className="trn">
            <th className="tdh">Qualification</th>
            <th className="tdh">Percentile</th>
            <th className="tdh">Score</th>
          </tr>
          <tr className="trn">
            <td className="tdh">Design</td>
            <td className="tdh">10</td>
            <td className="tdh">4</td>
          </tr>
          <tr className="trn">
            <td className="tdh">Framework</td>
            <td className="tdh">10</td>
            <td className="tdh">3</td>
          </tr>
          <tr className="trn">
            <td className="tdh">Coding</td>
            <td className="tdh">10</td>
            <td className="tdh">2</td>
          </tr>
          <tr className="trn">
            <td className="tdh">Debugging</td>
            <td className="tdh">30</td>
            <td className="tdh">4</td>
          </tr>
          <tr className="trn">
            <td className="tdh">Architecture </td>
            <td className="tdh">10</td>
            <td className="tdh">3</td>
          </tr>
          <tr className="trn">
            <td className="tdh">Implementation</td>
            <td className="tdh">10</td>
            <td className="tdh">2</td>
          </tr>
        </table>
      </Grid>
      <Grid item xs={0} sm={0} md={2}></Grid>
    </Grid>
  );
};
export default ReliabilityScore;
