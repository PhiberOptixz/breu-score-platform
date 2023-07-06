import React, { useState } from 'react';
// import { withStyles } from '@material-ui/core/styles';
import { makeStyles, Button, Typography, Dialog, DialogTitle , DialogContent , DialogActions as MuiDialogActions, IconButton, Grid } from '@mui/material';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';

// const useStyles = makeStyles(theme => ({
//     dialogWrapper: {
//         // padding: theme.spacing(2),
//         // position: 'absolute',
//         // top: theme.spacing(5)
//     }
// }))

// const styles = (theme) => ({
//     root: {
//         margin: 0,
//         // padding: theme.spacing(2),
//         // paddingRight: '0px',
//         width:"1000px"
//         // width:"1250px"
//         // width:"95%"
//     },
//     closeButton: {
//         position: 'absolute',
//         right: theme.spacing(1),
//         top: theme.spacing(3),
//         color: theme.palette.grey[500],
//     },
// });
  

  
// const DialogContent = ((theme) => ({
//     root: {
//         // padding: theme.spacing(2),
//     },
// }))(MuiDialogContent);
  
// const DialogActions = withStyles((theme) => ({
//     root: {
//         margin: 0,
//         // padding: theme.spacing(1),

//     },
// }))(MuiDialogActions);
  
export default function CustomizedDialogs({
    title,
    children,
    openPopup,
    setOpenPopup
}) {  

    // const DialogTitle1 = ((props) => {
    //     const { children, classes, onClose, ...other } = props;
    //     return (
    //         <DialogTitle disableTypography 
    //         // className={classes.root} 
    //         {...other}>
    //         <Typography variant="h6">{children}</Typography>
            // {onClose ? (
            //     <IconButton aria-label="close" 
            //     // className={classes.closeButton} 
            //     onClick={onClose}>
            //         <CloseRoundedIcon />
            //     </IconButton>
            // ) : null}
    //         </DialogTitle>
    //     );
    // });
    // const classes = useStyles();
    return (
        <Grid container align="center">
            <Grid item xs={10} md={10}>
                <Dialog 
                    onClose={() => setOpenPopup(false)} 
                    aria-labelledby="customized-dialog-title" 
                    open={openPopup}
                    maxWidth="lg" 
                    // classes={{ paper: classes.dialogWrapper }}
                >
                    <DialogTitle 
                        id="customized-dialog-title" 
                        // onClose={() => setOpenPopup(false)}
                    >
                        
                        <Grid container>
                        <Grid item xs={11} md={11}>
                        { title }
                        </Grid>
                        <Grid item xs={1} md={1}>
                        <CloseRoundedIcon 
                        onClick={() => setOpenPopup(false)}/>
                        </Grid>
                        </Grid>
                    </DialogTitle>
                    <DialogTitle dividers>
                        { children }
                       </DialogTitle>
                </Dialog>
            </Grid>
        </Grid>
    );
}