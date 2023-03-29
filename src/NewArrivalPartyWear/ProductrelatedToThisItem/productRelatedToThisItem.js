import React from "react";
import { useSearchParams } from "react-router-dom";
import { productRelatedToThisItemData } from "../../PAGE1/Card1/productRelatedToThisItemData";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "../ExploreMore/ExploreMore-RelatedCardStruct.css";

export default function ProductRelatedToThisItem() {
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
  const [productRelatedData, setProductRelatedData] = React.useState({});

  React.useEffect(() => {
    const pid = Number(searchParams.get("pid"));
    const productRelated = productRelatedToThisItemData.find(
      (el) => el.id === pid
    );
    setProductRelatedData(productRelated);
  });

  const related = [];

  for (let i in (productRelatedData.image1,
  productRelatedData.title1,
  productRelatedData.price1)) {
    related.push(
      <div key={i}>
        <div>
          <div className="frameCard-explore-Related">
            <div className="imageContainerExplore-Related">
              <img
                className="explore-RelatedImage"
                src={productRelatedData.image1[i]}
              />
            </div>
            <div className="explore-RelatedText">
              <div className="explore-RelatedText2">
                <span className="explore-RelatedTitle">
                  {productRelatedData.title1[i]}
                </span>
                <span className="explore-RelatedPrice">
                  {productRelatedData.price1[i]}
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
        Products related to this item
      </h3>
      <Carousel responsive={responsive}>{related}</Carousel>
    </div>
  );
}
