import React from "react";
import { card2Data } from "./card2Data";
import CardStructure from "./cardStructure";
import "./cardStructure.css";

export default function Card2() {
  const card2Datas = card2Data.map((item) => (
    <CardStructure title={item.title} image={item.img} price={item.price} />
  ));

  return (
    <div>
      <h1
        style={{
          marginTop: "80px",
          marginBottom: "40px",
          textAlign: "center",
          fontWeight: "700",
          letterSpacing: "3px",
        }}
      >
        SHOP THE COLLECTION
      </h1>
      <div className="card2-main" style={{ display: "flex", flex: "1" }}>
        {card2Datas}
      </div>
    </div>
  );
}
