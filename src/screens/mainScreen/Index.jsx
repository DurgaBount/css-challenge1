import React from "react";
import "./styles.css";
import Podcasts from "../components/podcasts";
import Content from "../components/content";
import {
  PUBLISH_YOUR_PODCASTS,
  EVERY_WHERE,
  UPLOAD_PARAGRAPH,
  REQUEST_ACCESS,
} from "../constants/strings";

const MainScreen = () => {
  const LogoAndImg = () => {
    return (
      <div className="LogoAndImgContainer">
        <img
          src={process.env.PUBLIC_URL + "/podlogo.png"}
          className="logo"
        ></img>
        <h3>pod</h3>
      </div>
    );
  };

  return (
    <div className="container">
      {/* This is for laptop and tablet */}
      <div className="laptopContainer">
        <div className="logoImgC">
          <LogoAndImg />
        </div>
        <div className="wallpaper">
          <img src={process.env.PUBLIC_URL + "/podcasts_l.png"}></img>
        </div>
        <div className="contentDetails">
          <p className="mainText">
            {PUBLISH_YOUR_PODCASTS}
            <span className="whiteText">{EVERY_WHERE}</span>
          </p>
          <p className="regularText">{UPLOAD_PARAGRAPH}</p>
          <div className="inputContainer">
            <input placeholder="Email address"></input>
            <button className="buttonContainer">{REQUEST_ACCESS}</button>
          </div>
          <div>
            <Podcasts />
          </div>
        </div>

        <img className="dots" src={process.env.PUBLIC_URL + "/dots.png"}></img>
      </div>

      {/* This is for mobile */}
      <div className="mobileC">
        <LogoAndImg />
        <div className="mobileContent">
          <Content />
        </div>
      </div>
    </div>
  );
};

export default MainScreen;
