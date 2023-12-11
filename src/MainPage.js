import React, { useRef, useState } from "react";
import "./MainPage.css";
import CountdownTimer from "./CountdownTimer";
import myAudio from "./video.mp3";
import Button from "@mui/material/Button";
import HeadphonesIcon from "@mui/icons-material/Headphones";
import floralImage from "./122.png";
import Spoiler from "./Spoiler"; // Import your Spoiler component

const MainPage = () => {
  const audioRef = useRef(null);
  const [isButtonClicked, setIsButtonClicked] = useState(false);
  const [title, setTitle] = useState("Engagement Invitation");

  const handleEnd = () => {
    setTitle("Finally Engaged");
  };

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
      {/* Conditionally render the Spoiler component */}
      {!isButtonClicked && <Spoiler />}

      {/* Rest of your component */}
      {isButtonClicked && <div className="background-image" />}
      <audio ref={audioRef} style={{ display: "none" }}>
        <source src={myAudio} type="audio/mpeg" />
      </audio>
      {!isButtonClicked && (
        <Button
          variant="outlined"
          size="large"
          startIcon={<HeadphonesIcon />}
          onClick={playAudio}
          style={{
            fontSize: "2em",
            padding: "10px 20px",
            cursor: "pointer",
            zIndex: 1,
          }}
        >
          Play Me
        </Button>
      )}
      {isButtonClicked && (
        <>
          <div className="title">{title}</div>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <div className="invitation-text">
            <div className="names">Ahmed & Sohaila</div>
            <div className="date">Thursday, 21 December 2023</div>
            <div className="countdown">
              <CountdownTimer onEnd={handleEnd} />
            </div>
            <div className="additional-content">
              {/* Custom text */}
              <p className="custom-text">
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
              </p>
              {/* <div className="names">Ahmed & Sohaila</div> */}

              {/* Decorative image */}
              <img
                src={floralImage}
                alt="Floral decoration"
                className="decorative-image"
              />

              {/* Names styled similarly to the example provided */}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default MainPage;
