import * as React from "react";
import Grid from "@mui/material/Grid";

const Header = ({ name, caption }) => {
  return (
    <Grid container>
      <Grid item className="headerGridItem" xs={12} md={12} align="center">
        <p className="headerPara">
          {name || "Believability"} - {caption || " "}
        </p>
        {/* <p  className="headerCaption"></p > */}
      </Grid>
    </Grid>
  );
};
export default Header;
