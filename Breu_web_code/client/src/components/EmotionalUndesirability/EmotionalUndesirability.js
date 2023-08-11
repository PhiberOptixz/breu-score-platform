import { useEffect, useState, useRef, useMemo } from "react";
import Header from "../../common/header";
import { Grid, Paper, Typography } from "@mui/material";
import PlayCircleFilledWhiteOutlinedIcon from "@mui/icons-material/PlayCircleFilledWhiteOutlined";
import CustomizedDialogs from "../../common/customDailougeBox";
import ReactPlayer from "react-player";
import ButtonField from "../../common/button";
import { useSelector, useDispatch } from "react-redux";
import { uploadCandidateVideo } from "../../features/intelligibilitySlice";
import { SnackBar } from "../../common/Snackbar";
import { useNavigate } from "react-router-dom";
import LoadingButton from "@mui/lab/LoadingButton";
import SendIcon from "@mui/icons-material/Send";
import { createTheme, ThemeProvider, useTheme } from "@mui/material/styles";
import { toggleButtonClasses } from "@mui/material/ToggleButton";
import deepmerge from "@mui/utils/deepmerge";
import { fetchReliabilityData } from "../../features/reliabilitySlice";

const defaultTheme = createTheme();
const theme = createTheme({
  palette: {
    action: {
      disabledBackground: "",
      disabled: "white",
    },
  },
  components: {
    MuiButtonBase: {
      styleOverrides: {
        root: {
          [`&.${"Mui-disabled"}`]: {
            opacity: 0.5,
          },
          [`&.${toggleButtonClasses.root}.${"Mui-disabled"}`]: {
            color: defaultTheme.palette.action.disabled,
            borderColor: defaultTheme.palette.action.disabledBackground,
          },
        },
      },
    },
  },
});

const theme1 = createTheme({
  palette: {
    action: {
      disabledBackground: "",
      disabled: "white",
    },
  },
});
const theme2 = createTheme({
  palette: {
    action: {
      disabledBackground: "",
      disabled: "",
    },
  },
});
const MuiLoadingButton = (props) => {
  const theme = useTheme();
  const disabledTheme = props.variant === "contained" ? theme1 : theme2;
  const mergedTheme = useMemo(
    () => deepmerge(theme, disabledTheme),
    [theme, disabledTheme]
  );

  return (
    <ThemeProvider theme={mergedTheme}>
      <LoadingButton {...props} />
    </ThemeProvider>
  );
};

