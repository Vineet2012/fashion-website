import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { cards3DataKids } from "./KidsCard3Data";
import KidsStructureCard3 from "./kidsStructureCard3";

export default function KidsCard3() {
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

  const card3DataKids = cards3DataKids.map((item) => (
    <KidsStructureCard3
      title={item.title}
      image={item.img}
      price={item.price}
    />
  ));

  return (
    <div>
      <Carousel responsive={responsive}>{card3DataKids}</Carousel>
    </div>
  );
}
