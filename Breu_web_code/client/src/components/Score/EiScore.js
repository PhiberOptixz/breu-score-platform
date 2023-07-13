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
            <td className="tdh">10</td>
            <td className="tdh">3</td>
          </tr>
          <tr className="trn">
            <td className="tdh">Complexity handling</td>
            <td className="tdh">10</td>
            <td className="tdh">4</td>
          </tr>
          <tr className="trn">
            <td className="tdh">Conflict resolution</td>
            <td className="tdh">10</td>
            <td className="tdh">3</td>
          </tr>
          <tr className="trn">
            <td className="tdh">Initiative</td>
            <td className="tdh">10</td>
            <td className="tdh">3</td>
          </tr>
          <tr className="trn">
            <td className="tdh">Cultural Fit</td>
            <td className="tdh">15</td>
            <td className="tdh">2</td>
          </tr>
          <tr className="trn">
            <td className="tdh">Presentation</td>
            <td className="tdh">10</td>
            <td className="tdh">2</td>
          </tr>
          <tr className="trn">
            <td className="tdh">Communication</td>
            <td className="tdh">10</td>
            <td className="tdh">4</td>
          </tr>
          <tr className="trn">
            <td className="tdh">Ownership</td>
            <td className="tdh">10</td>
            <td className="tdh">4</td>
          </tr>
          <tr className="trn">
            <td className="tdh">Empathy</td>
            <td className="tdh">10</td>
            <td className="tdh">5</td>
          </tr>
          <tr className="trn">
            <td className="tdh">Openness</td>
            <td className="tdh">10</td>
            <td className="tdh">3</td>
          </tr>
        </table>
      </Grid>
      <Grid item xs={0} sm={0} md={2}></Grid>
    </Grid>
  );
};
export default EiScore;
