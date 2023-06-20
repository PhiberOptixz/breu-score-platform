import { useEffect, useState, useRef } from "react";
import { DataGrid } from "@mui/x-data-grid";
import Radio from "@mui/material/Radio";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import ListItemText from '@mui/material/ListItemText';
import Header from "../../common/header";
import { Grid } from "@mui/material";
import ButtonField from "../../common/button";
import { Button } from '@mui/material';
import { useNavigate } from "react-router-dom";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const RecruiterLanding = () => {

    const [age, setAge] = useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };

    const rows = [
        { id: 1, firstName: "Javier", lastName: "Obrien" },
        // { id: 2, firstName: "Kate", lastName: "Miles" },
        // { id: 3, firstName: "Kim", lastName: "Jimenez" },
        // { id: 4, firstName: "Juana", lastName: "Thornton" },
        // { id: 5, firstName: "Prashant", lastName: "Jangam" }
    ];

    const columns = [
        {
            field: "id",
            headerName: "ID"
        },
        {
            field: "firstName",
            headerName: "First Name",
            width: 150
        },
        {
            field: "lastName",
            headerName: "Last Name",
            width: 150
        },
        {
            field: "dropdown",
            headerName: "Company",
            width: 200,
            sortable: false,
            renderCell: (params) => (
                <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                    <InputLabel id="demo-simple-select-standard-label">Company</InputLabel>
                    <Select
                        labelId="demo-simple-select-standard-label"
                        id="demo-simple-select-standard"
                        value={age}
                        onChange={handleChange}
                        label="Age"
                        autoWidth
                    >
                        <MenuItem value={10}>Infy</MenuItem>
                        <MenuItem value={20}>TCS</MenuItem>
                        <MenuItem value={30}>HoneyWell</MenuItem>
                    </Select>
                </FormControl>
            )
        },
        {
            field: "button",
            headerName: "Confirmation",
            sortable: false,
            renderCell: (params) => (
                <Button variant="contained">Send</Button>
            )
        },
    ];

    const navigate = useNavigate();
    return (
        <>
            <Header
                name="Recruiter"
                caption={"Your Choice Matters"}
            />

            <Grid container>
                <Grid item xs={12} md={12}>
                    <DataGrid
                        rowsPerPageOptions={[]}
                        rows={rows}
                        columns={columns}
                        autoHeight
                        disableColumnMenu
                        // componentsProps={{
                        //     pagination: {
                        //       count: 1,
                        //       page: 0,
                        //       component: "div", // here
                        //       onPageChange: () => {},
                        //       rowsPerPage: 10,
                        //       rowsPerPageOptions: [],
                        //       onRowsPerPageChange: () => {},
                        //     //   labelRowsPerPage: "Zeilen pro Seite",
                        //       labelDisplayedRows: () => `page ${1} of ${1}`,
                        //       nextIconButtonProps: {
                        //         disabled: true
                        //       }
                        //     }
                        //   }}

                    />
                </Grid>

            </Grid>
        </>
    );

}

export default RecruiterLanding;




