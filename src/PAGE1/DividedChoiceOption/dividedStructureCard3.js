import React from "react";
import "./dividedStructureCard3.css";

export default function DividedStructureCard3(props) {
  return (
    <div className="mainCard3Divided">
      <div className="imageContainer3Divided">
        <img className="images3Divided" src={props.image} />
      </div>
      <div className="text3Divided">
        <div className="textsDivided">
          <span className="title3Divided">{props.title}</span>
          <span className="price3Divided">{props.price}</span>
        </div>
        <button className="knowMore3Divided">Shop now</button>
      </div>
    </div>
  );
}
