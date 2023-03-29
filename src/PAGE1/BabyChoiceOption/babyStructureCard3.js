import React from "react";
import "./babyStructureCard3.css";

export default function BabyStructureCard3(props) {
  return (
    <div className="mainCard3Baby">
      <div className="imageContainer3Baby">
        <img className="images3Baby" src={props.image} />
      </div>
      <div className="text3Baby">
        <div className="textsBaby">
          <span className="title3Baby">{props.title}</span>
          <span className="price3Baby">{props.price}</span>
        </div>
        <button className="knowMore3Baby">Shop now</button>
      </div>
    </div>
  );
}
