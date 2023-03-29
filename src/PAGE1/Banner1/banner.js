import React from "react";
import banner from "./banner.jpg";
import "./banner.css";

export default function Banner() {
  return (
    <div>
      <div style={{ position: "relative" }}>
        <span className="bannerText">LOVE FASHION OVER EVERYTHING</span>
        <img className="bannerImage" src={banner} />
        <div className="bannerLowerArea">
          <h1 className="bannerLowerHeading">Year Of The Rabbit</h1>
          <p className="bannerLowerPara">
            To celebrate Lunar New Year we’re releasing a special edition Wool
            Runner.
          </p>
          <div class="d-grid gap-2 col-3 mx-auto">
            <button class="btn btn-dark bannerLowerButton" type="button">
              SHOP NOW
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
