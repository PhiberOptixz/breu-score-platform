import React from 'react';
import PropTypes from 'prop-types';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';


function BreuSelect(props) {
    const { id, options, value, onChange, sx, size,variant, placeholder } = props;

    return (
        <FormControl sx={{ m: 1, minWidth: 80 }} size={size} variant={variant}>
            {/* <InputLabel>{label}</InputLabel> */}
            <Select
                id={id}
                value={value}
                onChange={onChange}
                sx={sx}
            >
                <MenuItem value="">
                    <em>{placeholder}</em>
                </MenuItem>
                {options.map((option) => (
                    <MenuItem key={option.name} value={option.name}>
                        {option.name}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    );
}

// BreuSelect.propTypes = {
//     // label: PropTypes.string.isRequired,
//     options: PropTypes.arrayOf(
//         PropTypes.shape({
//             value: PropTypes.any.isRequired,
//             label: PropTypes.string.isRequired,
//         })
//     ).isRequired,
//     value: PropTypes.any.isRequired,
//     onChange: PropTypes.func.isRequired,
// };

export default BreuSelect;
