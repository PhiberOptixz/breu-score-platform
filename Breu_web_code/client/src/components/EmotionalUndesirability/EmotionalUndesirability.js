import { useEffect, useState, useRef } from "react";
import Header from "../../common/header";

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
      <div id="container">
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
          <video
            id="gum"
            ref={videoRef}
            style={{ display: showRecorded ? "none" : "block" }}
            playsInline
            autoPlay
            muted
          ></video>
          <video
            id="recorded"
            style={{ display: showRecorded ? "block" : "none" }}
            playsinliplaysInlinene
            loop
          ></video>
        </div>
        <div>
          <span id="errorMsg"></span>
        </div>
      </div>
    </>
  );
};

export default EmotionalUndesirability;
