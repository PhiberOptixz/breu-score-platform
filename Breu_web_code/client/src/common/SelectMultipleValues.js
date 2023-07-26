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
//     },
//   },
// }));

const SelectMultipleValues = ({
  showLable,
  heading,
  dataList,
  onSelectData,
  errors,
  placeholder,
  refs,
  name,
  disabled,
  selectedData,
  label,
  className,
  size,
}) => {
  //   const classes = useStyles();

  // const comparer = (otherArray) => {
  //   return function (current) {
  //     return (
  //       otherArray &&
  //       otherArray.filter(function (other) {
  //         return other.name == current.name && other._id == current._id;
  //       }).length == 0
  //     );
  //   };
  // };

  // const favDatas = dataList && dataList.filter(comparer(selectedData));
  // const selData = selectedData && selectedData.filter(comparer(dataList));

  // const favDatasList = favDatas && favDatas.concat(selData);

  const errorText = (
    <p>
      <ErrorOutlineIcon /> {errors}
    </p>
  );
  return (
    <div
    // className={classes.root}
    >
      {showLable && <div className="fieldHeading">{heading}</div>}
      <Autocomplete
        multiple
        id="tags-outlined"
        options={dataList}
        getOptionLabel={(option) => option.name}
        getOptionSelected={(option, selectedData) =>
          option.name === selectedData.name
        }
        defaultValue={selectedData}
        disabled={disabled || false}
        value={selectedData}
        filterSelectedOptions
        onChange={(event, value) => {
          onSelectData(value);
        }}
        size={size || "small"}
        renderInput={(params) => (
          <TextField
            {...params}
            InputLabelProps={{ shrink: true }}
            variant="outlined"
            error={errors ? true : false}
            label={label}
            helperText={errors ? errorText : null}
            disabled={disabled || false}
            placeholder={placeholder}
            inputRef={refs}
            className={className ? className : null}
            id={name}
            name={name}
            // InputProps={{
            //     className: className
            // }}
          />
        )}
      />
    </div>
  );
};

export default SelectMultipleValues;
