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
import { useNavigate } from "react-router-dom";
import PlayCircleFilledWhiteRoundedIcon from "@mui/icons-material/PlayCircleFilledWhiteRounded";
import CustomizedDialogs from "../../common/customDailougeBox";
import HorizontalGauge from "react-horizontal-gauge";

const CorporateDashboard = () => {
  const [age, setAge] = useState("");
  const [video, setVideo] = useState("");
  const [open, setOpen] = useState(false);

  const handleChange = (event) => {
    setAge(event.target.value);
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

  const rows = [
    {
      id: 1,
      firstName: "Javier",
      score: 3.5,
      scale: "scale comes here",
      firstvideo: "videolink,",
      secondvideo: "videolink",
    },
    {
      id: 2,
      firstName: "Xenon",
      score: 2.9,
      scale: "scale comes here",
      firstvideo: "videolink,",
      secondvideo: "videolink",
    },
    {
      id: 3,
      firstName: "Zendo",
      score: 4.2,
      scale: "scale comes here",
      firstvideo: "videolink,",
      secondvideo: "videolink",
    },
    {
      id: 4,
      firstName: "Flappy",
      score: 1.2,
      scale: "scale comes here",
      firstvideo: "videolink,",
      secondvideo: "videolink",
    },
    {
      id: 5,
      firstName: "Ronin",
      score: 3.7,
      scale: "scale comes here",
      firstvideo: "videolink,",
      secondvideo: "videolink",
    },
  ];

  const columns = [
    {
      headerAlign: "center",
    },
    {
      field: "id",
      headerName: "ID",
      width: 150,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "firstName",
      headerName: "First Name",
      width: 150,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "score",
      headerName: "Score",
      type: "number",
      width: 150,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "scale",
      headerName: "Scale",
      width: 200,
      headerAlign: "center",
      align: "center",
      renderCell: (params) => (
        <Grid item xs={12} md={6} align="left" style={{ paddingLeft: "10%" }}>
          <p className="scoresText" align="left">
            Scores
          </p>
          <HorizontalGauge
            ticks={[
              { label: "0", value: 0 },
              { label: "1", value: 1 },
              { label: "2", value: 2 },
              { label: "3", value: 3 },
              { label: "4", value: 4 },
              { label: "5", value: 5 },
            ]}
            height={70}
            width={300}
            min={0}
            max={5}
            value={1}
          />
        </Grid>
      ),
    },
    {
      field: "firstvideo",
      headerName: "Video 1",
      headerAlign: "center",
      align: "center",
      renderCell: (params) => (
        <PlayCircleFilledWhiteRoundedIcon
          fontSize="large"
          onClick={handleClick}
          sx={{ color: "blue" }}
        />
      ),
    },
    {
      field: "secondvideo",
      headerName: "Video 2",
      headerAlign: "center",
      align: "center",
      renderCell: (params) => (
        <PlayCircleFilledWhiteRoundedIcon
          fontSize="large"
          sx={{ color: "blue" }}
        />
      ),
    },
  ];

  const navigate = useNavigate();
  return (
    <>
      <Header name="Corporate" caption={"Your Choice Matters"} />

      <Grid container>
        <Grid item xs={12} md={12}>
          <div style={{ height: 350, width: "100%" }}>
            <DataGrid
              rows={rows}
              columns={columns}
              autoHeight
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
