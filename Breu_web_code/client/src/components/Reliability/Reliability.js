import React, { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import Header from "../../common/header";
import { Typography, TextField } from "@mui/material";
import ButtonField from "../../common/button";
import CardContent from "@mui/material/CardContent";
import Radio from "@mui/material/Radio";
import {
  fetchQuestions,
  addReliabilityData,
} from "../../features/reliabilitySlice";
import { useDispatch, useSelector } from "react-redux";
import ConfirmationDialog from "../../common/ConfirmationDialog";
import { useNavigate } from "react-router-dom";

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
  const [selectedValues, setSelectedValues] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (!auth?.user?.completedReliability) {
      dispatch(fetchQuestions());
    }
    document.title = "BREU.AI - Reliability";
  }, []);

  const handleChoice = (e, ele) => {
    const values = selectedValues?.find(
      (item) => item?.questionId?.toString() === ele?._id?.toString()
    );
    const filteredValues = selectedValues?.filter(
      (item) => item?.questionId?.toString() !== ele?._id?.toString()
    );
    if (values) {
      const newSelectedValue = {
        questionId: ele?._id,
        selectedChoice: e?.target?.value,
      };
      setSelectedValues([...filteredValues, newSelectedValue]);
    } else {
      const newSelectedValue = {
        questionId: ele?._id,
        selectedChoice: e?.target?.value,
      };
      setSelectedValues([...selectedValues, newSelectedValue]);
    }
  };

  useEffect(() => {
    if (reliability?.questionsData) {
      const createQuestionsMeta = reliability?.questionsData?.map((item) => {
        return {
          questionId: item?._id,
          selectedChoice: "",
        };
        setSelectedValues(createQuestionsMeta);
      });
    }
  }, [reliability?.questionsData]);

  const openDialog = () => {
    setIsOpen(true);
  };

  const handleSubmit = () => {
    const data = {
      candidateId: auth?.user?._id,
      questionsAttended: selectedValues,
    };
    const apiData = {
      data,
      navigate,
    };
    dispatch(addReliabilityData(apiData));
  };

  return (
    <>
      <Header
        name="Reliability"
        caption="Make the world believe in your skills"
      />
      <Grid container>
        {isOpen && (
          <ConfirmationDialog
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            title={"Submit"}
            content={{
              mainContent:
                selectedValues.length === 12
                  ? "Are you sure you want to submit the Reliability answers?"
                  : "Are you sure you want to submit the Reliability answers? You have not answered all the questions",
              subContent: "You can't undo this operation",
            }}
            handleSubmit={handleSubmit}
          />
        )}
        <Grid item xs={1} md={2}></Grid>
        <Grid item xs={10} md={8}>
          {!auth?.user?.completedReliability ? (
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
              {reliability?.questionsData?.map((item, idx) => {
                return (
                  <>
                    <Grid
                      item
                      xs={12}
                      key={item?._id}
                      md={12}
                      sx={{ marginTop: "5%" }}
                    >
                      <Typography
                        sx={{
                          fontFamily: "Inter",
                          fontWeight: "700",
                          fontSize: "24px",
                        }}
                      >
                        {idx + 1}
                        {")"} {item?.description}
                      </Typography>

                      <Grid item xs={12} md={12}>
                        {item?.codeSnippet ? (
                          <pre className="codesnippet">
                            <code>{item?.codeSnippet}</code>
                          </pre>
                        ) : null}
                      </Grid>
                      {item?.questionChoices?.map((choice, idx) => {
                        return (
                          <Grid item xs={12} md={12} key={idx + choice}>
                            <CardContent
                              className="optionCard"
                              sx={
                                selectedValues?.find?.(
                                  (val) =>
                                    val.questionId?.toString() ===
                                    item?._id?.toString()
                                )?.selectedChoice === choice
                                  ? {
                                      backgroundColor: "#0A71B9",
                                      color: "#fff",
                                    }
                                  : {}
                              }
                            >
                              <Grid container>
                                <Grid item md={11} xs={11}>
                                  <Typography
                                    className="optionCardParagraph"
                                    sx={
                                      selectedValues?.find?.(
                                        (val) =>
                                          val.questionId?.toString() ===
                                          item?._id?.toString()
                                      )?.selectedChoice === choice
                                        ? {
                                            color: "#fff",
                                          }
                                        : {}
                                    }
                                  >
                                    {choice}
                                  </Typography>
                                </Grid>
                                <Grid item md={1} xs={1} alignItems="top">
                                  <Radio
                                    sx={
                                      selectedValues?.find?.(
                                        (val) =>
                                          val.questionId?.toString() ===
                                          item?._id?.toString()
                                      )?.selectedChoice === choice
                                        ? {
                                            "& .MuiSvgIcon-root": {
                                              marginTop: "-8%",
                                            },
                                            "&, &.Mui-checked": {
                                              color: "#FFF",
                                              marginTop: "-8%",
                                            },
                                          }
                                        : {
                                            "& .MuiSvgIcon-root": {
                                              marginTop: "-8%",
                                            },
                                            "&, &.Mui-checked": {
                                              color: "#777E90",
                                              marginTop: "-8%",
                                            },
                                          }
                                    }
                                    // sx={{
                                    //   "& .MuiSvgIcon-root": {
                                    //     marginTop: "-8%",
                                    //   },
                                    //   "&, &.Mui-checked": {
                                    //     color: "#777E90",
                                    //     marginTop: "-8%",
                                    //   },
                                    // }}
                                    className="optionCardRadio"
                                    size="small"
                                    name={item?._id}
                                    checked={
                                      selectedValues?.find?.(
                                        (val) =>
                                          val.questionId?.toString() ===
                                          item?._id?.toString()
                                      )?.selectedChoice === choice
                                    }
                                    onChange={(e) => handleChoice(e, item)}
                                    value={choice}
                                  />
                                </Grid>
                              </Grid>
                            </CardContent>
                          </Grid>
                        );
                      })}
                    </Grid>
                  </>
                );
              })}
            </Grid>
          ) : (
            <Typography
              variant="h6"
              align="center"
              color={"red"}
              sx={{ marginTop: "30%" }}
            >
              You have already completed the Reliability Step. Please continue
              with Emotional & Undesirability Section
            </Typography>
          )}
        </Grid>
        <Grid item xs={1} md={2}></Grid>
      </Grid>

      <Grid container sx={{ marginTop: "2%", marginBottom: "2%" }}>
        <Grid item xs={0.5} md={1.5}></Grid>
        <Grid item xs={6} md={4} align="center">
          {!auth?.user?.completedReliability && (
            <ButtonField
              buttonStyle="submit"
              type="button"
              name="submit"
              color="primary"
              variant="contained"
              className="reliabilityButton"
              sx={{
                width: "60%",
                fontSize: "120%",
                backgroundColor: "#0a71b9",
              }}
              onClick={() => openDialog()}
            />
          )}
        </Grid>
        <Grid item xs={5.5} md={4}>
          {auth?.user?.completedReliability && (
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
              onClick={() => navigate("/emotional")}
            />
          )}

          <Grid item xs={0} md={2}></Grid>
        </Grid>
      </Grid>
    </>
  );
};
export default Reliability;
