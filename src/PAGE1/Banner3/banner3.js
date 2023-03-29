import React from "react";
import "./banner3.css";

export default function Banner3() {
  return (
    <div className="banner3-wrapper">
      <img
        className="banner3Image"
        src="https://images.unsplash.com/photo-1604075713851-f06bb83e00d1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
      />
      <div className="blackBox">
        <span>Rs.1900.00</span>
        <span>Parachute Fashion {">"}</span>
      </div>
      <div className="banner3text">
        <h1 className="banner3-head">Hello new season and new outfits</h1>
        <p>Find your fav fashion</p>
        <button className="butt">Shop now</button>
      </div>
    </div>
  );
}
