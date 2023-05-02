import React from "react";
import Autocomplete from "@mui/material/Autocomplete";
// import { makeStyles } from "@material-ui/core/styles";
import TextField from "@mui/material/TextField";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";

// const useStyles = makeStyles((theme) => ({
//   root: {
//     width: "100%",
//     "& > * + *": {
//       marginTop: theme.spacing(1),
//       padding: "8%",
//     },
//   },
// }));

const SelectSingleValues = ({
  showLable,
  heading,
  placeholder,
  errors,
  refs,
  name,
  className,
  selected,
  onSelect,
  label,
  size,
  values,
  disabled,
  sx,
}) => {
  //   const classes = useStyles();

  const errorText = (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flexWrap: "wrap",
        marginTop: "2%",
      }}
    >
      <ErrorOutlineIcon fontSize="small" />
      <span> {errors}</span>
    </div>
  );
  return (
    <div
    // className={classes.root}
    >
      {showLable && <div className="fieldHeading">{heading}</div>}
      <Autocomplete
        id="tags-outlined"
        options={values}
        getOptionLabel={(option) => option.name || ""}
        getOptionSelected={(option, selected) => option.name === selected.name}
        defaultValue={selected}
        disabled={disabled || false}
        value={selected}
        onChange={(event, value) => {
          onSelect(value);
        }}
        renderInput={(params) => (
          <TextField
            {...params}
            disabled={disabled || false}
            placeholder={placeholder}
            InputLabelProps={{ shrink: false }}
            label={label}
            variant="outlined"
            inputRef={refs}
            size={size || "small"}
            id={name}
            name={name}
            error={errors ? true : false}
            helperText={errors ? errorText : null}
            sx={sx}
          />
        )}
      />
    </div>
  );
};

export default SelectSingleValues;
