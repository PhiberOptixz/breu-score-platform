import React from 'react';
import PropTypes from 'prop-types';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';


function BreuSelect(props) {
    const { label, options, value, onChange } = props;

    return (
        <FormControl  sx={{ m: 1, minWidth: 80 }} >
            <InputLabel>{label}</InputLabel>
            <Select
                value={value}
                onChange={onChange}
            >
                {options.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                        {option.label}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    );
}

BreuSelect.propTypes = {
    label: PropTypes.string.isRequired,
    options: PropTypes.arrayOf(
        PropTypes.shape({
            value: PropTypes.any.isRequired,
            label: PropTypes.string.isRequired,
        })
    ).isRequired,
    value: PropTypes.any.isRequired,
    onChange: PropTypes.func.isRequired,
};

export default BreuSelect;
