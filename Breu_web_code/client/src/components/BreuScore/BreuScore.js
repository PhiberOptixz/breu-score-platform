import { useEffect } from "react";
import Header from "../../common/header";
import { Grid } from "@mui/material";
import { TextField } from "@mui/material";

const BreuScore = () => {
  useEffect(() => {
    document.title = "Breu.ai - Breu Score";
  }, []);

  return (
    <>
      <Header
        name="Breu Score"
        caption={"Exploring your Emotional dimension"}
      />
      <Grid container>
        <h3 style={{ margin: "auto" }}>
          {" "}
          You did it !! Your breu score will be available in 24 hours
        </h3>
      </Grid>
      {/* <Grid container sx={{ marginLeft: "2%" }}>
        <TextField variant="h3" color="success">
          You did it !! Your breu score will be available in 24 hours
        </TextField>
      </Grid> */}
    </>
  );
};

export default BreuScore;
