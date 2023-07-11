import * as React from "react";
import Grid from "@mui/material/Grid";


const BelievabilityScore = () => {
    return (
        <Grid container>
           
            <Grid item xs={12} md={12}>
                <table className="tbl">
                    <tr className="trn">
                        <th className="tdh">Qualification</th>
                        <th className="tdh">Percentile</th>
                        <th className="tdh">Score</th>
                    </tr>
                    <tr className="trn">
                        <td className="tdh">Professional Experience</td>
                        <td className="tdh">Maria Anders</td>
                        <td className="tdh">Germany</td>
                    </tr>
                    <tr className="trn">
                        <td className="tdh">Social score (Git hub, Stack over flow, Kaggle, Linked in )</td>
                        <td className="tdh">Francisco Chang</td>
                        <td className="tdh">Mexico</td>
                    </tr>
                    <tr className="trn">
                        <td className="tdh">Patents </td>
                        <td className="tdh">Roland Mendel</td>
                        <td className="tdh">Austria</td>
                    </tr>
                    <tr className="trn">
                        <td className="tdh">Whitepaper/Conference presentation</td>
                        <td className="tdh">Helen Bennett</td>
                        <td className="tdh">UK</td>
                    </tr>
                    <tr className="trn">
                        <td className="tdh">Blog</td>
                        <td className="tdh">Yoshi Tannamuri</td>
                        <td className="tdh">Canada</td>
                    </tr>
                </table>
            </Grid>
         
        </Grid>
    );
};
export default BelievabilityScore;
