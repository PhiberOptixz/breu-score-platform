import { useEffect, useState, useRef } from "react";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import ListItemText from '@mui/material/ListItemText';
import Header from "../../common/header";
import { Grid } from "@mui/material";


const Undesirability = () => {

    return (
        <>
            <Header
                name="Undesirability"
                caption={"Be real, be authentic, be you!"}
            />

            <Grid container>
                <Grid item xs={12} md={12}>
                    <List List sx={{ listStyleType: 'disc', pl: 4 }}>

                        <ListItem >
                            <ListItemIcon>
                                <ArrowCircleRightIcon />
                            </ListItemIcon>
                            <ListItemText primary="Provide accurate information to the best of your knowledge" />
                        </ListItem >
                        <ListItem >
                            <ListItemIcon>
                                <ArrowCircleRightIcon />
                            </ListItemIcon>
                            <ListItemText primary="Falsifying information will negatively impact the BREU score" />
                        </ListItem>
                        <ListItem >
                            <ListItemIcon>
                                <ArrowCircleRightIcon />
                            </ListItemIcon>
                            <ListItemText primary="Undesirability is best at it’s lowest!" />
                        </ListItem>
                    </List>
                </Grid>

            </Grid>
        </>
    );

}

export default Undesirability;