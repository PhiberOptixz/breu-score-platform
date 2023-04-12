import React from "react";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper'
import Radio from '@mui/material/Radio';
import ReactPlayer from "react-player";
import BreuButton from "../../common/button";
import { Typography } from "@mui/material";
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const Landing = () => {

  const [selectedValue, setSelectedValue] = React.useState('a');

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const theme = createTheme();

  return <div>
    {/* <Box sx={{ flexGrow: 1 }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} justifyContent="center"
        alignItems="center">
        <Grid item xs={12} md={8}>
        
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
            <Grid item xs={12} md={4} sx={{ m: 2 }}>
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
        <Grid item xs={1}>

        </Grid>
      </Grid>
    </Box> */}

    <Grid container >
      <Grid item xs={12} md={7} className="LandingVideoGrid" >
        <div className='player-wrapper'>
          <ReactPlayer
            className='react-player'
            url='https://www.youtube.com/watch?v=ysz5S6PUM-U'
            width='100%'
            height='100%'
          />
        </div>
      </Grid>
      <Grid item xs={12} md={5} >
        <ThemeProvider theme={theme}>
          <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box
              sx={{
                marginTop: 15,
                padding:2,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                background:'white'
              }}
            >
              
            </Box>
            {/* <Copyright sx={{ mt: 8, mb: 4 }} /> */}
          </Container>
        </ThemeProvider>
      </Grid>
    </Grid>
  </div>;
};

export default Landing;
