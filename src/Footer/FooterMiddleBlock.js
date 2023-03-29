import React from "react";
import FooterBottomBlock from "./FooterBottomBlock";
import "./FooterMiddleBlock.css";

export default function FooterMiddleBlock() {
  return (
    <div>
      <div style={{ marginBottom: "40px", marginTop: "40px" }}>
        <h3 style={{ textAlign: "center" }}>FAMILCO</h3>
        <div className="placesLinks">
          <a className="place">Australia</a>
          <a className="place">Brazil</a>
          <a className="place">Canada</a>
          <a className="place">China</a>
          <a className="place">France</a>
          <a className="place">Germany</a>
          <a className="place">America</a>
          <a className="place">France</a>
          <a className="place">Paris</a>
        </div>
        <div className="placeLinks2">
          <a className="place">Poland</a>
          <a className="place">Singapore</a>
          <a className="place">Spain</a>
          <a className="place">Turkey</a>
        </div>
      </div>
      <FooterBottomBlock />
    </div>
  );
}
