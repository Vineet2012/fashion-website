import React from "react";
import card2Data from "./card2Data";
import "./cardStructure.css";

export default function CardStructure(props) {
  return (
    <div className="card2-wrapper">
      <div className="Card2">
        <div className="imageContainerCard2">
          <img className="imageCard2" src={props.image} />
          <div className="buttonsCard2">
            <div>
              <button className="btn btn-light butt1" type="button">
                Men
              </button>
            </div>
            <div>
              <button className="btn btn-light butt1" type="button">
                Women
              </button>
            </div>
            <div>
              <button className="btn btn-light butt1" type="button">
                Kids
              </button>
            </div>
          </div>
        </div>

        <span className="titleCard2">{props.title}</span>
      </div>
    </div>
  );
}
