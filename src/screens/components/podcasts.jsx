import React from "react";

const Podcasts = () =>{
    return <div className="podcastsContainer">
    <div className="logoContainer">
      <img
        src={process.env.PUBLIC_URL + "/spotify.png"}
        className="podcastsLogo"
      ></img>
      <p>Spotify Podcasts</p>
    </div>

    <div className="logoContainer">
      <img
        src={process.env.PUBLIC_URL + "/google.png"}
        className="podcastsLogo"
      ></img>
      <h3>Apple Podcasts</h3>
    </div>
    <div className="logoContainer">
      <img
        src={process.env.PUBLIC_URL + "/google.png"}
        className="podcastsLogo"
      ></img>
      <h3>Google Podcasts</h3>
    </div>
    <div className="logoContainer">
      <img
        src={process.env.PUBLIC_URL + "/pocket.png"}
        className="podcastsLogo"
      ></img>
      <h3>Pocket Casts</h3>
    </div>
  </div>
}

export default Podcasts