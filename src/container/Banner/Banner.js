import React from "react";
import "./banner.css";

const Banner = () => {
  const truncate = (string, n) => {
    return string?.length > n ? string.substr(0, n - 1) + "..." : string;
  };
  return (
    <div
      className="banner"
      style={{
        backgroundImage:
          'url("https://cutewallpaper.org/21/pitch-black-background/Pitch-Black-Wallpapers-Top-Free-Pitch-Black-Backgrounds-.png")',
      }}
    >
      <div className="banner__content">
        <h1 className="banner__title">Movie Name</h1>
        <div className="banner__buttons" style={{ paddingTop: "18px" }}>
          <button className="banner__button">Play</button>
          <button className="banner__button">My List</button>
        </div>
        <p className="banner__description" style={{ paddingTop: "18px" }}>
          {truncate(
            `Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
          facere, sit adipisci accusantium, vel ipsa error dolore aliquam iste
          repudiandae obcaecati labore possimus sequi hic accusamus, esse a.
          Provident, debitis`,
            150
          )}
        </p>
      </div>
    </div>
  );
};

export default Banner;
