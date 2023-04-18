import * as React from "react";
import Grid from "@mui/material/Grid";

const Footer = ({ name }) => {
  return (
    <Grid container className="header">
      <Grid item className="headerGridItem" xs={12} md={12} align="center">
        <p className="headerPara">© 2023 BREU.ai</p>
      </Grid>
    </Grid>
  );
};
export default Footer;