const EmotionalUndesirability = () => {
  const scollToRef = useRef();
  const errorMsgElement = document.querySelector("span#errorMsg");
  const recordedVideo = document.querySelector("video#recorded");
  const recordButton = document.querySelector("button#record");
  const { auth, intelligibilitySlice, reliability } = useSelector(
    (state) => state
  );
  const dispatch = useDispatch();
  const [time, setTime] = useState("");
  const [seconds, setSeconds] = useState(0);
  const [disableRecord, setDisableRecord] = useState(true);
  const [disablePlay, setDisablePlay] = useState(true);
  const [disableDownload, setDisableDownload] = useState(true);
  const [demo, setDemo] = useState("Demo 1");
  const [title, setTitle] = useState(
    "This is a demo of how I would answer the same question in STAR format"
  );
  const [questionTitle, setQuestionTitle] = useState(
    "Describe your recent & most complex project in STAR format. – 2 mins"
  );
  const navigate = useNavigate();
  const [showRecorded, setShowRecorded] = useState(false);
  const [record, setRecord] = useState("Start Recording");
  const [webcam, setWebcam] = useState("Start Camera");
  const [recordedBlobs, setRecordedBlobs] = useState([]);
  const [demoVideoURL, setDemoVideoURL] = useState(
    "https://www.youtube.com/embed/egkAQbWuw9c?rel=0"
  );
  const [webStream, setWebStream] = useState(null);
  const [recorder, setRecorder] = useState(null);
  const videoRef = useRef(null);
  const [noOfVideos, setNoOfVideos] = useState(0);
  const [noOfTries, setNoOfTries] = useState(0);
  const [recordedVideos, setRecordedVideos] = useState("");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.title = "BREU.AI - Emotional Intelligibility";
    if (
      auth.user.completedInterestingVideo &&
      !auth.user.completedConflictVideo
    ) {
      setNoOfVideos(1);
      setDemo("Demo-2");
      setTitle(
        "Demo – What is expected (conflicts if any with team members/manager, on what ground & how did you do ?"
      );
      setQuestionTitle(
        "Describe your recent project failure, how did u cope up with the situation & recover from it – 2 mins"
      );
      setDemoVideoURL("https://www.youtube.com/embed/vsRRs_362-M?rel=0");
      scollToRef.current.scrollIntoView();
    } else if (auth.user.completedConflictVideo) {
      dispatch(fetchReliabilityData());
      setNoOfVideos(2);
      window.scrollTo(0, 0);
    } else {
      window.scrollTo(0, 0);
      setNoOfVideos(0);
    }
  }, [auth?.user]);

  setTimeout(() => {
    if (record === "Stop Recording") {
      setSeconds(seconds + 1);
      let date = new Date(null);
      date.setSeconds(seconds);
      setTime(date?.toISOString()?.substr(11, 8));
    } else {
      setSeconds(0);
      setTime("");
    }
  }, 1000);

  const handleSuccess = (stream) => {
    setDisableRecord(false);
    window.stream = stream;
    let video = videoRef.current;
    video.srcObject = stream;
    video.play();
  };

  const handleStop = (stream) => {
    const video = document.querySelector("#gum");
    if (video?.srcObject && stream && noOfTries <= 2) {
      for (const track of video?.srcObject?.getTracks()) {
        track.stop();
      }
    }
    video.srcObject = null;
    if (stream && noOfTries <= 2) {
      stream?.getTracks()?.forEach(function (track) {
        let video = videoRef.current;
        video.pause();
        video.srcObject = null;
        track.stop();
        // if (track.readyState == 'live') {
        //     track.stop();
        // }
      });
    }
    setDisableRecord(true);
    setDisablePlay(true);
    setDisableDownload(true);
  };

  const recordVideo = async () => {
    if (record === "Start Recording") {
      if (noOfTries >= 2) {
        SnackBar.error(
          "You have exceeded the recording limit. Your last recorded video will be auto submitted."
        );
        handleSubmit();
      } else {
        const constraints = {
          audio: true,
          video: {
            width: 1080,
            height: 720,
          },
        };
        try {
          navigator.getUserMedia =
            navigator.getUserMedia ||
            navigator.webkitGetUserMedia ||
            navigator.mozGetUserMedia;
          const stream = await navigator.mediaDevices.getUserMedia(constraints);
          setWebStream(stream);
          handleSuccess(stream);
        } catch (e) {
          console.error("navigator.getUserMedia error:", e);
          // errorMsgElement.innerHTML = `navigator.getUserMedia error:${e.toString()}`;
        }
        setNoOfTries(noOfTries + 1);
        setRecord("Stop Recording");
        startRecording();
      }
    } else {
      if (webStream) {
        handleStop(webStream);
      }
      setRecord("Start Recording");
      setDisablePlay(false);
      setDisableDownload(false);
      stopRecording();
    }
  };

  const startRecording = () => {
    let mediaRecorder = null;
    let recordedBlobs = [];
    let options = { mimeType: "video/webm;codecs=h264" };
    try {
      mediaRecorder = new MediaRecorder(window.stream, options);
    } catch (e) {
      console.error("Exception while creating MediaRecorder:", e);
      errorMsgElement.innerHTML = `Exception while creating MediaRecorder: ${JSON.stringify(
        e
      )}`;
      return;
    }
    setRecord("Stop Recording");
    setDisablePlay(true);
    setShowRecorded(false);
    setDisableDownload(true);
    mediaRecorder.onstop = (event) => {};
    mediaRecorder.ondataavailable = handleDataAvailable;
    mediaRecorder.start();
    setRecorder(mediaRecorder);
  };

  const handleDataAvailable = (event) => {
    if (event.data && event.data.size > 0) {
      setRecordedBlobs([]);
      let blobs = recordedBlobs.slice(-1);
      setRecordedBlobs([event.data]);
    }
  };

  const stopRecording = () => {
    recorder.stop();
    setDisablePlay(false);
    setDisableDownload(false);
  };

  const playRecorded = () => {
    const superBuffer = new Blob(recordedBlobs, { type: "video/webm" });
    recordedVideo.src = null;
    recordedVideo.srcObject = null;
    recordedVideo.src = window.URL.createObjectURL(superBuffer);
    recordedVideo.controls = true;
    recordedVideo.play();
    setShowRecorded(true);
  };

  const handleSubmit = () => {
    if (noOfVideos === 0) {
      setNoOfTries(0);
      setNoOfVideos(noOfVideos + 1);
      const blob = new Blob(recordedBlobs, { type: "video/mp4" });
      setWebcam("Start Camera");
      handleStop(webStream);
      setShowRecorded(false);
      const formData = new FormData();
      formData.append("video", blob);
      formData.append("type", demo);
      formData.append("candidateId", auth?.user?._id);
      const superBuffer = new Blob(recordedBlobs, { type: "video/webm" });
      recordedVideo.src = null;
      recordedVideo.srcObject = null;
      recordedVideo.src = window.URL.createObjectURL(superBuffer);
      recordedVideo.controls = true;
      recordedVideo.pause();
      dispatch(uploadCandidateVideo(formData));
    } else if (noOfVideos >= 1) {
      const blob = new Blob(recordedBlobs, { type: "video/mp4" });
      const formData = new FormData();
      formData.append("video", blob);
      formData.append("type", demo);
      formData.append("candidateId", auth?.user?._id);
      formData.append("navigate", navigate);
      dispatch(uploadCandidateVideo(formData));
      setWebcam("Start Camera");
      setShowRecorded(false);
      handleStop(webStream);
    }
  };

  return (
    <>
      <Header
        name="Emotional Intelligibility"
        caption={"Exploring your emotional dimension"}
      />
      {noOfVideos === 2 ? (
        <>
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
                url={recordedVideos}
                width="700px"
                height="400px"
                controls
              />
            }
            openPopup={open}
            setOpenPopup={setOpen}
          />

          <Typography align="center">
            <ButtonField
              onClick={() => {
                setOpen(true);
                setRecordedVideos(
                  reliability?.candidateReliabilityData?.interestingProjectVideo
                    ?.link
                );
              }}
              buttonStyle="submit"
              type="button"
              name="Watch Video 1"
              variant="contained"
              color="primary"
              sx={{
                marginTop: "2%",
                marginBottom: "2%",
              }}
            />
            <ButtonField
              onClick={() => {
                setOpen(true);
                setRecordedVideos(
                  reliability?.candidateReliabilityData?.conflictResolutionVideo
                    ?.link
                );
              }}
              buttonStyle="submit"
              type="button"
              name="Watch Video 2"
              variant="contained"
              color="primary"
              sx={{
                marginTop: "2%",
                marginLeft: "2%",
                marginBottom: "2%",
              }}
            />
          </Typography>
          <Typography variant="h5" color={"red"} align="center">
            You have successfully submitted the videos. Please click next to see
            BREU score
          </Typography>
          <Typography align="center">
            <ButtonField
              onClick={() => navigate("/undesirability")}
              buttonStyle="submit"
              type="button"
              name="Next"
              variant="contained"
              color="primary"
              sx={{
                width: "20%",
                marginTop: "2%",
                marginBottom: "2%",
              }}
            />
          </Typography>
        </>
      ) : (
        <Grid container spacing={2}>
          <Grid
            item
            xs={12}
            md={5}
            sx={{ marginLeft: "2%", marginRight: "2%", marginTop: "-1%" }}
          >
            <h1 ref={scollToRef}>{demo}</h1>
            <p style={{ fontSize: "22px" }}>{title}</p>

            <iframe
              width={"99%"}
              height={"332px"}
              src={demoVideoURL}
              style={{ marginTop: "0.5%" }}
            ></iframe>
          </Grid>

          <Grid item xs={12} md={5} sx={{ marginLeft: "2%", marginTop: "-1%" }}>
            <h1>
              Record your Response
              {noOfTries === 1 ? (
                <span style={{ fontSize: "20px", color: "red" }}>
                  {" "}
                  - First attempt
                </span>
              ) : noOfTries === 2 ? (
                <span style={{ fontSize: "20px", color: "red" }}>
                  {" "}
                  - Second attempt
                </span>
              ) : (
                <span style={{ fontSize: "20px" }}>( 2 Attempts only)</span>
              )}
            </h1>
            <p style={{ fontSize: "22px" }}>{questionTitle}</p>

            <Paper
              elevation={0}
              sx={{
                background: "#0a71b9",
                color: "white",
                width: "96%",
                marginTop: "4%",
                border: seconds > 90 ? "2px solid red" : "none",
                // borderRadius: "2% 0% 0% 0%",
              }}
            >
              <video
                id="gum"
                ref={videoRef}
                style={{
                  display: showRecorded ? "none" : "block",

                  width: "100%",
                  // height: "10%",
                  borderRadius: "0% 0% 2% 2%",
                  height: "285px",
                }}
                playsInline
                autoPlay
                muted
              ></video>
              <video
                id="recorded"
                style={{
                  display: showRecorded ? "block" : "none",
                  width: "100%",
                  height: "30%",
                  borderRadius: "0% 0% 2% 2%",
                  height: "285px",
                }}
                playsInline
              ></video>
              <Grid container sx={{ paddingTop: "2%", paddingBottom: "2%" }}>
                <Grid item xs={4} md={4} align="center">
                  <ButtonField
                    // disabled={webcam === "Start Camera" ? true : false}
                    sx={{
                      width: "95%",
                      height: "95%",
                      backgroundColor: "#0a71b9",
                      padding: "2px",
                      marginRight: "5px",
                      fontSize: "68%",
                    }}
                    onClick={() => recordVideo()}
                    name={record}
                  />
                </Grid>
                <Grid item xs={4} md={4} align="left">
                  <ButtonField
                    disabled={
                      record === "Stop Recording" || noOfTries == 0
                        ? true
                        : false
                    }
                    sx={{
                      width: "95%",
                      height: "95%",
                      backgroundColor: "#0a71b9",
                      padding: "2px",
                      marginRight: "5px",
                      fontSize: "68%",
                    }}
                    onClick={() => playRecorded()}
                    name={
                      <>
                        <PlayCircleFilledWhiteOutlinedIcon
                          // onClick={playRecorded}
                          sx={{ fontSize: "30px" }}
                        />
                        Play
                      </>
                    }
                  />
                </Grid>
                <Grid item xs={4} md={4} align="left">
                  <Typography
                    color={seconds > 90 ? "red" : "white"}
                    sx={{ marginTop: "2%", textAlign: "left" }}
                  >
                    {time}
                  </Typography>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
          <Grid item xs={12} md={12} align="center">
            {" "}
            <ThemeProvider theme={theme}>
              <MuiLoadingButton
                variant="contained"
                onClick={() => handleSubmit()}
                endIcon={<SendIcon />}
                disabled={disablePlay}
                loading={intelligibilitySlice?.loading}
                loadingPosition="end"
              >
                <span>
                  {intelligibilitySlice?.loading ? "Uploading Video" : "Submit"}
                </span>
              </MuiLoadingButton>
            </ThemeProvider>
          </Grid>
        </Grid>
      )}
    </>
  );
};

export default EmotionalUndesirability;
