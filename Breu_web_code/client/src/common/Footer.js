import * as React from "react";
import Grid from "@mui/material/Grid";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { Typography } from "@mui/material";

const Footer = ({ name }) => {
  return (
    <Grid container className="header">
      <Grid item className="headerGridItem" xs={12} md={12} align="center">
        <Typography className="headerPara"> © 2023 BREU.AI</Typography>
        <LinkedInIcon
          sx={{ marginRight: "15px", color: "white" }}
          onClick={() =>
            window.open("https://www.linkedin.com/company/breu-ai/")
          }
        />
        <YouTubeIcon
          sx={{ marginRight: "25px", color: "white" }}
          onClick={() =>
            window.open("https://www.youtube.com/watch?v=y7k1QzcoXYI")
          }
        />
      </Grid>
    </Grid>
  );
};
export default Footer;
