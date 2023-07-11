import * as React from "react";
import Grid from "@mui/material/Grid";


const ReliabilityScore = () => {
    return (
        <Grid container>
            <Grid item xs={2} md={2}></Grid>
            <Grid item xs={8} md={8}>
                <table className="tbl">
                    <tr className="trn">
                    <th className="tdh">Qualification</th>
                        <th className="tdh">Percentile</th>
                        <th className="tdh">Score</th>
                    </tr>
                    <tr className="trn">
                        <td className="tdh">Design</td>
                        <td className="tdh">Maria Anders</td>
                        <td className="tdh">Germany</td>
                    </tr>
                    <tr className="trn">
                        <td className="tdh">Framework</td>
                        <td className="tdh">Francisco Chang</td>
                        <td className="tdh">Mexico</td>
                    </tr>
                    <tr className="trn">
                        <td className="tdh">Coding</td>
                        <td className="tdh">Roland Mendel</td>
                        <td className="tdh">Austria</td>
                    </tr>
                    <tr className="trn">
                        <td className="tdh">Debugging</td>
                        <td className="tdh">Helen Bennett</td>
                        <td className="tdh">UK</td>
                    </tr>
                    <tr className="trn">
                        <td className="tdh">Architecture </td>
                        <td className="tdh">Yoshi Tannamuri</td>
                        <td className="tdh">Canada</td>
                    </tr>
                    <tr className="trn">
                        <td className="tdh">Implementation</td>
                        <td className="tdh">Giovanni Rovelli</td>
                        <td className="tdh">Italy</td>
                    </tr>
                </table>
            </Grid>
            <Grid item xs={2} md={2}>

            </Grid>
        </Grid>
    );
};
export default ReliabilityScore;
