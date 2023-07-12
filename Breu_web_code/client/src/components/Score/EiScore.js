import * as React from "react";
import Grid from "@mui/material/Grid";

const EiScore = () => {
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
            <td className="tdh">Team work</td>
            <td className="tdh">Maria Anders</td>
            <td className="tdh">Germany</td>
          </tr>
          <tr className="trn">
            <td className="tdh">Complexity handling</td>
            <td className="tdh">Francisco Chang</td>
            <td className="tdh">Mexico</td>
          </tr>
          <tr className="trn">
            <td className="tdh">Conflict resolution</td>
            <td className="tdh">Roland Mendel</td>
            <td className="tdh">Austria</td>
          </tr>
          <tr className="trn">
            <td className="tdh">Initiative</td>
            <td className="tdh">Helen Bennett</td>
            <td className="tdh">UK</td>
          </tr>
          <tr className="trn">
            <td className="tdh">Cultural Fit</td>
            <td className="tdh">Yoshi Tannamuri</td>
            <td className="tdh">Canada</td>
          </tr>
          <tr className="trn">
            <td className="tdh">Presentation</td>
            <td className="tdh">Giovanni Rovelli</td>
            <td className="tdh">Italy</td>
          </tr>
          <tr className="trn">
            <td className="tdh">Communication</td>
            <td className="tdh">Giovanni Rovelli</td>
            <td className="tdh">Italy</td>
          </tr>
          <tr className="trn">
            <td className="tdh">Ownership</td>
            <td className="tdh">Giovanni Rovelli</td>
            <td className="tdh">Italy</td>
          </tr>
          <tr className="trn">
            <td className="tdh">Empathy</td>
            <td className="tdh">Giovanni Rovelli</td>
            <td className="tdh">Italy</td>
          </tr>
          <tr className="trn">
            <td className="tdh">Openness</td>
            <td className="tdh">Giovanni Rovelli</td>
            <td className="tdh">Italy</td>
          </tr>
        </table>
      </Grid>
      <Grid item xs={0} sm={0} md={2}></Grid>
    </Grid>
  );
};
export default EiScore;
