import * as React from "react";
import Grid from "@mui/material/Grid";
import { useNavigate } from "react-router-dom";
import ExitToAppIcon from '@mui/icons-material/ExitToApp';



const Header = ({ name, caption, page }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    // console.log("Logged Out");
    // sessionStorage.clear();
    localStorage.clear();
    navigate("/");
  }

  return (
    <Grid container>
      {page ?
        <Grid item className="headerGridItem" xs={12} md={12} align="center">
          <p className="headerPara">
            {name || "Believability"} - {caption || " "}
          </p>
          {/* <p  className="headerCaption"></p > */}
        </Grid>
        :
        <>
          <Grid item className="headerGridItem" xs={11} md={11} align="center">
            <p className="headerPara">
              {name || "Believability"} - {caption || " "}
            </p>
            {/* <p  className="headerCaption"></p > */}
          </Grid>
          <Grid item className="headerGridItem" xs={1} md={1} align="right">
            <ExitToAppIcon onClick={handleClick} sx={{ color: "white", fontSize: 36,cursor: "pointer"}} />
          </Grid>
        </>

      }
    </Grid>
  );
};
export default Header;
