import React, { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import Header from "../../common/header";
import SingleChoiceQuestions from "../../common/SingleChoiceQuestions";
import { Typography } from "@mui/material";
import ButtonField from "../../common/button";
import CardContent from "@mui/material/CardContent";
import Radio from "@mui/material/Radio";
import { fetchQuestions } from "../../features/reliabilitySlice";
import { useDispatch, useSelector } from "react-redux";

const code = `
{
  int (*p)[R][C];
  printf("%d",sizeof(*p ));
  getchar();
  return 0;
}
`;

const Reliability = () => {
  const dispatch = useDispatch();
  const { reliability, auth } = useSelector((state) => state);

  useEffect(() => {
    dispatch(fetchQuestions());
  }, []);

  return (
    <>
      <Header
        name="Reliability"
        caption="make the world believe in your skills"
      />
      <Grid container>
        <Grid item xs={1} md={2}></Grid>
        <Grid item xs={10} md={8}>
          <Grid container>
            <Grid item xs={12} md={12} sx={{ marginTop: "2%" }}>
              <Typography
                sx={{
                  fontFamily: "Inter",
                  fontWeight: "600",
                  fontSize: "36px",
                }}
              >
                Reliability Assessments
              </Typography>
            </Grid>
            {reliability?.questionsData?.map((item) => {
              return (
                <>
                  <Grid item xs={12} md={12} sx={{ marginTop: "1%" }}>
                    <Typography
                      sx={{
                        fontFamily: "Inter",
                        fontWeight: "700",
                        fontSize: "28px",
                      }}
                    >
                      {item?.description}
                    </Typography>

                    <Grid item xs={12} md={12}>
                      <pre className="codesnippet">
                        <code>{code}</code>
                      </pre>
                    </Grid>
                    {item?.questionChoices?.map((choice) => {
                      return (
                        <Grid item xs={12} md={12}>
                          <CardContent className="optionCard">
                            <Grid container>
                              <Grid item md={11} xs={11}>
                                <Typography className="optionCardParagraph">
                                  {choice}
                                </Typography>
                              </Grid>
                              <Grid item md={1} xs={1} alignItems="top">
                                <Radio
                                  sx={{
                                    "& .MuiSvgIcon-root": { marginTop: "-8%" },
                                    "&, &.Mui-checked": {
                                      color: "#777E90",
                                      marginTop: "-8%",
                                    },
                                  }}
                                  className="optionCardRadio"
                                  size="small"
                                />
                              </Grid>
                            </Grid>
                          </CardContent>
                        </Grid>
                      );
                    })}
                    {/* <Grid item xs={12} md={12}>
                      <CardContent className="optionCard">
                        <Grid container>
                          <Grid item md={11} xs={11}>
                            <Typography className="optionCardParagraph">
                              120 200 16
                            </Typography>
                          </Grid>
                          <Grid item md={1} xs={1} alignItems="top">
                            <Radio
                              sx={{
                                "& .MuiSvgIcon-root": { marginTop: "-8%" },
                                "&, &.Mui-checked": {
                                  color: "#777E90",
                                  marginTop: "-8%",
                                },
                              }}
                              className="optionCardRadio"
                              size="small"
                            />
                          </Grid>
                        </Grid>
                      </CardContent>
                    </Grid>

                    <Grid item xs={12} md={12}>
                      <CardContent className="optionCard">
                        <Grid container>
                          <Grid item md={11} xs={11}>
                            <Typography className="optionCardParagraph">
                              120 200 16
                            </Typography>
                          </Grid>
                          <Grid item md={1} xs={1} alignItems="top">
                            <Radio
                              sx={{
                                "& .MuiSvgIcon-root": { marginTop: "-8%" },
                                "&, &.Mui-checked": {
                                  color: "#777E90",
                                  marginTop: "-8%",
                                },
                              }}
                              className="optionCardRadio"
                              size="small"
                            />
                          </Grid>
                        </Grid>
                      </CardContent>
                    </Grid>

                    <Grid item xs={12} md={12}>
                      <CardContent className="optionCard">
                        <Grid container>
                          <Grid item md={11} xs={11}>
                            <Typography className="optionCardParagraph">
                              120 200 16
                            </Typography>
                          </Grid>
                          <Grid item md={1} xs={1} alignItems="top">
                            <Radio
                              sx={{
                                "& .MuiSvgIcon-root": { marginTop: "-8%" },
                                "&, &.Mui-checked": {
                                  color: "#777E90",
                                  marginTop: "-8%",
                                },
                              }}
                              className="optionCardRadio"
                              size="small"
                            />
                          </Grid>
                        </Grid>
                      </CardContent>
                    </Grid>

                    <Grid item xs={12} md={12}>
                      <CardContent className="optionCard">
                        <Grid container>
                          <Grid item md={11} xs={11}>
                            <Typography className="optionCardParagraph">
                              120 200 16
                            </Typography>
                          </Grid>
                          <Grid item md={1} xs={1} alignItems="top">
                            <Radio
                              sx={{
                                "& .MuiSvgIcon-root": { marginTop: "-8%" },
                                "&, &.Mui-checked": {
                                  color: "#777E90",
                                  marginTop: "-8%",
                                },
                              }}
                              className="optionCardRadio"
                              size="small"
                            />
                          </Grid>
                        </Grid>
                      </CardContent>
                    </Grid> */}
                  </Grid>
                </>
              );
            })}
            {/* <Grid item xs={12} md={12} sx={{ marginTop: "1%" }}>
              <Typography
                sx={{
                  fontFamily: "Inter",
                  fontWeight: "700",
                  fontSize: "28px",
                }}
              >
                01-Predict the outpout of the following c program
              </Typography>

              <Grid item xs={12} md={12}>
                <pre className="codesnippet">
                  <code>{code}</code>
                </pre>
              </Grid>

              <Grid item xs={12} md={12}>
                <CardContent className="optionCard">
                  <Grid container>
                    <Grid item md={11} xs={11}>
                      <Typography className="optionCardParagraph">
                        120 200 16
                      </Typography>
                    </Grid>
                    <Grid item md={1} xs={1} alignItems="top">
                      <Radio
                        sx={{
                          "& .MuiSvgIcon-root": { marginTop: "-8%" },
                          "&, &.Mui-checked": {
                            color: "#777E90",
                            marginTop: "-8%",
                          },
                        }}
                        className="optionCardRadio"
                        size="small"
                      />
                    </Grid>
                  </Grid>
                </CardContent>
              </Grid>

              <Grid item xs={12} md={12}>
                <CardContent className="optionCard">
                  <Grid container>
                    <Grid item md={11} xs={11}>
                      <Typography className="optionCardParagraph">
                        120 200 16
                      </Typography>
                    </Grid>
                    <Grid item md={1} xs={1} alignItems="top">
                      <Radio
                        sx={{
                          "& .MuiSvgIcon-root": { marginTop: "-8%" },
                          "&, &.Mui-checked": {
                            color: "#777E90",
                            marginTop: "-8%",
                          },
                        }}
                        className="optionCardRadio"
                        size="small"
                      />
                    </Grid>
                  </Grid>
                </CardContent>
              </Grid>

              <Grid item xs={12} md={12}>
                <CardContent className="optionCard">
                  <Grid container>
                    <Grid item md={11} xs={11}>
                      <Typography className="optionCardParagraph">
                        120 200 16
                      </Typography>
                    </Grid>
                    <Grid item md={1} xs={1} alignItems="top">
                      <Radio
                        sx={{
                          "& .MuiSvgIcon-root": { marginTop: "-8%" },
                          "&, &.Mui-checked": {
                            color: "#777E90",
                            marginTop: "-8%",
                          },
                        }}
                        className="optionCardRadio"
                        size="small"
                      />
                    </Grid>
                  </Grid>
                </CardContent>
              </Grid>

              <Grid item xs={12} md={12}>
                <CardContent className="optionCard">
                  <Grid container>
                    <Grid item md={11} xs={11}>
                      <Typography className="optionCardParagraph">
                        120 200 16
                      </Typography>
                    </Grid>
                    <Grid item md={1} xs={1} alignItems="top">
                      <Radio
                        sx={{
                          "& .MuiSvgIcon-root": { marginTop: "-8%" },
                          "&, &.Mui-checked": {
                            color: "#777E90",
                            marginTop: "-8%",
                          },
                        }}
                        className="optionCardRadio"
                        size="small"
                      />
                    </Grid>
                  </Grid>
                </CardContent>
              </Grid>
            </Grid> */}
          </Grid>
        </Grid>
        <Grid item xs={1} md={2}></Grid>
      </Grid>

      <Grid container sx={{ marginTop: "2%", marginBottom: "2%" }}>
        <Grid item xs={0.5} md={1.5}></Grid>
        <Grid item xs={6} md={4} align="center">
          <ButtonField
            buttonStyle="submit"
            type="submit"
            name="submit"
            color="primary"
            variant="contained"
            className="reliabilityButton"
            sx={{
              width: "60%",
              fontSize: "120%",
              backgroundColor: "#0a71b9",
            }}
          />
        </Grid>
        <Grid item xs={5.5} md={4}>
          <ButtonField
            buttonStyle="submit"
            type="submit"
            name="Next"
            color="primary"
            variant="contained"
            className="reliabilityButton1"
            sx={{
              width: "60%",
              fontSize: "120%",
              backgroundColor: "#5a5a5c",
            }}
            // onClick={() => navigate("/reliability")}
          />
          <Grid item xs={0} md={2}></Grid>
        </Grid>
      </Grid>
    </>
  );
};
export default Reliability;
