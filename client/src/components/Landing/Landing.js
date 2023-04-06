import React from "react";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper'
import Radio from '@mui/material/Radio';
import "../Landing/Landing.css"
import BreuButton from "../../common/button";
import { Typography } from "@mui/material";

const Landing = () => {

  const [selectedValue, setSelectedValue] = React.useState('a');

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  return <div className="landing">
    <Box sx={{ flexGrow: 1 }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} justifyContent="center"
        alignItems="center">
        <Grid item xs={6}>

        </Grid>
        <Grid item xs={1}>

        </Grid>
        <Grid item xs={5} style={{ marginTop: "125px" }}>

          <Paper elevation={3} style={{ height: "400px", width: "300px" }} >
            <Typography style={{ paddingTop: "60px" }}>BREU AI</Typography>
            <Typography>Continue As a</Typography>
            <Grid item direction="row" xs={12} sx={{ m: 2 }}>
              <Paper elevation={3} style={{display:"flex",justifyContent:"space-evenly", height: "60px", width: "200px", marginLeft: "40px" }}>

                <Typography alignLeft style={{ paddingTop: "20px" }}> Hello</Typography>


                <Radio
                  checked={selectedValue === 'a'}
                  onChange={handleChange}
                  value="a"
                  name="radio-buttons"
                  inputProps={{ 'aria-label': 'A' }}
                />

              </Paper>
            </Grid>
            <Grid item xs={12} sx={{ m: 2 }}>
              <Paper elevation={3} style={{ display:"flex",justifyContent:"space-evenly", height: "60px", width: "200px", marginLeft: "40px" }}> 
                <Typography style={{ paddingTop: "20px" }}> Hello</Typography>
                <Radio
                  checked={selectedValue === 'b'}
                  onChange={handleChange}
                  value="b"
                  name="radio-buttons"
                  inputProps={{ 'aria-label': 'B' }}

                />
              </Paper>
            </Grid>
            <Grid item sx={{ ml: 4 }}>
              <BreuButton variant="contained" text="Candiadte" />
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  </div>;
};

export default Landing;
