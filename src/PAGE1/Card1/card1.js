import React, { useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Cards from "./cards";
import { cardsData } from "./cardsData";

export default function Card1() {
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

  const cardData = cardsData.map((item) => (
    <Cards
      id={item.id}
      title={item.title}
      image={item.img}
      image1={item.img1}
      price={item.price}
      knowMoreImg1={item.knowMoreImg1}
      knowMoreImg2={item.knowMoreImg2}
      knowMoreImg3={item.knowMoreImg3}
      brand={item.brand}
      starImage={item.starImage}
      priceKnowMore={item.priceKnowMore}
      color={item.color}
      size1={item.size1}
      size2={item.size2}
      size3={item.size3}
      bulletPoints1={item.bulletPoints1}
      bulletPoints2={item.bulletPoints2}
      bulletPoints3={item.bulletPoints3}
      productsDescription={item.productsDescription}
    />
  ));

  return (
    <div>
      <h1
        style={{
          textAlign: "center",
          marginTop: "20px",
          marginBottom: "40px",
          fontWeight: "700",
          letterSpacing: "3px",
        }}
      >
        NEW ARRIVAL
      </h1>
      <Carousel responsive={responsive}>{cardData}</Carousel>
    </div>
  );
}
