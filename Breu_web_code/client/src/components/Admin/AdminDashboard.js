import { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import PlayCircleFilledWhiteRoundedIcon from "@mui/icons-material/PlayCircleFilledWhiteRounded";
import ListItemText from "@mui/material/ListItemText";
import Header from "../../common/header";
import { Grid, Link, Typography } from "@mui/material";
import { Button } from "@mui/material";
import { NavLink, useNavigate } from "react-router-dom";
import CustomizedDialogs from "../../common/customDailougeBox";
import { useSelector, useDispatch } from "react-redux";
import BreuSelect from "../../common/selectSingleValue";
import {
  fetchAllCandidates,
  fetchAllRecruiters,
  linkCandidateRecruiter,
} from "../../features/adminSlice";
import ReactPlayer from "react-player";
import { fetchReliabilityResults } from "../../features/reliabilitySlice";

const AdminDashboard = () => {
  const [age, setAge] = useState("");
  const [video, setVideo] = useState("");
  const [videoTitle, setVideoTitle] = useState("");
  const [open, setOpen] = useState(false);
  const [openRecruiter, setOpenRecruiter] = useState(false);
  const [recruiterList, setRecruiterList] = useState([]);
  const [selectedRecruiter, setSelectedRecruiter] = useState({});
  const [selectedUser, setSelectedUser] = useState({});
  const [resultOpen, setResultOpen] = useState(false);
  const { adminSlice, adminAuthSlice, reliability } = useSelector(
    (state) => state
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (adminAuthSlice?.isAuthenticated) {
      dispatch(fetchAllCandidates());
      dispatch(fetchAllRecruiters());
    }
  }, [adminAuthSlice?.isAuthenticated]);

  useEffect(() => {
    if (adminSlice?.recruiterList) {
      const recruiterList = adminSlice?.recruiterList?.map((item) => {
        return {
          _id: item?._id,
          name: item?.recruiterName,
        };
      });
      setRecruiterList(recruiterList);
    }
  }, [adminSlice?.recruiterList]);

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const handleConflictClick = (data) => {
    setVideoTitle(
      "Describe your recent project failure, how did u cope up with the situation & recover from it."
    );
    setVideo(data?.row?.videos[0]?.conflictResolutionVideo?.link);
    setOpen(true);
  };

  const handleInterestingClick = (data) => {
    setVideoTitle(
      "Describe your recent & most complex project in STAR format."
    );
    setVideo(data?.row?.videos[0]?.interestingProjectVideo?.link);
    setOpen(true);
  };

  const handleResult = (data) => {
    dispatch(fetchReliabilityResults(data?.row?._id));
    setResultOpen(true);
  };

  const handleLinkRecruiter = (data) => {
    setSelectedRecruiter({});
    setSelectedUser(data?.row);
    const filteredRecs = recruiterList?.find((item) => {
      return data?.row?.linkedRecruiters?.includes(item?._id);
    });
    if (filteredRecs) {
      setSelectedRecruiter(filteredRecs);
    }
    setOpenRecruiter(true);
    // dispatch()
  };
  const linkRecruiters = () => {
    const data = {
      _id: selectedUser?._id,
      linkedRecruiters: [selectedRecruiter?._id],
    };
    dispatch(linkCandidateRecruiter(data));
    setOpenRecruiter(false);
    setSelectedUser({});
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
      width: 180,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "linkCandidates",
      headerName: "Link Candidates",
      width: 140,
      headerAlign: "center",
      align: "center",
      renderCell: (params) => (
        <Button variant="contained" onClick={() => handleLinkRecruiter(params)}>
          Link
        </Button>
      ),
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
      field: "reliabilityResults",
      headerName: "Reliability Results",
      width: 200,
      headerAlign: "center",
      align: "center",
      renderCell: (params) => (
        <Button variant="contained" onClick={() => handleResult(params)}>
          View
        </Button>
      ),
    },

    {
      field: "secondvideo",
      headerName: "EI Video 1",
      width: 130,
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
        }
      },
    },
    {
      field: "firstvideo",
      headerName: "EI VIdeo 2",
      width: 130,
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
        }
      },
    },

    {
      field: "mainScore",
      headerName: "Score",
      width: 120,
      headerAlign: "center",
      align: "center",
      renderCell: (params) => {
        if (params?.row?.mainScore) {
          return (
            <NavLink to={`/resultScreen/${params.row._id}`}>
              {params.row.mainScore}
            </NavLink>
          );
        }
      },
    },
    {
      field: "scores",
      headerName: "Enter Score",
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
      <Header name="Admin" caption={"Your Choice Matters"} />

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
          title={videoTitle}
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
        <CustomizedDialogs
          title={"Select Recruiter"}
          children={
            <div style={{ width: "400px" }}>
              <BreuSelect
                align="center"
                placeholder="Select Recruiter"
                name="selectRole"
                values={recruiterList || []}
                onSelect={(list) => setSelectedRecruiter(list)}
                // disabled={auth?.user?.completedBelievability}
                selected={selectedRecruiter}
              />
              <Button
                sx={{ marginTop: "20px" }}
                variant="contained"
                onClick={() => linkRecruiters()}
              >
                Link
              </Button>
            </div>
          }
          openPopup={openRecruiter}
          setOpenPopup={setOpenRecruiter}
        />

        <CustomizedDialogs
          title={"Relaibility Result"}
          children={
            <>
              <Grid container>
                <Grid item xs={12} md={12}>
                  <Typography>
                    {" "}
                    Architecture:{" "}
                    {reliability?.reliabilityResults?.architecture}
                  </Typography>
                </Grid>
                <Grid item xs={12} md={12}>
                  <Typography>
                    {" "}
                    Coding: {reliability?.reliabilityResults?.coding}
                  </Typography>
                </Grid>
                <Grid item xs={12} md={12}>
                  <Typography>
                    {" "}
                    Design: {reliability?.reliabilityResults?.design}
                  </Typography>
                </Grid>
                <Grid item xs={12} md={12}>
                  <Typography>
                    {" "}
                    Debugging: {reliability?.reliabilityResults?.debugging}
                  </Typography>
                </Grid>
                <Grid item xs={12} md={12}>
                  <Typography>
                    {" "}
                    Framework: {reliability?.reliabilityResults?.framework}
                  </Typography>
                </Grid>
                <Grid item xs={12} md={12}>
                  <Typography>
                    {" "}
                    Implementation:{" "}
                    {reliability?.reliabilityResults?.implementation}
                  </Typography>
                </Grid>
              </Grid>
            </>
          }
          openPopup={resultOpen}
          setOpenPopup={setResultOpen}
        />
      </Grid>
    </>
  );
};

export default AdminDashboard;
