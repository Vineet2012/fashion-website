import React from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { specialOfferData } from "../../PAGE1/Card1/specialOfferData";
import HeresHow1 from "./HeresHow1";
import HeresHow2 from "./HeresHow2";
import HeresHow3 from "./HeresHow3";
import "./specialOffer.css";

export default function SpecialOffer(props) {
  const [searchParams, _] = useSearchParams();
  const [specialData, setSpecialData] = React.useState({});

  React.useEffect(() => {
    const pid = Number(searchParams.get("pid"));
    const special = specialOfferData.find((el) => el.id === pid);
    setSpecialData(special);
  });

  const navigate = useNavigate();
  function SignUpForFree() {
    navigate("/SignUpForFree");
  }

  return (
    <div className="specialOffer--wrapper">
      <h3 style={{ fontWeight: "650", marginLeft: "24px" }}>
        Special offers and product promotions
      </h3>
      {specialData.colorSize && specialData.promotionLink ? (
        <div>
          <span className="sizeColor">{specialData.colorSize}</span>
          <span className="linkSpan">
            {specialData.promotion} <a href="#">{specialData.promotionLink}</a>.
          </span>
        </div>
      ) : (
        ""
      )}
      <div className="bullets-link">
        <li className="bullets">{specialData.bullet1}</li>
        <HeresHow1 />
      </div>
      <div className="bullets-link">
        <li className="bullets">{specialData.bullet2}</li>
        <HeresHow2 />
      </div>
      <div className="bullets-link">
        <li className="bullets">
          {specialData.bullet3}
          {specialData.bullet3Link1 ? (
            <a onClick={SignUpForFree} className="HeresHow">
              {specialData.bullet3Link1}
            </a>
          ) : (
            ""
          )}
        </li>
        <HeresHow3 />
      </div>
      {specialData.bullet4 ? (
        <div className="bullets-link">
          <li className="bullets">{specialData.bullet4}</li>
          {specialData.bullet4Link1 ? (
            <a onClick={SignUpForFree} className="HeresHow">
              {specialData.bullet4Link1}
            </a>
          ) : (
            ""
          )}
          <HeresHow3 />
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
