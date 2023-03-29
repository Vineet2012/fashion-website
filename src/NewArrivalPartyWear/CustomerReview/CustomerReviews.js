import React from "react";
import { useSearchParams } from "react-router-dom";
import { customerReviewData } from "../../PAGE1/Card1/customerReviewData";
import "./CustomerReviews.css";

export default function CustomerReviews() {
  const [searchParams, _] = useSearchParams();
  const [customerReviewDatas, setCustomerReviewData] = React.useState({});

  React.useEffect(() => {
    const pid = Number(searchParams.get("pid"));
    const customerReview = customerReviewData.find((el) => el.id === pid);
    setCustomerReviewData(customerReview);
  });

  const reviewStarNumber = [];

  for (let i in (customerReviewDatas.starNumber,
  customerReviewDatas.progressPercentage)) {
    reviewStarNumber.push(
      <div key={i} style={{ display: "flex" }}>
        <p
          style={{
            color:
              customerReviewDatas.progressPercentage[i] > "0%"
                ? "#007185"
                : "black",
            fontSize: "14px",
          }}
        >
          {customerReviewDatas.starNumber[i]}
        </p>
        <div
          className="progress progress1"
          role="progressbar"
          aria-label="Warning example"
          aria-valuenow="75"
          aria-valuemin="0"
          aria-valuemax="100"
        >
          <div
            className="progress-bar bg-warning"
            style={{
              width: customerReviewDatas.progressPercentage[i],
            }}
          ></div>
        </div>
        <p style={{ marginLeft: "16px", fontSize: "14px" }}>
          {customerReviewDatas.ratingPercentage[i]}
        </p>
      </div>
    );
  }

  const reviewUsers = [];

  for (let i in (customerReviewDatas.userImagepng,
  customerReviewDatas.reviewFromPlaces,
  customerReviewDatas.userName,
  customerReviewDatas.userRatingStar,
  customerReviewDatas.imageRating,
  customerReviewDatas.comment,
  customerReviewDatas.dateAndTime,
  customerReviewDatas.size,
  customerReviewDatas.verifiedPurchase,
  customerReviewDatas.commentPara,
  customerReviewDatas.button,
  customerReviewDatas.abuse)) {
    reviewUsers.push(
      <div key={i}>
        <h4>{customerReviewDatas.reviewFromPlaces[i]}</h4>
        <div style={{ display: "flex", marginTop: "32px" }}>
          <img
            className="userImage"
            src={customerReviewDatas.userImagepng[i]}
          />
          <p style={{ marginLeft: "16px" }}>
            {customerReviewDatas.userName[i]}
          </p>
        </div>
        <div style={{ lineHeight: "8px" }}>
          <div style={{ display: "flex" }}>
            <img
              className="starImage2"
              src={customerReviewDatas.userRatingStar[i]}
            />
            <p className="comment">{customerReviewDatas.comment[i]}</p>
          </div>
          <p>{customerReviewDatas.dateAndTime[i]}</p>
          <div style={{ display: "flex" }}>
            {customerReviewDatas.color && customerReviewDatas.size ? (
              <div>
                <p>{customerReviewDatas.color[i]}</p>
                <p className="size">{customerReviewDatas.size[i]}</p>
              </div>
            ) : (
              ""
            )}
            <p className="verification">
              {customerReviewDatas.verifiedPurchase[i]}
            </p>
          </div>
        </div>
        <p style={{ width: "90%" }}>{customerReviewDatas.commentPara[i]}</p>
        <div style={{ display: "flex" }}>
          {customerReviewDatas.button ? (
            <button className="button1">{customerReviewDatas.button[i]}</button>
          ) : (
            ""
          )}
          <p className="abuse">{customerReviewDatas.abuse[i]}</p>
        </div>
      </div>
    );
  }

  const [click, setClick] = React.useState(false);

  function show() {
    setClick(!click);
  }

  return (
    <div>
      <h3 style={{ marginTop: "24px", marginLeft: "24px", fontWeight: "700" }}>
        Customer Reviews
      </h3>
      <div className="review-wrapper">
        <div className="review1">
          <div style={{ display: "flex" }}>
            <img className="starImage" src={customerReviewDatas.imageRating} />
            <p style={{ marginLeft: "16px" }}>
              {customerReviewDatas.ratingNumber}
            </p>
          </div>
          <div>{reviewStarNumber}</div>
          {click === true ? (
            <a onClick={show} style={{ cursor: "pointer" }}>
              {customerReviewDatas.ratingCalculationshow}
            </a>
          ) : (
            <a onClick={show} style={{ cursor: "pointer" }}>
              {customerReviewDatas.ratingCalculationhide}
            </a>
          )}
          {click === true ? (
            <p style={{ marginTop: "16px", width: "80%" }}>
              {customerReviewDatas.ratingCalcClick}
            </p>
          ) : (
            <div></div>
          )}
        </div>
        <div className="review2">{reviewUsers}</div>
      </div>
    </div>
  );
}
