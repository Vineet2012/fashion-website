import React from "react";
import "./MensFashionStruct.css";
import SizeChartTable from "./sizeChartTable";

export default function SizeChart(props) {
  const { productData } = props;
  return (
    <div>
      <p
        className="sizeChart"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
        data-bs-whatever="@getbootstrap"
        href="#"
      >
        Size Chart ▼
      </p>
      <SizeChartTable productData={props.productData} />
      <div>
        <li>{productData.bulletPoints1}</li>
        <li>{productData.bulletPoints2}</li>
        <li>{productData.bulletPoints3}</li>

        <hr />
      </div>
    </div>
  );
}
