import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./cards.css";

export default function Cards(props) {
  const navigate = useNavigate();
  function mensFashionImage() {
    navigate("/MensFashionImage?pid=" + props.id);
    console.log(props);
  }

  const [hover, setHover] = useState(0);

  return (
    <div className="mainCard">
      <div className="imageContainer">
        {hover === 0 ? (
          <img
            onMouseOver={() => setHover(1)}
            className="images"
            src={props.image}
          />
        ) : (
          <img
            onMouseOut={() => setHover(0)}
            className="images"
            src={props.image1}
          />
        )}
      </div>
      <div className="text">
        <div className="text2">
          <span className="title">{props.title}</span>
          <span className="price">{props.price}</span>
        </div>
        <button onClick={mensFashionImage} className="knowMore">
          know more
        </button>
      </div>
    </div>
  );
}
