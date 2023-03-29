import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Card3StructureWomen from "./card3StructureWomen";
import { cards3DataWomen } from "./womenCard3Data";

export default function WomenCard3() {
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

  const card3DataWomen = cards3DataWomen.map((item) => (
    <Card3StructureWomen
      title={item.title}
      image={item.img}
      price={item.price}
    />
  ));

  return (
    <div>
      <Carousel responsive={responsive}>{card3DataWomen}</Carousel>
    </div>
  );
}
