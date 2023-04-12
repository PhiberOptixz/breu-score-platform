import React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';



function BreuButton(props) {

    const { variant, color, text, onClick } = props;

    return (
        <Button
            variant={variant}
            color={color}
            onClick={onClick}
        >
            {text}
        </Button>
    );
}

BreuButton.propTypes = {
    variant: PropTypes.oneOf(['contained', 'outlined', 'text']),
    color: PropTypes.oneOf(['primary', 'secondary']),
    text: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
};

BreuButton.defaultProps = {
    variant: 'contained',
    color: 'primary',
};

export default BreuButton;
