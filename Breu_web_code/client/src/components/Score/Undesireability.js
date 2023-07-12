import * as React from "react";
import Grid from "@mui/material/Grid";

const UndesireabilityScore = () => {
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
            <td className="tdh">Metric</td>
            <td className="tdh">Maria Anders</td>
            <td className="tdh">Germany</td>
          </tr>
          <tr className="trn">
            <td className="tdh">Plagiarism</td>
            <td className="tdh">Francisco Chang</td>
            <td className="tdh">Mexico</td>
          </tr>
          <tr className="trn">
            <td className="tdh">Trust issues</td>
            <td className="tdh">Roland Mendel</td>
            <td className="tdh">Austria</td>
          </tr>
          <tr className="trn">
            <td className="tdh">Fake information</td>
            <td className="tdh">Helen Bennett</td>
            <td className="tdh">UK</td>
          </tr>
        </table>
      </Grid>
      <Grid item xs={0} sm={0} md={2}></Grid>
    </Grid>
  );
};
export default UndesireabilityScore;
