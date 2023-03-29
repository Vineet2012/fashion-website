import React from "react";
import SpecialOffer from "./SpecialOffer/specialOffer";
import MensFashionStruct from "./MensFashionStruct/MensFashionStruct";
import "./MensFashionImage.css";
import ExploreMoreRaymonds from "./ExploreMore/ExploreMoreRaymonds";
import ProductDetails from "./ProductDetails/ProductDetails";
import ProductDescription from "./productsDescription/ProductDescription";
import CategoryOnAmazon from "./categoryOnAmazon.js/CategoryOnAmazon";
import NextPageNavBar from "../PAGE1/nextPage1NavBar/nextPageNavBar";
import ProductRelatedToThisItem from "./ProductrelatedToThisItem/productRelatedToThisItem";
import CustomerReviews from "./CustomerReview/CustomerReviews";
import EligibleOrders from "./EligibleOrders/EligibleOrdersFree";
import BestSeller from "./BestSeller/BestSeller";
import SignInButton from "./SignInButton/SignInButton";
import { useSearchParams } from "react-router-dom";
import { cardsData } from "../PAGE1/Card1/cardsData";
import { categoryOnAmazonData } from "../PAGE1/Card1/categoryOnAmazonData";

export default function MensFashionImage() {
  const [searchParams, _] = useSearchParams();
  const [descriptionData, setDescriptiontData] = React.useState({});

  React.useEffect(() => {
    const pid = Number(searchParams.get("pid"));
    const description = cardsData.find((el) => el.id === pid);
    setDescriptiontData(description);
  });

  const [categoryData, setCategoryData] = React.useState({});

  React.useEffect(() => {
    const pid = Number(searchParams.get("pid"));
    const category = categoryOnAmazonData.find((el) => el.id === pid);
    setCategoryData(category);
  });

  return (
    <div>
      <NextPageNavBar />
      <MensFashionStruct />
      <hr className="hrTag" />
      <SpecialOffer />
      <hr className="hrTag" />
      <ExploreMoreRaymonds />
      <hr className="hrTag" />
      <ProductDetails />
      <hr className="hrTag" />
      {descriptionData.ProductDescriptionHead ? (
        <div>
          <ProductDescription />
          <hr className="hrTag" />
        </div>
      ) : (
        ""
      )}
      <ProductRelatedToThisItem />
      <hr className="hrTag" />
      {categoryData.categoryHead ? (
        <div>
          <CategoryOnAmazon />
          <hr className="hrTag" />
        </div>
      ) : (
        " "
      )}
      <CustomerReviews />
      <hr className="hrTag" />
      <EligibleOrders />
      <hr className="hrTag" />
      <BestSeller />
      <hr className="hrTag" />
      <SignInButton />
    </div>
  );
}
