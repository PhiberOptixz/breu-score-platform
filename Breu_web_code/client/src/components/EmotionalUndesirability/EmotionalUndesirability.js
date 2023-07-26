import { useEffect, useState, useRef } from "react";
import Header from "../../common/header";
import { Grid, Paper, Button, Typography } from "@mui/material";
import PlayCircleFilledWhiteOutlinedIcon from "@mui/icons-material/PlayCircleFilledWhiteOutlined";
import ReactPlayer from "react-player";
import ButtonField from "../../common/button";
import Replay10OutlinedIcon from "@mui/icons-material/Replay10Outlined";
import Forward10OutlinedIcon from "@mui/icons-material/Forward10Outlined";
import { useSelector, useDispatch } from "react-redux";
import { uploadCandidateVideo } from "../../features/intelligibilitySlice";
import { SnackBar } from "../../common/Snackbar";
import { useNavigate } from "react-router-dom";
import VideocamOutlinedIcon from "@mui/icons-material/VideocamOutlined";
import VideocamOffOutlinedIcon from "@mui/icons-material/VideocamOffOutlined";
import RadioButtonCheckedOutlinedIcon from "@mui/icons-material/RadioButtonCheckedOutlined";
import RadioButtonUncheckedOutlinedIcon from "@mui/icons-material/RadioButtonUncheckedOutlined";

