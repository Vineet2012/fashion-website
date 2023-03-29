import React from "react";
import { useSearchParams } from "react-router-dom";
import { cardsData } from "../../PAGE1/Card1/cardsData";
import "./MensFashionStruct.css";
import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/styles.css";
import SizeChart from "./SizeChart";

const AutoplaySlider = withAutoplay(AwesomeSlider);

export default function MensFashionStruct() {
  const [searchParams, _] = useSearchParams();
  const [productData, setProductData] = React.useState({});

  React.useEffect(() => {
    const pid = Number(searchParams.get("pid"));
    const product = cardsData.find((el) => el.id === pid);
    setProductData(product);
  });
  return (
    <div className="mainDivAuto">
      <div className="autoplayer1">
        <AutoplaySlider
          play={true}
          cancelOnInteraction={false} // should stop playing on user interaction
          interval={1600}
          fillParent={true}
        >
          <div className="img1" data-src={productData.knowMoreImg1} />
          <div className="img1" data-src={productData.knowMoreImg2} />
          <div className="img1" data-src={productData.knowMoreImg3} />
        </AutoplaySlider>
      </div>
      <div className="Body">
        <h1 className="brandName">{productData.brand}</h1>
        <img className="star" src={productData.starImage} />
        <hr />
        <div className="priceText">
          <p>Price :</p>
          <p className="amount">{productData.priceKnowMore}</p>
        </div>
        <p style={{ marginLeft: "24px" }}>Inclusive of all taxes</p>
        <a className="topbrand">Top Brands</a>
        <hr />
        <div className="qualityColumn">
          <span>Color :</span>
          <span style={{ marginLeft: "14px" }}>{productData.color}</span>
        </div>
        <p style={{ marginTop: "8px" }}>Size : </p>
        <select style={{ width: "88px", borderRadius: "8px" }}>
          <option>Select</option>
          <option>{productData.size1}</option>
          <option>{productData.size2}</option>
          <option>{productData.size3}</option>
        </select>
        <SizeChart productData={productData} />
      </div>
    </div>
  );
}
