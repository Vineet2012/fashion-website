import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useSearchParams } from "react-router-dom";
import { exploreMoreRaymondsData } from "../../PAGE1/Card1/exploreMoreRaymondsData";
import "./ExploreMore-RelatedCardStruct.css";

export default function ExploreMoreRaymonds() {
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
      items: 2,
    },
    mobile: {
      breakpoint: { max: 768, min: 425 },
      items: 2,
    },
  };

  const [searchParams, _] = useSearchParams();
  const [exploreData, setExploreData] = React.useState({});

  React.useEffect(() => {
    const pid = Number(searchParams.get("pid"));
    const exploreDetails = exploreMoreRaymondsData.find((el) => el.id === pid);
    setExploreData(exploreDetails);
  });

  const explore = [];

  for (let i in (exploreData.image1, exploreData.title1, exploreData.price1)) {
    explore.push(
      <div key={i}>
        <div>
          <div className="frameCard-explore-Related">
            <div className="imageContainerExplore-Related">
              <img
                className="explore-RelatedImage"
                src={exploreData.image1[i]}
              />
            </div>
            <div className="explore-RelatedText">
              <div className="explore-RelatedText2">
                <span className="explore-RelatedTitle">
                  {exploreData.title1[i]}
                </span>
                <span className="explore-RelatedPrice">
                  {exploreData.price1[i]}
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
        Explore More From Raymonds
      </h3>
      <Carousel responsive={responsive}>{explore}</Carousel>
    </div>
  );
}
