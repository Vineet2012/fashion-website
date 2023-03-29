import React from "react";
import "./card3StructureWomen.css";

export default function Card3StructureWomen(props) {
  return (
    <div className="mainCard3Women">
      <div className="imageContainer3Women">
        <img className="images3Women" src={props.image} />
      </div>
      <div className="text3Women">
        <div className="textsWomen">
          <span className="title3Women">{props.title}</span>
          <span className="price3Women">{props.price}</span>
        </div>
        <button className="knowMore3Women">Shop now</button>
      </div>
    </div>
  );
}
