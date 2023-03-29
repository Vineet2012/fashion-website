import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { cards3Data, cards3DataMen } from "./mensCard3Data";
import Card3StructureMen from "./card3StructureMen";

export default function Card3Men() {
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
      breakpoint: { max: 767, min: 425 },
      items: 2,
    },
  };

  const card3DataMen = cards3DataMen.map((item) => (
    <Card3StructureMen title={item.title} image={item.img} price={item.price} />
  ));

  return (
    <div>
      <Carousel responsive={responsive}>{card3DataMen}</Carousel>
    </div>
  );
}
