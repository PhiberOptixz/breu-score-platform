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
import { Grid } from "@mui/material";
import ButtonField from "../../common/button";
import { Button } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import CustomizedDialogs from "../../common/customDailougeBox";
import HorizontalGauge from "react-horizontal-gauge";
import {
  fetchRecruiterCandidates,
  fetchAllCorporates,
  sendCandidateToCorporate,
} from "../../features/recruiterSlice";
import { useDispatch, useSelector } from "react-redux";
import BreuSelect from "../../common/selectSingleValue";

const RecruiterLanding = () => {
  const [selectedCorporate, setSelectedCorporate] = useState({});
  const [selectedCandidate, setSelectedCandidate] = useState({});
  const [video, setVideo] = useState("");
  const [open, setOpen] = useState(false);
  const [openCorporate, setOpenCorporate] = useState(false);
  const { recruiterSlice, recruiterAuth } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(recruiterAuth?.isAuthenticated);
    if (recruiterAuth?.isAuthenticated) {
      dispatch(fetchRecruiterCandidates());
      dispatch(fetchAllCorporates());
    }
  }, [recruiterAuth?.isAuthenticated]);

  const corporateList = recruiterSlice?.corporateList?.map((item) => {
    return {
      _id: item?._id,
      name: item?.corporateName,
    };
  });

  const handleChange = (event) => {
    console.log(event.target.value);
    setSelectedCorporate(event?.target?.value);
  };

  const handleSelect = (data) => {
    setSelectedCandidate(data.row);
    setOpenCorporate(true);
  };

  const handleSend = () => {
    console.log(selectedCandidate, selectedCorporate);
    const data = {
      _id: selectedCandidate?._id,
      linkedCorporates: [selectedCorporate?._id],
    };
    console.log(data);
    dispatch(sendCandidateToCorporate(data));
  };

  const handleConflictClick = (data) => {
    setVideo(data?.row?.videos[0]?.conflictResolutionVideo?.link);
    setOpen(true);
  };

  const handleInterestingClick = (data) => {
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
      renderCell: (params) => {
        if (params?.row?.firstName) {
          return (
            <Link to={`/resultScreen/${params.row._id}`}>
              {params.row.firstName}
            </Link>
          );
        }
      },
    },
    {
      field: "email",
      headerName: "Email",
      width: 150,
      headerAlign: "center",
      align: "center",
      renderCell: (params) => {
        if (params?.row?.email) {
          return (
            <Link to={`/resultScreen/${params.row._id}`}>
              {params.row.email}
            </Link>
          );
        }
      },
    },
    {
      field: "scale",
      headerName: "Scale",
      width: 280,
      height: 500,
      headerAlign: "center",
      align: "center",
      renderCell: (params) => {
        if (params?.row?.scores[0]) {
          return (
            <HorizontalGauge
              ticks={[
                { label: "0", value: 0 },
                { label: "1", value: 1 },
                { label: "2", value: 2 },
                { label: "3", value: 3 },
                { label: "4", value: 4 },
                { label: "5", value: 5 },
              ]}
              height={45}
              width={250}
              min={0}
              max={5}
              value={params?.row?.scores[0].mainScore || ""}
            />
          );
        }
      },
    },
    {
      field: "firstvideo",
      headerName: "EI Video 1",
      width: 200,
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
      field: "secondvideo",
      headerName: "EI Video 1",
      width: 200,
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
    // {
    //   field: "dropdown",
    //   headerName: "Company",
    //   headerAlign: "center",
    //   width: 200,
    //   sortable: false,
    //   align: "center",
    //   renderCell: (params) => (
    //     <FormControl sx={{ m: 1, minWidth: 150 }} size="small">
    //       <BreuSelect
    //         align="center"
    //         placeholder="Choose your current role"
    //         name="selectRole"
    //         sx={{
    //           marginLeft: "8%",
    //           width: "80%",
    //           marginTop: "1%",
    //           backgroundColor: "#FFF",
    //         }}
    //         // className="believabilityBreuSelect"
    //         values={corporateList || []}
    //         onSelect={(list) => setSelectedCorporate(list)}
    //         // disabled={auth?.user?.completedBelievability}
    //         selected={selectedCorporate}
    //       />
    //     </FormControl>
    //   ),
    // },
    {
      field: "button",
      headerName: "Send to Corporate",
      headerAlign: "center",
      width: 200,
      sortable: false,
      align: "center",
      renderCell: (params) => {
        if (params?.row?.linkedCorporates?.length > 0) {
          return (
            <Button variant="contained" disabled>
              Sent to Corporate
            </Button>
          );
        } else {
          return (
            <Button variant="contained" onClick={() => handleSelect(params)}>
              Select Corporate
            </Button>
          );
        }
      },
    },
  ];

  const navigate = useNavigate();
  return (
    <>
      <Header name="Recruiter" caption={"Your Choice Matters"} />

      <Grid container>
        <Grid item xs={12} md={12}>
          <div style={{ height: "100%", width: "100%" }}>
            <DataGrid
              getRowId={(row) => row._id}
              rows={recruiterSlice?.candidateList || []}
              columns={columns}
              rowHeight={75}
              //   autoHeight
              disableColumnMenu
              hideFooterSelectedRowCount
              // rowsPerPageOptions={[100]}
              // autoPageSize
              disableRowSelectionOnClick
              // checkboxSelection
              pagination
            />
          </div>
        </Grid>

        <CustomizedDialogs
          title={"Video"}
          children={
            <video width="700px" height="400px" autoplay>
              <source src={video} type="video/mp4" />
            </video>
          }
          openPopup={open}
          setOpenPopup={setOpen}
        />
        <CustomizedDialogs
          title={"Select Corporate"}
          children={
            <div style={{ width: "400px" }}>
              {" "}
              <BreuSelect
                align="center"
                placeholder="Select Corporate"
                name="selectRole"
                // sx={{
                //   marginLeft: "8%",
                //   width: "80%",
                //   marginTop: "1%",
                //   backgroundColor: "#FFF",
                // }}
                // className="believabilityBreuSelect"
                values={corporateList || []}
                onSelect={(list) => setSelectedCorporate(list)}
                // disabled={auth?.user?.completedBelievability}
                selected={selectedCorporate}
              />
              <Button
                sx={{ marginTop: "20px" }}
                variant="contained"
                onClick={() => handleSend()}
              >
                Send to Corporate
              </Button>
            </div>
          }
          openPopup={openCorporate}
          setOpenPopup={setOpenCorporate}
        />
      </Grid>
    </>
  );
};

export default RecruiterLanding;
