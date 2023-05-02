import * as React from "react";
import Grid from "@mui/material/Grid";

const Header = ({ name }) => {
  return (
    <Grid container>
      <Grid item className="headerGridItem" xs={12} md={12} align="center">
        <p className="headerPara">{name || "Believability"}</p>
      </Grid>
    </Grid>
  );
};
export default Header;
