// import React from 'react';
// import PropTypes from 'prop-types';
// import { makeStyles } from '@mui/styles';
// import TextField from '@mui/material/TextField';

// const useStyles = makeStyles((theme) => ({
//   root: {
//     '& .MuiOutlinedInput-root': {
//       '& fieldset': {
//         borderColor: theme.palette.primary.main,
//       },
//       '&:hover fieldset': {
//         borderColor: theme.palette.secondary.main,
//       },
//       '&.Mui-focused fieldset': {
//         borderColor: theme.palette.secondary.main,
//       },
//     },
//   },
// }));

// function ReusableTextField(props) {
//   const classes = useStyles();
//   const { label, value, onChange, type, placeholder, disabled, multiline, rows, fullWidth, required, variant } = props;

//   return (
//     <TextField
//       className={classes.root}
//       label={label}
//       value={value}
//       onChange={onChange}
//       type={type}
//       placeholder={placeholder}
//       disabled={disabled}
//       multiline={multiline}
//       rows={rows}
//       fullWidth={fullWidth}
//       required={required}
//       variant={variant}
//       InputLabelProps={{ shrink: true }}
//       InputProps={{ disableUnderline: true }}
//     />
//   );
// }

// ReusableTextField.propTypes = {
//   label: PropTypes.string.isRequired,
//   value: PropTypes.string.isRequired,
//   onChange: PropTypes.func.isRequired,
//   type: PropTypes.string,
//   placeholder: PropTypes.string,
//   disabled: PropTypes.bool,
//   multiline: PropTypes.bool,
//   rows: PropTypes.number,
//   fullWidth: PropTypes.bool,
//   required: PropTypes.bool,
//   variant: PropTypes.oneOf(['standard', 'outlined', 'filled']),
// };

// ReusableTextField.defaultProps = {
//   type: 'text',
//   multiline: false,
//   fullWidth: false,
//   required: false,
//   variant: 'outlined',
// };

// export default ReusableTextField;


import React from 'react';
import { InputAdornment, IconButton, TextField } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material'
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';

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
  sx,
}) => {

  let icon = null;
  if (name === 'password' || name === 'confirmPassword') {
    icon = (
      <InputAdornment position="end">
        <IconButton
          aria-label="toggle password visibility"
          onClick={passwordControl}
          onMouseDown={text => (text)}
          size="small"
        >
          {showPassword ? <Visibility fontSize="small" /> : <VisibilityOff fontSize="small" />}
        </IconButton>
      </InputAdornment>
    )
  }

  const errorText = (<div style={{
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap',
  }}>
    <ErrorOutlineIcon fontSize='small' /><span> {errors}</span>
  </div>);

  return (
    <>
      {showLable && <div className="fieldHeading">{heading}</div>}
      <TextField
        label={label}
        className={inputClassName}
        type={type}
        variant={varient || 'outlined'}
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
        InputLabelProps={{ shrink: labelShink ? labelShink : false }}
        error={errors ? true : false}
        helperText={errors ? errorText : null}
        InputProps={{
          endAdornment: icon,
          className: className,
          startAdornment: startAdornment
        }}
        sx={sx}
      />
    </>
  );
};

export default TextFieldGroup;