import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';

function BreuBox(props) {
  const { children, display, flexDirection, justifyContent, alignItems, bgcolor, p } = props;

  return (
    <Box
      display={display}
      flexDirection={flexDirection}
      justifyContent={justifyContent}
      alignItems={alignItems}
      bgcolor={bgcolor}
      p={p}
    >
      {children}
    </Box>
  );
}

BreuBox.propTypes = {
  children: PropTypes.node.isRequired,
  display: PropTypes.oneOf(['flex', 'block', 'inline', 'grid']),
  flexDirection: PropTypes.oneOf(['row', 'row-reverse', 'column', 'column-reverse']),
  justifyContent: PropTypes.oneOf(['flex-start', 'center', 'flex-end', 'space-between', 'space-around', 'space-evenly']),
  alignItems: PropTypes.oneOf(['flex-start', 'center', 'flex-end', 'stretch', 'baseline']),
  bgcolor: PropTypes.string,
  p: PropTypes.number,
};

BreuBox.defaultProps = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-start',
  alignItems: 'stretch',
};

export default BreuBox;
