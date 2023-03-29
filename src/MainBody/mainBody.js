import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
import "./mainBody.css";

export default function MainBody() {
  const navigate = useNavigate();
  function nextPage1() {
    navigate("/nextPage1");
  }

  return (
    <div className="body1">
      <div style={{ display: "flex", flexDirection: "column" }}>
        <span className="sale">On Sale Items</span>
        <span className="deal" style={{ fontWeight: "600" }}>
          Deal Of The Month
        </span>
        <span className="collection" style={{ color: "gray" }}>
          Check out our collection to know who you are
        </span>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          color: "#00008B",
          fontWeight: "700",
        }}
      >
        <span className="oFF">Get 50% OFF your order from $100 and More</span>
        <span className="more">Check out collection for more details</span>
      </div>
      <button onClick={nextPage1} type="button" className="btn btn-lg butt2">
        SHOP MORE
      </button>
    </div>
  );
}
