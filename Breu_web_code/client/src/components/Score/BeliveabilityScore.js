import * as React from "react";
import Grid from "@mui/material/Grid";

const BelievabilityScore = ({ scoreData }) => {
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
            <td className="tdh">Qualification</td>
            <td className="tdh">{scoreData?.qualification?.percentile}</td>
            <td className="tdh">{scoreData?.qualification?.score}</td>
          </tr>
          <tr className="trn">
            <td className="tdh">Professional Experience</td>
            <td className="tdh">
              {scoreData?.professionalExperience?.percentile}
            </td>
            <td className="tdh">{scoreData?.professionalExperience?.score}</td>
          </tr>
          <tr className="trn">
            <td className="tdh">
              Social score (Github, Stackoverflow, Kaggle, LinkedIn )
            </td>
            <td className="tdh">{scoreData?.socialScore?.percentile}</td>
            <td className="tdh">{scoreData?.socialScore?.score}</td>
          </tr>
          <tr className="trn">
            <td className="tdh">Patents </td>
            <td className="tdh">{scoreData?.patents?.percentile}</td>
            <td className="tdh">{scoreData?.patents?.score}</td>
          </tr>
          <tr className="trn">
            <td className="tdh">Whitepaper/Conference presentation</td>
            <td className="tdh">
              {scoreData?.whitepaperConferencePresentation?.percentile}
            </td>
            <td className="tdh">
              {scoreData?.whitepaperConferencePresentation?.score}
            </td>
          </tr>
          <tr className="trn">
            <td className="tdh">Blog</td>
            <td className="tdh">{scoreData?.blog?.percentile}</td>
            <td className="tdh">{scoreData?.blog?.score}</td>
          </tr>
        </table>
      </Grid>
      <Grid item xs={0} sm={0} md={2}></Grid>
    </Grid>
  );
};
export default BelievabilityScore;
