import { useEffect, useState, useRef } from "react";
import { DataGrid } from "@mui/x-data-grid";
import PlayCircleFilledWhiteRoundedIcon from "@mui/icons-material/PlayCircleFilledWhiteRounded";

import Header from "../../common/header";
import { Grid } from "@mui/material";
import { Button } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import CustomizedDialogs from "../../common/customDailougeBox";
import HorizontalGauge from "react-horizontal-gauge";
import {
  fetchRecruiterCandidates,
  fetchRecruiterCorporates,
  sendCandidateToCorporate,
} from "../../features/recruiterSlice";
import { useDispatch, useSelector } from "react-redux";
import SelectMultipleValues from "../../common/SelectMultipleValues";
import ReactPlayer from "react-player";

const RecruiterLanding = () => {
  const [selectedCorporate, setSelectedCorporate] = useState([]);
  const [selectedCandidate, setSelectedCandidate] = useState({});
  const [video, setVideo] = useState("");
  const [open, setOpen] = useState(false);
  const [openCorporate, setOpenCorporate] = useState(false);
  const { recruiterSlice, recruiterAuth } = useSelector((state) => state);
  const [corpList, setCorpList] = useState([]);
  const [corpListOriginal, setCorpListOriginal] = useState([]);
  const [prevSelectedCorps, setPrevSelectedCorps] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (recruiterAuth?.isAuthenticated) {
      dispatch(fetchRecruiterCandidates());
      dispatch(fetchRecruiterCorporates());
    }
  }, [recruiterAuth?.isAuthenticated]);

  useEffect(() => {
    if (recruiterSlice?.corporateList) {
      const corporateList = recruiterSlice?.corporateList?.map((item) => {
        return {
          _id: item?._id,
          name: item?.corporateName,
        };
      });
      setCorpListOriginal(corporateList);
    }
  }, [recruiterSlice?.corporateList]);

  // const corporateList = recruiterSlice?.corporateList?.map((item) => {
  //   return {
  //     _id: item?._id,
  //     name: item?.corporateName,
  //   };
  // });

  const handleSelect = (data) => {
    setCorpList([]);
    const filteredCorps = corpListOriginal?.filter((item) => {
      return !data?.row?.linkedCorporates?.includes(item?._id);
    });

    setSelectedCorporate([]);
    setPrevSelectedCorps(data?.row?.linkedCorporates);
    setCorpList(filteredCorps);
    setSelectedCandidate(data.row);
    setOpenCorporate(true);
  };

  const handleSend = () => {
    let corpIds = selectedCorporate?.map((item) => item?._id);
    corpIds =
      prevSelectedCorps?.length > 0
        ? [...prevSelectedCorps, ...corpIds]
        : corpIds;
    const data = {
      _id: selectedCandidate?._id,
      linkedCorporates: corpIds,
    };
    dispatch(sendCandidateToCorporate(data));
    setOpenCorporate(false);
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
            <span onClick={() => navigate(`/resultScreen/${params.row._id}`)}>
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
            </span>
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
    {
      field: "button",
      headerName: "Send to Corporate",
      headerAlign: "center",
      width: 200,
      sortable: false,
      align: "center",
      renderCell: (params) => {
        const filteredCorps = corpListOriginal?.filter(
          (item) => !params?.row?.linkedCorporates?.includes(item?._id)
        );
        if (filteredCorps.length === 0) {
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

  return (
    <>
      <Header name="Recruiter" caption={"Your choice matters"} />

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
          title={"Select Corporate"}
          children={
            <div style={{ width: "400px" }}>
              {" "}
              <SelectMultipleValues
                align="center"
                label="Select Corporate"
                name="selectCorporate"
                dataList={corpList || []} //?iLearnCourses:[]
                value="Select Corporate"
                onSelectData={(list) => setSelectedCorporate(list)}
                selectedData={selectedCorporate}
              />
              {/* <BreuSelect
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
              /> */}
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
