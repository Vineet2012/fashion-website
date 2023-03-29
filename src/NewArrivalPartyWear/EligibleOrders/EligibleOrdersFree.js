import React from "react";
import { useSearchParams } from "react-router-dom";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "../ExploreMore/ExploreMore-RelatedCardStruct.css";
import { eligibleOrdersFreeData } from "../../PAGE1/Card1/eligibleOrderFreeData";

export default function EligibleOrders() {
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
  const [eligibleOrdersData, setEligibleOrdersData] = React.useState({});

  React.useEffect(() => {
    const pid = Number(searchParams.get("pid"));
    const eligibleOrder = eligibleOrdersFreeData.find((el) => el.id === pid);
    setEligibleOrdersData(eligibleOrder);
  });

  const eligible = [];

  for (let i in (eligibleOrdersData.image1,
  eligibleOrdersData.title1,
  eligibleOrdersData.price1)) {
    eligible.push(
      <div key={i}>
        <div>
          <div className="frameCard-explore-Related">
            <div className="imageContainerExplore-Related">
              <img
                className="explore-RelatedImage"
                src={eligibleOrdersData.image1[i]}
              />
            </div>
            <div className="explore-RelatedText">
              <div className="explore-RelatedText2">
                <span className="explore-RelatedTitle">
                  {eligibleOrdersData.title1[i]}
                </span>
                <span className="explore-RelatedPrice">
                  {eligibleOrdersData.price1[i]}
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
        Related products with free delivery on eligible orders
      </h3>
      <Carousel responsive={responsive}>{eligible}</Carousel>
    </div>
  );
}
