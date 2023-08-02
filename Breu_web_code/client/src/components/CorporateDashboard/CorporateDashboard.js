import React, { useEffect, useState, useRef } from "react";
import { DataGrid } from "@mui/x-data-grid";
import Radio from "@mui/material/Radio";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import ListItemText from "@mui/material/ListItemText";
import Header from "../../common/header";
import { Grid } from "@mui/material";
import ButtonField from "../../common/button";
import { Button } from "@mui/material";
import { useNavigate, Link } from "react-router-dom";
import PlayCircleFilledWhiteRoundedIcon from "@mui/icons-material/PlayCircleFilledWhiteRounded";
import CustomizedDialogs from "../../common/customDailougeBox";
import HorizontalGauge from "react-horizontal-gauge";
import { fetchCorporateCandidates } from "../../features/corporateSlice";
import { useSelector, useDispatch } from "react-redux";

const CorporateDashboard = () => {
  const [video, setVideo] = useState("");
  const [open, setOpen] = useState(false);
  const { corporateAuth, corporateSlice } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    if (corporateAuth?.isAuthenticated) {
      dispatch(fetchCorporateCandidates());
    }
  }, [corporateAuth?.isAuthenticated]);

  const handleConflictClick = (data) => {
    setVideo(data?.row?.videos[0]?.conflictResolutionVideo?.link);
    setOpen(true);
  };

  const handleInterestingClick = (data) => {
    setVideo(data?.row?.videos[0]?.interestingProjectVideo?.link);
    setOpen(true);
  };

  const handleClick = () => {
    setVideo("https://dz1fjbrbuvu21.cloudfront.net/video1.mp4");
    setOpen(true);
  };

  // const getRowSpacing = React.useCallback((params) => {
  //     return {
  //       top: params.isFirstVisible ? 0 : 5,
  //       bottom: params.isLastVisible ? 0 : 5,
  //     };
  //   }, []);

  const columns = [
    {
      headerAlign: "center",
    },
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
      width: 250,
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
      headerName: "EI Video 2",
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
  ];

  const navigate = useNavigate();
  return (
    <>
      <Header name="Corporate" caption={"Your choice matters"} />

      <Grid container>
        <Grid item xs={12} md={12}>
          <div style={{ height: "100%", width: "100%" }}>
            <DataGrid
              getRowId={(row) => row._id}
              rows={corporateSlice?.candidateList || []}
              columns={columns}
              rowHeight={75}
              // autoHeight
              disableColumnMenu
              hideFooterSelectedRowCount
              //  getRowSpacing={getRowSpacing}
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
            <video width="500px" height="350px" autoplay>
              <source src={video} type="video/mp4" />
            </video>
          }
          openPopup={open}
          setOpenPopup={setOpen}
        />
      </Grid>
    </>
  );
};

export default CorporateDashboard;
