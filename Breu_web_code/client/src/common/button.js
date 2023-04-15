// import React from 'react';
// import PropTypes from 'prop-types';
// import Button from '@mui/material/Button';



// function BreuButton(props) {

//     const { variant, color, text, onClick } = props;

//     return (
//         <Button
//             variant={variant}
//             color={color}
//             onClick={onClick}
//         >
//             {text}
//         </Button>
//     );
// }

// BreuButton.propTypes = {
//     variant: PropTypes.oneOf(['contained', 'outlined', 'text']),
//     color: PropTypes.oneOf(['primary', 'secondary']),
//     text: PropTypes.string.isRequired,
//     onClick: PropTypes.func.isRequired,
// };

// BreuButton.defaultProps = {
//     variant: 'contained',
//     color: 'primary',
// };

// export default BreuButton;


import React from "react";
// import { withStyles } from "@material-ui/core/styles";
import { Button } from "@mui/material";
// import { $themeBlue } from "./Colors";

export default function ButtonField({
  name,
  type,
  variant,
  buttonStyle,
  onClick,
  icon,
  component,
  fileTag,
  color,
  disabled,
  sx,
}) {
//   const ColorButton = withStyles((theme) => ({
//     root: {
//       color: "#fff",
//       backgroundColor: color ? color : $themeBlue ,
//       fontWeight: 600,
//       textTransform: "capitalize",
//       letterSpacing: 1,
//       "&:hover": {
//         backgroundColor: "#008dd2",
//       },
//     },
//   }))(MuiButton);
  return (
    <Button
      type={type}
      variant={variant || "contained"}
      component={component}
      color={color || "primary"}
      className={buttonStyle}
      onClick={onClick}
      disabled={disabled}
      sx={sx}
    >
      {icon} {name} {fileTag}
    </Button>
  );
}
