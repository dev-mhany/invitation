import React, { useRef, useState, useEffect } from "react";
import "./MainPage.css";
import CountdownTimer from "./CountdownTimer";
import myAudio from "./video.mp3";
import Button from "@mui/material/Button";
import HeadphonesIcon from "@mui/icons-material/Headphones";
import LocationOnIcon from "@mui/icons-material/LocationOn";

// import floralImage from "./122.png";
import Spoiler from "./Spoiler"; // Import your Spoiler component

const MainPage = () => {
  const audioRef = useRef(null);
  const [isButtonClicked, setIsButtonClicked] = useState(false);
  const [isImageLoaded, setIsImageLoaded] = useState(false); // New state for image load
  const [title, setTitle] = useState("Engagement Invitation");
  const mapUrl = "https://maps.app.goo.gl/8S5xJrEYUANQUKXRA";

  const handleEnd = () => {
    setTitle("Finally Engaged");
  };
  useEffect(() => {
    const img = new Image();
    img.onload = () => {
      setIsImageLoaded(true); // Set the image load state to true
    };
    img.src = "./123.jpg"; // URL of your background image
  }, []);

  const playAudio = () => {
    if (audioRef.current) {
      audioRef.current
        .play()
        .then(() => {
          setIsButtonClicked(true); // Hide the Spoiler and show the invitation text and background image
        })
        .catch((error) => {
          console.error("Error occurred when trying to play audio:", error);
        });
    }
  };

  return (
    <div className="main-page">
      <div
        className={`background-image ${isImageLoaded ? "visible" : ""}`}
      ></div>
      <div className={`content ${isImageLoaded ? "visible" : ""}`}></div>
      {!isButtonClicked && <Spoiler />}

      {isButtonClicked && <div className="background-image" />}
      <audio ref={audioRef} style={{ display: "none" }} loop>
        <source src={myAudio} type="audio/mpeg" />
      </audio>
      {!isButtonClicked && (
        <Button
          className="play-button"
          variant="outlined"
          size="large"
          startIcon={<HeadphonesIcon />}
          onClick={playAudio}
          style={{
            fontSize: "2em",
            padding: "10px 20px",
            cursor: "pointer",
            zIndex: 100,
            position: "revert-layer",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            backgroundColor: "rgba(255, 255, 255, 0.8)",
          }}
        >
          Play Me
        </Button>
      )}
      {isButtonClicked && (
        <>
          <div className="title">{title}</div>
          <div className="invitation-text">
            <div className="names">Ahmed & Suhaila</div>
            <div className="date">Thursday, 21 December 2023</div>
            <div className="countdown">
              <CountdownTimer onEnd={handleEnd} />
            </div>
            <div className="additional-content">
              <Button
                variant="contained"
                color="primary"
                startIcon={<LocationOnIcon />}
                onClick={() => window.open(mapUrl, "_blank")}
              >
                View Location
              </Button>
              <br />
              <br />
              <br />
              <p className="custom-text"></p>
              <div className="arabic">بحضوركم تكتمل فرحتنا</div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default MainPage;
