import { useEffect, useState, useRef } from "react";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import ListItemText from '@mui/material/ListItemText';
import Header from "../../common/header";
import { Grid } from "@mui/material";
import ButtonField from "../../common/button";
import { useNavigate } from "react-router-dom";
import Checkbox from '@mui/material/Checkbox';



const Undesirability = () => {
    const navigate = useNavigate();
    const [checked, setChecked] = useState(false);

    const handleChange = (event) => {
        setChecked(event.target.checked);
    };

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
                <Grid item xs={10} md={10} style={{marginTop:"4%"}} >
                    <Checkbox
                        // label="I agree to the terms and conditions"
                        checked={checked}
                        onChange={handleChange}
                        inputProps={{ 'aria-label': 'controlled' }}
                    />
                    <span>"I understand the above conditions and certify that the provided information is true to the best of my knowledge"</span>
                </Grid>
                <Grid item xs={2} md={2} sx={{ marginTop: "4%" }}>
               { checked ?   
                    <ButtonField
                        buttonStyle="submit"
                        type="submit"
                        name="Next"
                        color="primary"
                        variant="contained"
                        sx={{
                            width: "30%",
                            backgroundColor: "#5a5a5c",
                        }}
                        onClick={() => navigate("/breuscore")}
                    />
                        :
                <ButtonField
                        disabled
                        buttonStyle="submit"
                        type="submit"
                        name="Next"
                        color="primary"
                        variant="contained"
                        sx={{
                            width: "30%",
                            backgroundColor: "#5a5a5c",
                        }}
                        onClick={() => navigate("/breuscore")}
                    />
}
                </Grid>
            </Grid>
        </>
    );

}

export default Undesirability;