const EmotionalUndesirability = () => {
  const errorMsgElement = document.querySelector("span#errorMsg");
  const recordedVideo = document.querySelector("video#recorded");
  const recordButton = document.querySelector("button#record");
  const { auth } = useSelector((state) => state);
  const dispatch = useDispatch();
  const [time, setTime] = useState("");
  const [seconds, setSeconds] = useState(0);
  const [disableRecord, setDisableRecord] = useState(true);
  const [disablePlay, setDisablePlay] = useState(true);
  const [disableDownload, setDisableDownload] = useState(true);
  const [demo, setDemo] = useState("Demo 1");
  const [title, setTitle] = useState(
    "Demo – What is expected (tech stack selection, design choices tradeoffs, your contribution, learnings if any)"
  );
  const [questionTitle, setQuestionTitle] = useState(
    "Explain Your last Interesting Project – 1 mins"
  );
  const navigate = useNavigate();
  const [showRecorded, setShowRecorded] = useState(false);
  const [record, setRecord] = useState("Start Recording");
  const [webcam, setWebcam] = useState("Start Camera");
  const [recordedBlobs, setRecordedBlobs] = useState([]);
  const [demoVideoURL, setDemoVideoURL] = useState(
    "https://www.youtube.com/embed/egkAQbWuw9c?rel=0&autoplay=1&mute=1"
  );
  const [webStream, setWebStream] = useState(null);
  const [recorder, setRecorder] = useState(null);
  const videoRef = useRef(null);
  const [noOfVideos, setNoOfVideos] = useState(0);
  const [noOfTries, setNoOfTries] = useState(0);

  useEffect(() => {
    document.title = "Breu.ai - Emotional Intelligibility";
    if (
      auth.user.completedInterestingVideo &&
      !auth.user.completedConflictVideo
    ) {
      setNoOfVideos(1);
      setDemo("Demo-2");
      setTitle(
        "Demo – What is expected (conflicts if any with team members/manager, on what ground & how did you do ?"
      );
      setQuestionTitle("Conflict Resolution – 1 mins");
    } else if (auth.user.completedConflictVideo) {
      setNoOfVideos(2);
    } else {
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

  const startCamera = async (e) => {
    const constraints = {
      audio: true,
      video: {
        width: 1080,
        height: 720,
      },
    };
    if (webcam === "Start Camera") {
      setWebcam("Stop Camera");
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
    } else if (webcam === "Stop Camera") {
      setWebcam("Start Camera");
      handleStop(webStream);
    }
    setShowRecorded(false);
  };

  const handleSuccess = (stream) => {
    setDisableRecord(false);
    window.stream = stream;
    let video = videoRef.current;
    video.srcObject = stream;
    video.play();
  };

  const handleStop = (stream) => {
    const video = document.querySelector("#gum");
    for (const track of video.srcObject.getTracks()) {
      track.stop();
    }
    video.srcObject = null;
    stream.getTracks().forEach(function (track) {
      let video = videoRef.current;
      video.pause();
      video.srcObject = null;
      track.stop();
      // if (track.readyState == 'live') {
      //     track.stop();
      // }
    });
    setDisableRecord(true);
    setDisablePlay(true);
    setDisableDownload(true);
  };

  const recordVideo = () => {
    if (record === "Start Recording") {
      if (noOfTries >= 2) {
        SnackBar.error(
          "You have exceeded the recording limit please submit the last recorded video"
        );
      } else {
        setNoOfTries(noOfTries + 1);
        setRecord("Stop Recording");
        startRecording();
      }
    } else {
      setRecord("Start Recording");
      setDisablePlay(false);
      setDisableDownload(false);
      stopRecording();
    }
  };

  const startRecording = () => {
    let mediaRecorder = null;
    let recordedBlobs = [];
    let options = { mimeType: "video/webm;codecs=vp9,opus" };
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
      dispatch(uploadCandidateVideo(formData));
      setDemo("Demo-2");
      setTitle(
        "Demo – What is expected (conflicts if any with team members/manager, on what ground & how did you do ?"
      );
      setQuestionTitle("Conflict Resolution – 1 mins");
      setDemoVideoURL(
        "https://www.youtube.com/embed/vsRRs_362-M?rel=0&autoplay=1&mute=1"
      );
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
        caption={"Exploring your Emotional dimension"}
      />
      {noOfVideos === 2 ? (
        <>
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
        <Grid container sx={{ marginLeft: "2%" }}>
          <Grid
            item
            xs={12}
            md={5}
            sx={{ marginLeft: "2%", marginRight: "2%" }}
          >
            <h1>{demo}</h1>
            <p style={{ fontSize: "20px", marginRight: "5%" }}>{title}</p>

            <Paper
              elevation={0}
              sx={{
                background: "#0a71b9",
                color: "white",
                width: "100%",
                // borderRadius: "2% 0% 0% 0%",
              }}
            >
              <iframe
                width={"99%"}
                height={"290px"}
                src={demoVideoURL}
              ></iframe>
              {/* <video
              width="100%"
              // controls
              style={{ borderRadius: "0% 0% 2% 2%" }}
            >
              <source
                src="https://www.youtube.com/watch?v=ysz5S6PUM-U"
                type="video/mp4"
              />
            </video> */}
              <Grid container sx={{ paddingTop: "2%", paddingBottom: "2%" }}>
                <Grid item xs={4} md={4} align="right">
                  {/* <Replay10OutlinedIcon sx={{ fontSize: "30px" }} /> */}
                </Grid>
                <Grid item xs={4} md={4} align="center">
                  <PlayCircleFilledWhiteOutlinedIcon
                    sx={{ fontSize: "30px" }}
                    // onClick={console.log("Play click")}
                  />
                </Grid>
                <Grid item xs={4} md={4} align="left">
                  {/* <Forward10OutlinedIcon sx={{ fontSize: "30px" }} /> */}
                </Grid>
              </Grid>
            </Paper>
          </Grid>

          <Grid item xs={12} md={5} sx={{ marginLeft: "2%" }}>
            <h1>
              Record your Response{" "}
              <span style={{ fontSize: "20px" }}>(2 Attempts only)</span>
            </h1>
            <p style={{ fontSize: "20px", marginRight: "5%" }}>
              {questionTitle}
            </p>

            {/* <ButtonField
            id="start"
            onClick={startCamera}
            buttonStyle="submit"
            type="submit"
            name={webcam}
            color="primary"
            variant="contained"
            sx={{
              width: "30%",
              backgroundColor: "#0a71b9",
              marginBottom: "2%",
            }}
          /> */}

            <Paper
              elevation={0}
              sx={{
                background: "#0a71b9",
                color: "white",
                width: "98%",
                marginTop: "8%",
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
                  height: "44vh",
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
                  height: "44vh",
                }}
                playsinliplaysInlinene
                loop
              ></video>
              <Grid container sx={{ paddingTop: "2%", paddingBottom: "2%" }}>
                <Grid item xs={3} md={3} align="right">
                  {/* <Replay10OutlinedIcon sx={{ fontSize: "30px" }} /> */}
                  {/* <ButtonField
                  id="start"
                  onClick={startCamera}
                  buttonStyle="submit"
                  type="submit"
                  endIcon={
                    webcam === "Start Camera" ? (
                      <VideocamOutlinedIcon sx={{ fontSize: "30px" }} />
                    ) : (
                      <VideocamOffOutlinedIcon sx={{ fontSize: "30px" }} />
                    )
                  }
                  name={webcam}
                  variant="contained"
                  sx={{
                    width: "80%",
                    backgroundColor: "white",
                    color: "#0a71b9",
                    marginBottom: "2%",
                  }}
                /> */}
                  <ButtonField
                    // disabled={true}
                    sx={{
                      // width: "100%",
                      // height: "100%",
                      backgroundColor: "#0a71b9",
                    }}
                    onClick={startCamera}
                    name={
                      webcam === "Start Camera" ? (
                        <VideocamOutlinedIcon
                          // disabled={true}
                          sx={{ fontSize: "30px" }}
                        />
                      ) : (
                        <VideocamOffOutlinedIcon
                          // onClick={startCamera}
                          sx={{ fontSize: "30px" }}
                        />
                      )
                    }
                  />
                  {/* </Button> */}
                </Grid>
                <Grid item xs={3} md={3} align="center">
                  {/* <ButtonField
                  id="record"
                  disabled={disableRecord}
                  onClick={() => recordVideo()}
                  buttonStyle="submit"
                  type="submit"
                  endIcon={
                    record === "Start Recording" ? (
                      <RadioButtonCheckedOutlinedIcon
                        sx={{ fontSize: "30px" }}
                      />
                    ) : (
                      <RadioButtonUncheckedOutlinedIcon
                        sx={{ fontSize: "30px" }}
                      />
                    )
                  }
                  name={record}
                  variant="contained"
                  sx={{
                    width: "80%",
                    backgroundColor: "white",
                    color: "#0a71b9",
                    marginBottom: "2%",
                  }}
                /> */}

                  <ButtonField
                    disabled={webcam === "Start Camera" ? true : false}
                    sx={{
                      // width: "100%",
                      // height: "100%",
                      backgroundColor: "#0a71b9",
                    }}
                    onClick={() => recordVideo()}
                    name={
                      record === "Start Recording" ? (
                        <RadioButtonCheckedOutlinedIcon
                          // onClick={() => recordVideo()}
                          sx={{ fontSize: "30px" }}
                        />
                      ) : (
                        <RadioButtonUncheckedOutlinedIcon
                          // onClick={() => recordVideo()}
                          sx={{ fontSize: "30px" }}
                        />
                      )
                    }
                  />

                  {/* {record === "Start Recording" ? (
                  <RadioButtonCheckedOutlinedIcon
                    onClick={() => recordVideo()}
                    sx={{ fontSize: "30px" }}
                  />
                ) : (
                  <RadioButtonUncheckedOutlinedIcon
                    onClick={() => recordVideo()}
                    sx={{ fontSize: "30px" }}
                  />
                )} */}
                </Grid>
                <Grid item xs={3} md={3} align="left">
                  <ButtonField
                    disabled={disablePlay}
                    sx={{
                      // width: "100%",
                      // height: "100%",
                      backgroundColor: "#0a71b9",
                    }}
                    onClick={playRecorded}
                    name={
                      <PlayCircleFilledWhiteOutlinedIcon
                        // onClick={playRecorded}
                        sx={{ fontSize: "30px" }}
                      />
                    }
                  />
                  {/* {
                  <PlayCircleFilledWhiteOutlinedIcon
                    onClick={playRecorded}
                    sx={{ fontSize: "30px" }}
                  />
                } */}
                </Grid>
                <Grid item xs={3} md={3} align="left">
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
            <ButtonField
              disabled={disablePlay}
              onClick={() => handleSubmit()}
              buttonStyle="submit"
              type="button"
              name="Submit & Proceed"
              variant="contained"
              color="primary"
              sx={{
                width: "20%",
                marginTop: "2%",
                marginBottom: "2%",
              }}
            />
          </Grid>
        </Grid>
      )}
    </>
  );
};

export default EmotionalUndesirability;
