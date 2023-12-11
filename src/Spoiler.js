import { useEffect, useState } from "react";
import "./spoiler.css";

const Spoiler = () => {
  // Example state variable, replace with your actual logic
  const [isActive, setIsActive] = useState(false);

  const handleButtonClick = () => {
    setIsActive(!isActive);
  };

  // Example of useEffect, replace with your actual logic
  useEffect(() => {
    // You might want to do something when the component mounts or updates
  }, [isActive]); // Dependency array controls when this effect runs

  return (
    <div id="spoilerDiv" onClick={handleButtonClick}>
      <ul id="rmvMe_circles" className="circles">
        <img alt="" src="pictures/flowr1.webp" />
        <img alt="" src="pictures/flowr1.webp" />
        <img alt="" src="pictures/flowr1.webp" />
        <img alt="" src="pictures/flowr1.webp" />

        <img alt="" src="pictures/flowr2.webp" />
        <img alt="" src="pictures/flowr2.webp" />
        <img alt="" src="pictures/flowr2.webp" />
        <img alt="" src="pictures/flowr2.webp" />

        <img alt="" src="pictures/flowr3.webp" />
        <img alt="" src="pictures/flowr3.webp" />
        <img alt="" src="pictures/flowr3.webp" />
        <img alt="" src="pictures/flowr3.webp" />

        <img alt="" src="pictures/flowr4.webp" />
        <img alt="" src="pictures/flowr4.webp" />
        <img alt="" src="pictures/flowr4.webp" />
        <img alt="" src="pictures/flowr4.webp" />
      </ul>

      <div id="btnGrid">
        <img alt="" id="img22" src="pictures/gift-card3.webp" />

        <button id="click-me">
          <img alt="" src="pictures/gift-card.webp" id="bowknot" width="150" />
        </button>
      </div>

      <div id="container">
        <span className="text1"></span>
        <span className="text2"></span>
      </div>
    </div>
  );
};

export default Spoiler;
