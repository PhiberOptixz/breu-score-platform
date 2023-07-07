import * as React from "react";
import Grid from "@mui/material/Grid";
import { styled } from '@mui/material/styles';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import { createTheme } from '@mui/material/styles';
import { purple } from '@mui/material/colors';

const theme = createTheme({
    palette: {
        primary: {
            main: purple[500],
        },
        secondary: {
            main: '#f44336',
        },
    },
});

const BorderLinearProgress = styled(LinearProgress)(() => ({
    height: 10,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
    [`& .${linearProgressClasses.bar}`]: {
        backgroundColor: theme.palette.mode === 'light' ? '#FF0032' : 'green',
    },

}));

const BorderLinearProgress1 = styled(LinearProgress)(({ theme }) => ({
    height: 10,
    [`& .${linearProgressClasses.bar}`]: {
        backgroundColor: theme.palette.mode === 'light' ? '#FFA41B' : 'green',
    },
}));

const BorderLinearProgress2 = styled(LinearProgress)(({ theme }) => ({
    height: 10,
    [`& .${linearProgressClasses.bar}`]: {
        backgroundColor: theme.palette.mode === 'light' ? '#FBDF07' : 'green',
    },

}));

const BorderLinearProgress3 = styled(LinearProgress)(({ theme }) => ({
    height: 10,
    [`& .${linearProgressClasses.bar}`]: {
        backgroundColor: theme.palette.mode === 'light' ? '#77dd77' : 'green',
    },

}));

const BorderLinearProgress4 = styled(LinearProgress)(({ theme }) => ({
    height: 10,
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
    [`& .${linearProgressClasses.bar}`]: {
        backgroundColor: theme.palette.mode === 'light' ? '#539165' : 'green',
    },

}));


const ProgressBar = () => {
    return (
        <Grid container>
            <Grid item xs={1} md={1}>
            </Grid>
            <Grid item xs={2} md={2}>
                <BorderLinearProgress variant="determinate" value={100} />
            </Grid>
            <Grid item xs={2} md={2}>
                <BorderLinearProgress1 variant="determinate" value={100} />
            </Grid>
            <Grid item xs={2} md={2}>
                <BorderLinearProgress2 variant="determinate" value={100} />
            </Grid>
            <Grid item xs={2} md={2}>
                <BorderLinearProgress3 variant="determinate" value={100} />
            </Grid>
            <Grid item xs={2} md={2}>
                <BorderLinearProgress4 variant="determinate" value={100} />
            </Grid>
            <Grid item xs={1} md={1}>
            </Grid>

            <Grid item xs={1} md={1}>
            </Grid>
            <Grid item xs={2} md={2} align="center">
                <p>1</p>
            </Grid>
            <Grid item xs={2} md={2} align="center">
                <p>2</p>
            </Grid>
            <Grid item xs={2} md={2} align="center">
                <p>3</p>
            </Grid>
            <Grid item xs={2} md={2} align="center">
                <p>4</p>
            </Grid>
            <Grid item xs={2} md={2} align="center">
                <p>5</p>
            </Grid>
            <Grid item xs={1} md={1}>
            </Grid>
        </Grid>
    );
};
export default ProgressBar;
