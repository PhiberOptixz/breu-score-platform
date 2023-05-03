import React, { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import Header from "../../common/header";
import SingleChoiceQuestions from "../../common/SingleChoiceQuestions";
import { Typography } from "@mui/material";
import ButtonField from "../../common/button";
import CardContent from "@mui/material/CardContent";
import Radio from "@mui/material/Radio";

const code = `
{
  int (*p)[R][C];
  printf("%d",     sizeof(*p ));
  getchar();
  return 0;
}
`

const Reliability = () => {
  return (
    <>
      <Header name="Reliability" />
      <Grid container className="believabilityContainer">
        <Grid item  xs={3} md={3}></Grid>
        <Grid
          item
          xs={7}
          md={7}
          style={{ marginTop: "50px" }}
        >
          <Typography sx={{ fontFamily: 'Inter', fontWeight: "700", fontSize: "40px" }}>Java Test</Typography>
        </Grid>
        <Grid item  xs={2} md={2}></Grid>
        <Grid item
          xs={3}
          md={3}></Grid>
        <Grid
          item
          xs={7}
          md={7}
        >
          <Typography sx={{ fontFamily: 'Inter', fontWeight: "700", fontSize: "30px" }}>01-Predict the outpout of the following c program</Typography>
        </Grid>
        <Grid item
          xs={2}
          md={2}></Grid>
        <Grid item
          xs={3}
          md={3}></Grid>
        <Grid
          item
          xs={7}
          md={7}
          // style={{marginTop:"-30px"}}
        >
          <pre className="codesnippet">
            <code>
             {code}
            </code>
          </pre>
        </Grid>
        <Grid item
          xs={2}
          md={2}></Grid>

        <Grid item xs={3} md={3}></Grid>
        <Grid item xs={7} md={7}>
          <CardContent className="optionCard">
            <Grid container>
              <Grid item md={11} xs={11}>
                <Typography className="optionCardParagraph">120 200 16</Typography>
              </Grid>
              <Grid item md={1} xs={1} alignItems="top">
                <Radio
                  sx={{
                    "& .MuiSvgIcon-root": {
                    },
                    "&, &.Mui-checked": {
                      color: "#777E90",
                    },
                  }}
                  className="optionCardRadio"
                  size="small"
                />
              </Grid>
            </Grid>
          </CardContent>
        </Grid>
        <Grid item xs={2} md={2}></Grid>

        <Grid item xs={3} md={3}></Grid>
        <Grid item xs={7} md={7}>
          <CardContent className="optionCard">
            <Grid container>
              <Grid item md={11} xs={11}>
                <Typography className="optionCardParagraph">120 200 16</Typography>
              </Grid>
              <Grid item md={1} xs={1}>
                <Radio
                  sx={{
                    "&, &.Mui-checked": {
                      color: "#777E90",
                    },
                  }}
                  className="optionCardRadio"
                  size="small"
                />
              </Grid>
            </Grid>
          </CardContent>
        </Grid>
        <Grid item xs={2} md={2}></Grid>
        <Grid item xs={3} md={3}></Grid>
        <Grid item xs={7} md={7}>
          <CardContent className="optionCard">
            <Grid container>
              <Grid item md={11} xs={11}>
                <Typography className="optionCardParagraph">120 200 16</Typography>
              </Grid>
              <Grid item md={1} xs={1}>
                <Radio
                  sx={{
                    "&, &.Mui-checked": {
                      color: "#777E90",
                    },
                  }}
                  className="optionCardRadio"
                  size="small"
                />
              </Grid>
            </Grid>
          </CardContent>
        </Grid>
        <Grid item xs={2} md={2}></Grid>
        <Grid item xs={3} md={3}></Grid>
        <Grid item xs={7} md={7}>
          <CardContent className="optionCard">
            <Grid container>
              <Grid item md={11} xs={11}>
                <Typography className="optionCardParagraph">120 200 16</Typography>
              </Grid>
              <Grid item md={1} xs={1}>
                <Radio
                  sx={{
                    "&, &.Mui-checked": {
                      color: "#777E90",
                    },
                  }}
                  className="optionCardRadio"
                  size="small"
                />
              </Grid>
            </Grid>
          </CardContent>
        </Grid>
        <Grid item xs={2} md={2}></Grid>
        <Grid container sx={{ marginTop: "4%" }}>
          <Grid item xs={6} md={6} align="center">
            <ButtonField
              buttonStyle="submit"
              type="submit"
              name="submit"
              color="primary"
              variant="contained"
              sx={{
                width: "60%",
                backgroundColor: "#0a71b9",
              }}
            />
          </Grid>
          <Grid item xs={6} md={6}>
            <ButtonField
              buttonStyle="submit"
              type="submit"
              name="Next"
              color="primary"
              variant="contained"
              sx={{
                width: "60%",
                backgroundColor: "#5a5a5c",
              }}
            // onClick={() => navigate("/reliability")}
            />
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};
export default Reliability;
