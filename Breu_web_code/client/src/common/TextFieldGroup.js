import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@mui/styles';
import TextField from '@mui/material/TextField';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: theme.palette.primary.main,
      },
      '&:hover fieldset': {
        borderColor: theme.palette.secondary.main,
      },
      '&.Mui-focused fieldset': {
        borderColor: theme.palette.secondary.main,
      },
    },
  },
}));

function ReusableTextField(props) {
  const classes = useStyles();
  const { label, value, onChange, type, placeholder, disabled, multiline, rows, fullWidth, required, variant } = props;

  return (
    <TextField
      className={classes.root}
      label={label}
      value={value}
      onChange={onChange}
      type={type}
      placeholder={placeholder}
      disabled={disabled}
      multiline={multiline}
      rows={rows}
      fullWidth={fullWidth}
      required={required}
      variant={variant}
      InputLabelProps={{ shrink: true }}
      InputProps={{ disableUnderline: true }}
    />
  );
}

ReusableTextField.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  multiline: PropTypes.bool,
  rows: PropTypes.number,
  fullWidth: PropTypes.bool,
  required: PropTypes.bool,
  variant: PropTypes.oneOf(['standard', 'outlined', 'filled']),
};

ReusableTextField.defaultProps = {
  type: 'text',
  multiline: false,
  fullWidth: false,
  required: false,
  variant: 'outlined',
};

export default ReusableTextField;
