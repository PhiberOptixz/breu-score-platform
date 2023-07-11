import { useEffect, useState, useRef } from "react";
import { DataGrid } from "@mui/x-data-grid";
import Radio from "@mui/material/Radio";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import PlayCircleFilledWhiteRoundedIcon from '@mui/icons-material/PlayCircleFilledWhiteRounded';
import ListItemText from '@mui/material/ListItemText';
import Header from "../../common/header";
import { Grid, Link } from "@mui/material";
import ButtonField from "../../common/button";
import { Button } from '@mui/material';
import { NavLink, useNavigate } from "react-router-dom";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import CustomizedDialogs from "../../common/customDailougeBox";

const Admin = () => {

    const [age, setAge] = useState('');
    const [video, setVideo] = useState('');
    const [open, setOpen] = useState(false);

    const handleChange = (event) => {
        setAge(event.target.value);
    };

    const handleClick = () => {
        setVideo("https://dz1fjbrbuvu21.cloudfront.net/video1.mp4")
        setOpen(true);
    }

    const rows = [
        { id: 1, firstName: "Javier",email:"Javier@mail.com", firstvideo: "videolink,", secondvideo: "videolink" },
        { id: 2, firstName: "Xenon",email:"Xenon@mail.com", firstvideo: "videolink,", secondvideo: "videolink" },
        { id: 3, firstName: "Zendo",email:"Zendo@mail.com", firstvideo: "videolink,", secondvideo: "videolink" },
        { id: 4, firstName: "Flappy",email:"Flappy@mail.com", firstvideo: "videolink,", secondvideo: "videolink" },
        { id: 5, firstName: "Ronin", email:"Ronin@mail.com", firstvideo: "videolink,", secondvideo: "videolink" },
    ];

    const columns = [
        // {
        // // headerAlign: 'center',
        // 
        // },
        {
            field: "id",
            headerName: "ID",
            width: 100,
            headerAlign: 'center',
            align: 'center',
        },
        {
            field: "firstName",
            headerName: "First Name",
            width: 150,
            headerAlign: 'center',
            align: 'center',
        },
        {
            field: "email",
            headerName: "Email",
            width: 150,
            headerAlign: 'center',
            align: 'center',
        },
        {
            field: "believability",
            headerName: "Believability",
            width: 100,
            headerAlign: 'center',
            align: 'center',
            renderCell: (params) => (
                <NavLink>View Data</NavLink>
            )
        },
        {
            field: "firstvideo",
            headerName: "Video 1",
            // width: 100,
            headerAlign: 'center',
            align: 'center',
            renderCell: (params) => (
                <PlayCircleFilledWhiteRoundedIcon fontSize="large" onClick={handleClick} sx={{ color: "blue" }} />
            )
        },
        {
            field: "secondvideo",
            headerName: "Video 2",
            // width: 100,
            headerAlign: 'center',
            align: 'center',
            renderCell: (params) => (
                <PlayCircleFilledWhiteRoundedIcon fontSize="large" sx={{ color: "blue" }} />
            )
        },
        
        {
            field: "score",
            headerName: "Score",
            headerAlign: 'center',
            width: 200,
            sortable: false,
            align: 'center',
            renderCell: (params) => (
                <Button variant="contained">Enter Score</Button>
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
                    <div style={{ height: 350, width: '100%' }}>
                        <DataGrid
                            rows={rows}
                            columns={columns}
                            autoHeight
                            disableColumnMenu
                            hideFooterSelectedRowCount
                            // rowsPerPageOptions={[100]}
                            // autoPageSize
                            disableRowSelectionOnClick
                            pagination
                        />
                    </div>
                </Grid>

                <CustomizedDialogs
                    title={"Video"}
                    children={<video width="700px" height="400px" autoplay>
                        <source src={video} type="video/mp4" />
                    </video>}
                    openPopup={open}
                    setOpenPopup={setOpen}
                />

            </Grid>
        </>
    );

}

export default Admin;




