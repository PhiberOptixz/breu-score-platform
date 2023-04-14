import * as React from 'react';
import Grid from '@mui/material/Grid';

const Header = () =>  {
  

  return (
    <Grid container className='header'>
      <Grid item className='headerGridItem' xs={12} md={12}  align="center">
      <p className='headerPara' >Believability</p>
      </Grid>
    </Grid>
    
  );
}
export default Header;