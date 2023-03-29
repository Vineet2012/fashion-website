import React from "react";
import { useSearchParams } from "react-router-dom";
import { productDetailsData } from "../../PAGE1/Card1/productDetailsData";
import "./ProductDetails.css";

export default function ProductDetails() {
  const [searchParams, _] = useSearchParams();
  const [productDetailData, setProductDetailsData] = React.useState({});

  React.useEffect(() => {
    const pid = Number(searchParams.get("pid"));
    const productDetails = productDetailsData.find((el) => el.id === pid);
    setProductDetailsData(productDetails);
  });

  return (
    <div>
      <h3 style={{ margin: "24px", fontWeight: "700" }}>Product details</h3>
      <div className="detailsProduct">
        <span>{productDetailData.productDimensions}</span>
        <span>{productDetailData.dateAvailable}</span>
        <span>{productDetailData.manufacture}</span>
        <span>{productDetailData.asin}</span>
        <span>{productDetailData.itemModelnumber}</span>
        <span>{productDetailData.countryOrigin}</span>
        <span>{productDetailData.department}</span>
        <span>{productDetailData.manufacturer}</span>
        <span>{productDetailData.packer}</span>
        <span>{productDetailData.itemWeight}</span>
        <span>{productDetailData.itemDimension}</span>
        {productDetailData.genericname ? (
          <span>{productDetailData.genericname}</span>
        ) : (
          ""
        )}
        {productDetailData.NetQuantity ? (
          <span>{productDetailData.NetQuantity}</span>
        ) : (
          ""
        )}
        <span>{productDetailData.bestSellerRank}</span>
      </div>
    </div>
  );
}
