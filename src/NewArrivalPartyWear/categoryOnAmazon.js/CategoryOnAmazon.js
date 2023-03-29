import React from "react";
import { useSearchParams } from "react-router-dom";
import { categoryOnAmazonData } from "../../PAGE1/Card1/categoryOnAmazonData";
import "./CategoryOnAmazon.css";

export default function CategoryOnAmazon() {
  const [searchParams, _] = useSearchParams();
  const [categoryData, setCategoryData] = React.useState({});

  React.useEffect(() => {
    const pid = Number(searchParams.get("pid"));
    const category = categoryOnAmazonData.find((el) => el.id === pid);
    setCategoryData(category);
  });

  const cards = [];

  for (let i in (categoryData.imag1,
  categoryData.head1,
  categoryData.para1,
  categoryData.link1,
  categoryData.price)) {
    cards.push(
      <div key={i}>
        <div className="card-wrapper">
          <div className="card mb-4" style={{ maxWidth: "540px" }}>
            <div className="row g-0">
              <div className="col-md-4">
                <img
                  src={categoryData.imag1[i]}
                  className="img-fluid rounded-start"
                  alt="..."
                />
              </div>
              <div className="col-md-8">
                <div className="card-body" style={{ marginTop: "16px" }}>
                  <h5 className="card-title">{categoryData.head1[i]}</h5>
                  {categoryData.para1 && categoryData.link1 ? (
                    <div>
                      <p className="card-text">{categoryData.para1[i]}</p>
                      <a href="#" className="card-text links">
                        {categoryData.link1[i]}
                      </a>
                    </div>
                  ) : (
                    <p className="priceCategory">{categoryData.price[i]}</p>
                  )}
                </div>
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
        Brands in this category on Familco
      </h3>
      <div className="card-wrapper">{cards}</div>
    </div>
  );
}
