import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { cards3DataBaby } from "./babyCard3Data";
import BabyStructureCard3 from "./babyStructureCard3";

export default function BabyCard3() {
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
      breakpoint: { max: 1024, min: 768 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 767, min: 320 },
      items: 1,
    },
  };

  const card3DataBaby = cards3DataBaby.map((item) => (
    <BabyStructureCard3
      title={item.title}
      image={item.img}
      price={item.price}
    />
  ));

  return (
    <div>
      <Carousel responsive={responsive}>{card3DataBaby}</Carousel>
    </div>
  );
}
