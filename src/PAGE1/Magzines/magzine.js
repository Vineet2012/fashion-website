import React from "react";
import "react-multi-carousel/lib/styles.css";
import { magzineData } from "./magzineData";
import MagzineText from "./magzineText";
import "./magzineText.css";

export default function Magzine() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 768, min: 464 },
      items: 2,
    },
  };

  const magzinesData = magzineData.map((item) => (
    <MagzineText title={item.title} image={item.img} price={item.price} />
  ));

  return (
    <div className="magzineDiv">
      <div className="magzineHead">
        <h1 style={{ marginTop: "40px" }}>MAGAZINE</h1>
        <span>A World Of Inspiration</span>
      </div>
      <div className="magzine-wrapper">{magzinesData}</div>
    </div>
  );
}
