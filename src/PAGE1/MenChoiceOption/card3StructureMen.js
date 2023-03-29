import React from "react";
import "./card3StructureMen.css";

export default function Card3StructureMen(props) {
  return (
    <div className="mainCard3Men">
      <div className="imageContainer3Men">
        <img className="images3Men" src={props.image} />
      </div>
      <div className="text3Men">
        <div className="textsMen">
          <span className="title3Men">{props.title}</span>
          <span className="price3Men">{props.price}</span>
        </div>
        <button className="knowMore3Men">Shop now</button>
      </div>
    </div>
  );
}
