import React from "react";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import TextField from "@mui/material/TextField";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import WarningIcon from "@mui/icons-material/Warning";

const TextFieldGroup = ({
  label,
  heading,
  type,
  inputClassName,
  className,
  startAdornment,
  name,
  size,
  value,
  multiline,
  rows,
  varient,
  disabled,
  onChange,
  onBlur,
  onFocus,
  onKeyPress,
  onKeyDown,
  autoFocus,
  labelShink,
  refs,
  showLable,
  errors,
  showPassword,
  passwordControl,
  placeholder,
  renderValue,
}) => {
  let icon = null;
  if (name === "password" || name === "confirmPassword") {
    icon = (
      <InputAdornment position="end">
        <IconButton
          aria-label="toggle password visibility"
          onClick={passwordControl}
          onMouseDown={(text) => text}
          size="small"
        >
          {showPassword ? (
            <VisibilityIcon fontSize="small" />
          ) : (
            <VisibilityOffIcon fontSize="small" />
          )}
        </IconButton>
      </InputAdornment>
    );
  }

  const errorText = (
    <p>
      <WarningIcon /> {errors}
    </p>
  );
  return (
    <>
      {showLable && <div className="fieldHeading">{heading}</div>}
      <TextField
        label={label}
        className={inputClassName}
        type={type}
        variant={varient || "outlined"}
        margin="dense"
        required
        placeholder={placeholder}
        inputRef={refs}
        id={name}
        size={size || "small"}
        name={name}
        disabled={disabled || false}
        onChange={onChange}
        onBlur={onBlur}
        onFocus={onFocus}
        onKeyPress={onKeyPress}
        onKeyDown={onKeyDown}
        autoFocus={autoFocus}
        fullWidth
        value={value}
        renderValue={renderValue}
        multiline={multiline}
        rows={rows}
        InputLabelProps={{ shrink: labelShink }}
        error={errors ? true : false}
        helperText={errors ? errorText : null}
        InputProps={{
          endAdornment: icon,
          className: className,
          startAdornment: startAdornment,
        }}
      />
    </>
  );
};

export default TextFieldGroup;
