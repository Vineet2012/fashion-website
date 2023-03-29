import React from "react";
import "./homeStructureCard3.css";

export default function HomeStructureCard3(props) {
  return (
    <div className="mainCard3Home">
      <div className="imageContainer3Home">
        <img className="images3Home" src={props.image} />
      </div>
      <div className="text3Home">
        <div className="textsHome">
          <span className="title3Home">{props.title}</span>
          <span className="price3Home">{props.price}</span>
        </div>
        <button className="knowMore3Home">Shop now</button>
      </div>
    </div>
  );
}
