import * as React from "react";
import Grid from "@mui/material/Grid";

const EiScore = ({ scoreData }) => {
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
            <td className="tdh">Team work</td>
            <td className="tdh">{scoreData?.teamWork?.percentile}</td>
            <td className="tdh">{scoreData?.teamWork?.score}</td>
          </tr>
          <tr className="trn">
            <td className="tdh">Complexity handling</td>
            <td className="tdh">{scoreData?.complexityHandling?.percentile}</td>
            <td className="tdh">{scoreData?.complexityHandling?.score}</td>
          </tr>
          <tr className="trn">
            <td className="tdh">Conflict resolution</td>
            <td className="tdh">{scoreData?.conflictResolution?.percentile}</td>
            <td className="tdh">{scoreData?.conflictResolution?.score}</td>
          </tr>
          <tr className="trn">
            <td className="tdh">Initiative</td>
            <td className="tdh">{scoreData?.initiative?.percentile}</td>
            <td className="tdh">{scoreData?.initiative?.score}</td>
          </tr>
          <tr className="trn">
            <td className="tdh">Cultural Fit</td>
            <td className="tdh">
              {scoreData?.culturalFitPresentation?.percentile}
            </td>
            <td className="tdh">{scoreData?.culturalFitPresentation?.score}</td>
          </tr>
          <tr>
            <td className="tdh">Presentation</td>
            <td className="tdh">{scoreData?.presentation?.percentile}</td>
            <td className="tdh">{scoreData?.presentation?.score}</td>
          </tr>
          <tr className="trn">
            <td className="tdh">Communication</td>
            <td className="tdh">{scoreData?.communication?.percentile}</td>
            <td className="tdh">{scoreData?.communication?.score}</td>
          </tr>
          <tr className="trn">
            <td className="tdh">Ownership</td>
            <td className="tdh">{scoreData?.ownership?.percentile}</td>
            <td className="tdh">{scoreData?.ownership?.score}</td>
          </tr>
          <tr className="trn">
            <td className="tdh">Empathy</td>
            <td className="tdh">{scoreData?.empathy?.percentile}</td>
            <td className="tdh">{scoreData?.empathy?.score}</td>
          </tr>
          <tr className="trn">
            <td className="tdh">Openness</td>
            <td className="tdh">{scoreData?.openness?.percentile}</td>
            <td className="tdh">{scoreData?.openness?.score}</td>
          </tr>
        </table>
      </Grid>
      <Grid item xs={0} sm={0} md={2}></Grid>
    </Grid>
  );
};
export default EiScore;
