import { useEffect, useState, useRef } from "react";
import Header from "../../common/header";
import { Grid, Paper } from "@mui/material";
import PlayCircleFilledWhiteOutlinedIcon from "@mui/icons-material/PlayCircleFilledWhiteOutlined";
import ReactPlayer from "react-player";
import ButtonField from "../../common/button";
import Replay10OutlinedIcon from "@mui/icons-material/Replay10Outlined";
import Forward10OutlinedIcon from "@mui/icons-material/Forward10Outlined";

import VideocamOutlinedIcon from "@mui/icons-material/VideocamOutlined";
import VideocamOffOutlinedIcon from "@mui/icons-material/VideocamOffOutlined";
import RadioButtonCheckedOutlinedIcon from "@mui/icons-material/RadioButtonCheckedOutlined";
import RadioButtonUncheckedOutlinedIcon from "@mui/icons-material/RadioButtonUncheckedOutlined";

const EmotionalUndesirability = () => {
  const errorMsgElement = document.querySelector("span#errorMsg");
  const recordedVideo = document.querySelector("video#recorded");
  const recordButton = document.querySelector("button#record");
  const playButton = document.querySelector("button#play");
  const downloadButton = document.querySelector("button#download");
  const [disableRecord, setDisableRecord] = useState(true);
  const [disablePlay, setDisablePlay] = useState(true);
  const [disableDownload, setDisableDownload] = useState(true);

  const [showRecorded, setShowRecorded] = useState(false);
  const [record, setRecord] = useState("Start Recording");
  const [webcam, setWebcam] = useState("Start Camera");
  const [recordedBlobs, setRecordedBlobs] = useState([]);
  const [webStream, setWebStream] = useState(null);
  const [recorder, setRecorder] = useState(null);
  const videoRef = useRef(null);

  useEffect(() => {
    document.title = "Breu.ai - Undesirability";
  }, []);

  const startCamera = async (e) => {
    const constraints = {
      audio: true,
      video: {
        width: 1280,
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
    console.log("getUserMedia() got stream:", stream);
    window.stream = stream;
    let video = videoRef.current;
    video.srcObject = stream;
    video.play();
  };

  const handleStop = (stream) => {
    console.log(stream);
    const video = document.querySelector("#gum");
    for (const track of video.srcObject.getTracks()) {
      track.stop();
    }
    video.srcObject = null;
    stream.getTracks().forEach(function (track) {
      console.log(track, track.stop());
      let video = videoRef.current;
      video.pause();
      video.srcObject = null;
      track.stop();
      // if (track.readyState == 'live') {
      //     track.stop();
      // }
    });
    console.log(stream, stream.getTracks());
    setDisableRecord(true);
    setDisablePlay(true);
    setDisableDownload(true);
  };

  const recordVideo = () => {
    if (record === "Start Recording") {
      setRecord("Stop Recording");
      startRecording();
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

    // console.log(
    //   "Created MediaRecorder",
    //   mediaRecorder,
    //   "with options",
    //   options
    // );
    recordButton.textContent = "Stop Recording";
    setDisablePlay(true);
    setShowRecorded(false);
    setDisableDownload(true);
    mediaRecorder.onstop = (event) => {
      // console.log("Recorder stopped: ", event);
      // console.log("Recorded Blobs: ", recordedBlobs);
    };
    mediaRecorder.ondataavailable = handleDataAvailable;
    mediaRecorder.start();
    // console.log("MediaRecorder started", mediaRecorder);
    setRecorder(mediaRecorder);
  };

  const handleDataAvailable = (event) => {
    console.log("handleDataAvailable", event);
    if (event.data && event.data.size > 0) {
      // console.log(recordedBlobs, "before");
      setRecordedBlobs([]);
      let blobs = recordedBlobs.slice(-1);
      // console.log(blobs, "jjdfnjsnf", event.data);
      // blobs.push(event.data);
      setRecordedBlobs([event.data]);
      // console.log([recordedBlobs[recordedBlobs.length - 1]], "after");
      // recordedBlobs.push(event.data);
    }
  };

  const stopRecording = () => {
    recorder.stop();
    setDisablePlay(false);
    setDisableDownload(false);
  };

  const playRecorded = () => {
    const superBuffer = new Blob(recordedBlobs, { type: "video/webm" });
    // console.log(superBuffer, window.URL.createObjectURL(superBuffer));
    recordedVideo.src = null;
    recordedVideo.srcObject = null;
    recordedVideo.src = window.URL.createObjectURL(superBuffer);
    recordedVideo.controls = true;
    recordedVideo.play();
    setShowRecorded(true);
  };

  const downloadVideo = () => {
    const blob = new Blob(recordedBlobs, { type: "video/mp4" });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.style.display = "none";
    a.href = url;
    console.log(a, "sdfsfd", url);
    // a.download = 'test.mp4';
    // document.body.appendChild(a);
    // a.click();
    // setTimeout(() => {
    //     document.body.removeChild(a);
    //     window.URL.revokeObjectURL(url);
    // }, 100);
    const formData = new FormData();
    formData.append("video", blob);
  };

  return (
    <>
      <Header
        name="Emotional Intelligibility"
        caption={"Exploring your Emotional dimension"}
      />

      <Grid container sx={{ marginLeft: "2%" }}>
        <Grid item xs={12} md={5} sx={{ marginLeft: "2%", marginRight: "2%" }}>
          <h1>Demo-1</h1>
          <p style={{ fontSize: "20px", marginRight: "5%" }}>
            Demo – What is expected (tech stack selection, design choices
            tradeoffs, your contribution, learnings if any)
          </p>

          <Paper
            elevation={0}
            sx={{
              background: "#0a71b9",
              color: "white",
              width: "100%",
              // borderRadius: "2% 0% 0% 0%",
            }}
          >
            <video
              width="100%"
              controls
              style={{ borderRadius: "0% 0% 2% 2%" }}
            >
              <source
                src="https://www.youtube.com/watch?v=ysz5S6PUM-U"
                type="video/mp4"
              />
            </video>
            <Grid container sx={{ paddingTop: "2%", paddingBottom: "2%" }}>
              <Grid item xs={4} md={4} align="right">
                <Replay10OutlinedIcon sx={{ fontSize: "30px" }} />
              </Grid>
              <Grid item xs={4} md={4} align="center">
                <PlayCircleFilledWhiteOutlinedIcon
                  sx={{ fontSize: "30px" }}
                  onClick={console.log("Play click")}
                />
              </Grid>
              <Grid item xs={4} md={4} align="left">
                <Forward10OutlinedIcon sx={{ fontSize: "30px" }} />
              </Grid>
            </Grid>
          </Paper>
        </Grid>

        <Grid item xs={12} md={5} sx={{ marginLeft: "2%" }}>
          <h1>Capture</h1>
          <p style={{ fontSize: "20px", marginRight: "5%" }}>
            Demo – What is expected (tech stack selection, design choices
            tradeoffs, your contribution, learnings if any)
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
              width: "100%",
              // borderRadius: "2% 0% 0% 0%",
            }}
          >
            <video
              id="gum"
              ref={videoRef}
              style={{
                display: showRecorded ? "none" : "block",
                width: "100%",
                height: "30%",
                borderRadius: "0% 0% 2% 2%",
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
              }}
              playsinliplaysInlinene
              loop
            ></video>
            <Grid container sx={{ paddingTop: "2%", paddingBottom: "2%" }}>
              <Grid item xs={4} md={4} align="center">
                {/* <Replay10OutlinedIcon sx={{ fontSize: "30px" }} /> */}
                <ButtonField
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
                />
              </Grid>
              <Grid item xs={4} md={4} align="center">
                <ButtonField
                  id="record"
                  disabled={disableRecord}
                  onClick={recordVideo}
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
                />
              </Grid>
              <Grid item xs={4} md={4} align="left">
                <ButtonField
                  id="play"
                  disabled={disablePlay}
                  onClick={playRecorded}
                  buttonStyle="submit"
                  type="submit"
                  endIcon={
                    <PlayCircleFilledWhiteOutlinedIcon
                      sx={{ fontSize: "30px" }}
                    />
                  }
                  name="Play"
                  sx={{
                    width: "80%",
                    backgroundColor: "white",
                    color: "#0a71b9",
                    marginBottom: "2%",
                  }}
                />
              </Grid>
            </Grid>
          </Paper>
        </Grid>

        <Grid item xs={12} md={12} align="center">
          <ButtonField
            disabled={disablePlay}
            onClick={() => console.log("submit Done")}
            buttonStyle="submit"
            type="submit"
            name="Submit"
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

      {/* <div id="container">
        <div className="buttonContainer">
          <button id="start" onClick={startCamera}>
            {webcam}
          </button>
          <button id="record" disabled={disableRecord} onClick={recordVideo}>
            {record}
          </button>
          <button id="play" disabled={disablePlay} onClick={playRecorded}>
            Play
          </button>
          <button
            id="download"
            disabled={disableDownload}
            onClick={downloadVideo}
          >
            Submit
          </button>
        </div>
        <div>
          <span id="errorMsg"></span>
        </div>
      </div> */}
    </>
  );
};

export default EmotionalUndesirability;
