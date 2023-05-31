import { useEffect, useState, useRef } from "react";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import ListItemText from '@mui/material/ListItemText';
import Header from "../../common/header";
import { Grid } from "@mui/material";


const Prologue = () => {

    return (
        <>
            <Header
                name="Prologue"
                caption={"Sneak peak of BREU journey"}
            />

            <Grid container>
                <Grid item xs={12} md={12}>
                    <List List sx={{ listStyleType: 'disc', pl: 4 }}>
                        <ListItem >
                            <ListItemIcon>
                                <ArrowCircleRightIcon />
                            </ListItemIcon>
                            <ListItemText primary="Follow sequential progress" />
                        </ListItem >
                        <ListItem >
                            <ListItemIcon>
                                <ArrowCircleRightIcon />
                            </ListItemIcon>
                            <ListItemText primary="No option of making any changes after submitting" />
                        </ListItem >
                        <ListItem >
                            <ListItemIcon>
                                <ArrowCircleRightIcon />
                            </ListItemIcon>
                            <ListItemText primary="Re-login to scroll through the information previously submitted" />
                        </ListItem >
                        <ListItem >
                            <ListItemIcon>
                                <ArrowCircleRightIcon />
                            </ListItemIcon>
                            <ListItemText primary="Video to be recorded in good lighting and noise free environment" />
                        </ListItem >
                        <ListItem >
                            <ListItemIcon>
                                <ArrowCircleRightIcon />
                            </ListItemIcon>
                            <ListItemText primary="30 days mandatory interval to retake the assessmente" />
                        </ListItem >
                    </List>
                </Grid>

            </Grid>
        </>
    );

}

export default Prologue;