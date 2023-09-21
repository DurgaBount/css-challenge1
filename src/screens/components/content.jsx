import React from "react";
import Podcasts from "./podcasts";
import { PUBLISH_YOUR_PODCASTS, EVERY_WHERE, REQUEST_ACCESS, UPLOAD_PARAGRAPH } from "../constants/strings";

const Content = () => {
  return (
    <div className="contentContainer">
      <p className="mainText">{PUBLISH_YOUR_PODCASTS}
            <span className="whiteText">{EVERY_WHERE}</span></p>
      <p className="regularText">
        {UPLOAD_PARAGRAPH}
      </p>
      <Podcasts />
      <div className="inputForMobile">
        <input className="inputn" placeholder="Email address"></input>
        <button className="buttonContainer">{REQUEST_ACCESS}</button>
      </div>
    </div>
  );
};

export default Content;
