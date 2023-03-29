import React from "react";
import "./kidsStructureCard3.css";

export default function KidsStructureCard3(props) {
  return (
    <div className="mainCard3Kids">
      <div className="imageContainer3Kids">
        <img className="images3Kids" src={props.image} />
      </div>
      <div className="text3Kids">
        <div className="textsKids">
          <span className="title3Kids">{props.title}</span>
          <span className="price3Kids">{props.price}</span>
        </div>
        <button className="knowMore3Kids">Shop now</button>
      </div>
    </div>
  );
}
