import * as React from "react";
import Grid from "@mui/material/Grid";

const BelievabilityScore = () => {
  return (
    <Grid container>
      <Grid item xs={0} sm={0} md={2}></Grid>
      <Grid item xs={12} md={8}>
        <table className="tbl">
          <tr className="trn">
            <th className="tdh">Qualification</th>
            <th className="tdh">Percentile</th>
            <th className="tdh">3</th>
          </tr>
          <tr className="trn">
            <td className="tdh">Professional Experience</td>
            <td className="tdh">20</td>
            <td className="tdh">3</td>
          </tr>
          <tr className="trn">
            <td className="tdh">
              Social score (Git hub, Stack over flow, Kaggle, Linked in )
            </td>
            <td className="tdh">15</td>
            <td className="tdh">3</td>
          </tr>
          <tr className="trn">
            <td className="tdh">Patents </td>
            <td className="tdh">15</td>
            <td className="tdh">4</td>
          </tr>
          <tr className="trn">
            <td className="tdh">Whitepaper/Conference presentation</td>
            <td className="tdh">15</td>
            <td className="tdh">3</td>
          </tr>
          <tr className="trn">
            <td className="tdh">Blog</td>
            <td className="tdh">35</td>
            <td className="tdh">4</td>
          </tr>
        </table>
      </Grid>
      <Grid item xs={0} sm={0} md={2}></Grid>
    </Grid>
  );
};
export default BelievabilityScore;
