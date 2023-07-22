import { useEffect, useState, useRef } from "react";
import { DataGrid } from "@mui/x-data-grid";
import Radio from "@mui/material/Radio";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import PlayCircleFilledWhiteRoundedIcon from "@mui/icons-material/PlayCircleFilledWhiteRounded";
import ListItemText from "@mui/material/ListItemText";
import Header from "../../common/header";
import { Grid, Link, Typography } from "@mui/material";
import ButtonField from "../../common/button";
import { Button } from "@mui/material";
import { NavLink, useNavigate } from "react-router-dom";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import CustomizedDialogs from "../../common/customDailougeBox";
import { useSelector, useDispatch } from "react-redux";
import { fetchAllCandidates } from "../../features/adminSlice";
import ReactPlayer from "react-player";

const AdminDashboard = () => {
  const [age, setAge] = useState("");
  const [video, setVideo] = useState("");
  const [open, setOpen] = useState(false);
  const { adminSlice, adminAuthSlice } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    if (adminAuthSlice?.isAuthenticated) {
      dispatch(fetchAllCandidates());
    }
  }, [adminAuthSlice?.isAuthenticated]);

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const handleConflictClick = (data) => {
    console.log(data?.row?.videos[0]?.conflictResolutionVideo?.link);
    setVideo(data?.row?.videos[0]?.conflictResolutionVideo?.link);
    setOpen(true);
  };

  const handleInterestingClick = (data) => {
    console.log(data?.row?.videos[0]?.interestingProjectVideo?.link);
    setVideo(data?.row?.videos[0]?.interestingProjectVideo?.link);
    setOpen(true);
  };

  const columns = [
    {
      field: "firstName",
      headerName: "First Name",
      width: 150,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "email",
      headerName: "Email",
      width: 150,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "believability",
      headerName: "Believability",
      width: 100,
      headerAlign: "center",
      align: "center",
      renderCell: (params) => (
        <NavLink to={`/adminBelievability/${params.row._id}`}>
          View Data
        </NavLink>
      ),
    },
    {
      field: "firstvideo",
      headerName: "Video 1",
      // width: 100,
      headerAlign: "center",
      align: "center",
      renderCell: (params) => {
        if (params?.row?.videos[0]?.conflictResolutionVideo?.link) {
          return (
            <PlayCircleFilledWhiteRoundedIcon
              fontSize="large"
              sx={{ color: "blue" }}
              onClick={() => handleConflictClick(params)}
            />
          );
        } else {
          <Typography>No Video Found</Typography>;
        }
      },
    },
    {
      field: "secondvideo",
      headerName: "Video 2",
      // width: 100,
      headerAlign: "center",
      align: "center",
      renderCell: (params) => {
        if (params?.row?.videos[0]?.interestingProjectVideo?.link) {
          return (
            <PlayCircleFilledWhiteRoundedIcon
              fontSize="large"
              sx={{ color: "blue" }}
              onClick={() => handleInterestingClick(params)}
            />
          );
        } else {
          <Typography>No Video Found</Typography>;
        }
      },
    },

    {
      field: "score",
      headerName: "Score",
      headerAlign: "center",
      width: 200,
      sortable: false,
      align: "center",
      renderCell: (params) => (
        <Button
          onClick={() => navigate(`/scoring/${params?.row?._id}`)}
          variant="contained"
        >
          Enter Score
        </Button>
      ),
    },
  ];

  const navigate = useNavigate();
  return (
    <>
      <Header name="Recruiter" caption={"Your Choice Matters"} />

      <Grid container>
        <Grid item xs={12} md={12}>
          <div style={{ height: 350, width: "100%" }}>
            <DataGrid
              getRowId={(row) => row._id}
              rows={adminSlice?.candidateList || []}
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
          children={
            <ReactPlayer
              config={{
                file: {
                  attributes: {
                    controlsList: "nodownload",
                  },
                },
              }}
              url={video}
              width="700px"
              height="400px"
              // style={{ pointerEvents: 'none', display: 'block', margin: 'auto' }}
              controls
            />
            // <video width="700px" height="400px" autoplay>
            //   <source src={video} type="video/mp4" />
            // </video>
          }
          openPopup={open}
          setOpenPopup={setOpen}
        />
      </Grid>
    </>
  );
};

export default AdminDashboard;
