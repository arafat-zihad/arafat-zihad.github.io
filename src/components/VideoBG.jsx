import React from "react";
import bgFallback from "../assets/background/bg.png";

const VideoBG = () => {
  return (
    <div className="video-bg-container">
      <img
        src={bgFallback}
        alt="Arafat Zihad - Portfolio Background"
        className="video-bg-image"
      />
    </div>
  );
};

export default VideoBG;
