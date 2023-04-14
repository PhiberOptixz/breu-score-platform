// import React from "react";

// const SignIn = () => {
//   return <div>SignIn</div>;
// };

// export default SignIn;


import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import BreuSelect from '../../common/select';
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
import Container from '@mui/material/Container';
import Select from '@mui/material/Select';
import Header from '../../common/header';
import { createTheme, ThemeProvider } from '@mui/material/styles';


const theme = createTheme();

const Believability = () =>  {
  

  return (
    <>
    <Header/>
    <Grid container className='believabilityContainer'>
      <Grid item xs={12} md={6}>
        <p className='selectPara'>select</p>
      <BreuSelect label='Role' 
        value='Role' 
        options={[{name:1},{name:2},{name:3},{name:4}]} 
        size="small" 
        sx={{ width: 200 }}
        placeholder="Jai Anjaneya"
      />
      <p className='selectPara'>select</p>
      <BreuSelect label='Role' value='Role' options={[{name:1},{name:2},{name:3},{name:4}]} size="small" sx={{ width: 200 }} />
      <p className='selectPara'>select</p>
      <BreuSelect label='Role' value='Role' options={[{name:1},{name:2},{name:3},{name:4}]} size="small" sx={{ width: 200 }}/>
      <p className='selectPara'>select</p>
      <BreuSelect label='Role' value='Role' options={[{name:1},{name:2},{name:3},{name:4}]} size="small" sx={{ width: 200 }} />
      <p className='selectPara'>select</p>
      <BreuSelect label='Role' value='Role' options={[{name:1},{name:2},{name:3},{name:4}]} size="small" sx={{ width: 200 }} />
      <p className='selectPara'>select</p>
      <BreuSelect label='Role' value='Role' options={[{name:1},{name:2},{name:3},{name:4}]} size="small" sx={{ width: 200 }}/> 
      </Grid>
      <Grid item xs={12} md={6} >
    
      </Grid>
    </Grid>
    </> 
  );
}
export default Believability;