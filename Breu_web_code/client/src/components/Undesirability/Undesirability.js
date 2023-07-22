import { useEffect, useState } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import ListItemText from "@mui/material/ListItemText";
import Header from "../../common/header";
import { Grid, Typography } from "@mui/material";
import ButtonField from "../../common/button";
import { useNavigate } from "react-router-dom";
import Checkbox from "@mui/material/Checkbox";
import { postDeclarationData } from "../../features/candidateSlice";
import { useDispatch, useSelector } from "react-redux";

const Undesirability = () => {
  const navigate = useNavigate();
  const [checked, setChecked] = useState(false);
  const { auth } = useSelector((state) => state);
  const dispatch = useDispatch();

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  const handleSubmit = () => {
    const apiData = {
      _id: auth?.user?._id,
      completedUndesirability: true,
    };
    const data = {
      apiData,
      navigate,
    };
    dispatch(postDeclarationData(data));
  };

  return (
    <>
      <Header
        name="Undesirability"
        caption={"Be real, be authentic, be you!"}
      />

      <Grid container>
        {auth?.user?.completedUndesirability ? (
          <>
            <Typography variant="h5" color={"red"} align="center">
              You have already declared the information. Please click next to
              see BREU score
            </Typography>
            <Typography align="center">
              <ButtonField
                onClick={() => navigate("/breuscore")}
                buttonStyle="submit"
                type="button"
                name="Next"
                variant="contained"
                color="primary"
                sx={{
                  width: "20%",
                  marginTop: "2%",
                  marginBottom: "2%",
                }}
              />
            </Typography>
          </>
        ) : (
          <>
            <Grid item xs={12} md={12}>
              <List List sx={{ listStyleType: "disc", pl: 4 }}>
                <ListItem>
                  <ListItemIcon>
                    <ArrowCircleRightIcon />
                  </ListItemIcon>
                  <ListItemText primary="Provide accurate information to the best of your knowledge" />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <ArrowCircleRightIcon />
                  </ListItemIcon>
                  <ListItemText primary="Falsifying information will negatively impact the BREU score" />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <ArrowCircleRightIcon />
                  </ListItemIcon>
                  <ListItemText primary="Undesirability is best at it’s lowest!" />
                </ListItem>
              </List>
            </Grid>
            <Grid container>
              <Grid
                item
                xs={2}
                md={1}
                style={{ marginTop: "7px" }}
                align="center"
              >
                <Checkbox
                  // label="I agree to the terms and conditions"
                  checked={checked}
                  onChange={handleChange}
                  inputProps={{ "aria-label": "controlled" }}
                />
              </Grid>
              <Grid item xs={10} md={9}>
                <p>
                  I hereby declare that the information given by me in the
                  Believability, Reliability and Emotional intelligibility
                  sections is true, complete and correct to the best of my
                  knowledge and belief and that nothing has been concealed or
                  distorted.
                </p>
              </Grid>
              <Grid item xs={12} md={2} sx={{ marginTop: "4%" }} align="center">
                <ButtonField
                  disabled={checked ? false : true}
                  buttonStyle="submit"
                  type="submit"
                  name="Submit"
                  color="primary"
                  variant="contained"
                  sx={{
                    width: "30%",
                    backgroundColor: "#5a5a5c",
                  }}
                  onClick={() => handleSubmit()}
                />
              </Grid>
            </Grid>
          </>
        )}
      </Grid>
    </>
  );
};

export default Undesirability;
