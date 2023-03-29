import React from "react";
import "./magzineText.css";

export default function MagzineText(props) {
  return (
    <div className="magzineAlign">
      <div className="mainCard3Magzine">
        <div className="imageContainer3Magzine">
          <img className="images3Magzine" src={props.image} />
        </div>
        <div className="text3Magzine">
          <div className="textsMagzine">
            <span className="title3Magzine">{props.title}</span>
          </div>
        </div>
        <button className="knowMore3Magzine">Read Full Story - </button>
      </div>
    </div>
  );
}
