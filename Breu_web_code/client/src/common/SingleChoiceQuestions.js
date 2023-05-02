import React, { useEffect, useState } from "react";
import Radio from "@mui/material/Radio";
import TextField from "@mui/material/TextField";
import { Grid } from "@mui/material";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import RadioGroup from "@mui/material/RadioGroup";

const SingleChoiceQuestions = ({
  optionValues,
  handleRadio,
  handleOptionValues,
  selectedValue,
  questionType,
}) => {
  return (
    <FormControl fullWidth>
      <Grid
        container
        spacing={1}
        justifyContent="center"
        style={{ marginLeft: "20px" }}
      >
        <RadioGroup
          aria-labelledby="demo-controlled-radio-buttons-group"
          name="answer"
          value={selectedValue}
          onChange={(e) => handleRadio(e)}
        >
          <FormControlLabel
            value={optionValues?.option1}
            control={<Radio />}
            label={
              <TextField
                name="option1"
                variant="filled"
                value={optionValues?.option1 || ""}
                style={{ width: "50vw" }}
                onChange={(e) => handleOptionValues(e)}
                size="small"
                inputProps={{
                  style: {
                    height: "20px",
                  },
                }}
              />
            }
          />
          <FormControlLabel
            value={optionValues?.option2}
            control={<Radio />}
            label={
              <TextField
                name="option2"
                variant="filled"
                style={{ width: "50vw" }}
                value={optionValues?.option2 || ""}
                onChange={(e) => handleOptionValues(e)}
                size="small"
                inputProps={{
                  style: {
                    height: "20px",
                  },
                }}
              />
            }
          />
          <FormControlLabel
            value={optionValues?.option3 || ""}
            control={<Radio />}
            label={
              <TextField
                name="option3"
                variant="filled"
                style={{ width: "50vw" }}
                value={optionValues?.option3 || ""}
                onChange={(e) => handleOptionValues(e)}
                size="small"
                inputProps={{
                  style: {
                    height: "20px",
                  },
                }}
              />
            }
          />
          <FormControlLabel
            value={optionValues?.option4 || ""}
            control={<Radio />}
            label={
              <TextField
                name="option4"
                variant="filled"
                style={{ width: "50vw" }}
                value={optionValues?.option4 || ""}
                onChange={(e) => handleOptionValues(e)}
                size="small"
                inputProps={{
                  style: {
                    height: "20px",
                  },
                }}
              />
            }
          />
        </RadioGroup>
      </Grid>
    </FormControl>
  );
};

export default SingleChoiceQuestions;
