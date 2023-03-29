import React from "react";
import { useSearchParams } from "react-router-dom";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "../ExploreMore/ExploreMore-RelatedCardStruct.css";
import { bestSellerData } from "../../PAGE1/Card1/bestSellerData";

export default function BestSeller() {
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
      breakpoint: { max: 768, min: 320 },
      items: 1,
    },
  };

  const [searchParams, _] = useSearchParams();
  const [bestSellerDatas, setBestSellerData] = React.useState({});

  React.useEffect(() => {
    const pid = Number(searchParams.get("pid"));
    const bestSellerCloth = bestSellerData.find((el) => el.id === pid);
    setBestSellerData(bestSellerCloth);
  });

  const bestSeller = [];

  for (let i in (bestSellerData.image1,
  bestSellerDatas.title1,
  bestSellerDatas.price1)) {
    bestSeller.push(
      <div key={i}>
        <div>
          <div className="frameCard-explore-Related">
            <div className="imageContainerExplore-Related">
              <img
                className="explore-RelatedImage"
                src={bestSellerDatas.image1[i]}
              />
            </div>
            <div className="explore-RelatedText">
              <div className="explore-RelatedText2">
                <span className="explore-RelatedTitle">
                  {bestSellerDatas.title1[i]}
                </span>
                <span className="explore-RelatedPrice">
                  {bestSellerDatas.price1[i]}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <h3 style={{ margin: "24px", fontWeight: "700" }}>
        Best Sellers in Clothing & Accessories
      </h3>
      <Carousel responsive={responsive}>{bestSeller}</Carousel>
    </div>
  );
}
