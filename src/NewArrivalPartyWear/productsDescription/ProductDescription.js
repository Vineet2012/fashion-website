import React from "react";
import { useSearchParams } from "react-router-dom";
import { cardsData } from "../../PAGE1/Card1/cardsData";
import "./ProductDescription.css";

export default function ProductDescription() {
  const [searchParams, _] = useSearchParams();
  const [descriptionData, setDescriptiontData] = React.useState({});

  React.useEffect(() => {
    const pid = Number(searchParams.get("pid"));
    const description = cardsData.find((el) => el.id === pid);
    setDescriptiontData(description);
  });

  return (
    <div>
      <h3 style={{ margin: "24px", fontWeight: "700" }}>
        {descriptionData.productsDescriptionHead}
      </h3>
      <p className="textDescription">{descriptionData.productsDescription}</p>
    </div>
  );
}
