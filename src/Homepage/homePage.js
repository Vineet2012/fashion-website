import React from "react";
import { useNavigate } from "react-router-dom";
import MainBody from "../MainBody/mainBody";
import NavBar from "../NavBar/navBar";
import "./homePage.css";

export default function HomePage() {
  const navigate = useNavigate();
  function nextPage1() {
    navigate("/nextPage1");
  }

  return (
    <div>
      <NavBar />
      <div className="nav">
        <div className="nav1">
          <div className=" card mx-auto cardLeft">
            <div className="row g-0">
              <div className="col-md-3 my-auto card-img-home ">
                <img
                  src="https://img.freepik.com/premium-vector/denim-baseball-cap-uniform-cap-hat-realistic-3d-style_108964-1383.jpg?w=2000"
                  className="img-fluid rounded-start"
                  alt="..."
                />
              </div>
              <div className="col-md-9">
                <div
                  className="card-body"
                  style={{ display: "flex", flexDirection: "column" }}
                >
                  <span className="" style={{ fontWeight: "700" }}>
                    Buckot Denim
                  </span>
                  <span className="" style={{ marginBottom: "5px" }}>
                    $295.00 USD
                  </span>
                  <img
                    src="https://www.pngplay.com/wp-content/uploads/6/Black-5-Star-Rating-Transparent-PNG.png"
                    style={{ width: "40px" }}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="nav1-div">
            <p className="siteName">FAMI</p>
            <p className="paraHead1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              sed consequat dolor. Quisque laoreet eu erat in molestie. Proin a
              metus purus. Morbi sodales is quis justo ultricies luctus. Cras
              ornare congue metus at feugiat.
            </p>
            <button onClick={nextPage1} type="button" className="btn  butt1">
              SHOP NOW
            </button>
          </div>
        </div>
        <div className="nav2">
          <div className=" card mx-auto cardRight">
            <div className="row g-0">
              <div className="col-md-3 my-auto card-img-home ">
                <img
                  src="https://img.freepik.com/premium-vector/denim-baseball-cap-uniform-cap-hat-realistic-3d-style_108964-1383.jpg?w=2000"
                  className="img-fluid rounded-start"
                  alt="..."
                />
              </div>
              <div className="col-md-9">
                <div
                  className="card-body"
                  style={{ display: "flex", flexDirection: "column" }}
                >
                  <span className="" style={{ fontWeight: "700" }}>
                    Buckot Denim
                  </span>
                  <span className="" style={{ marginBottom: "5px" }}>
                    $295.00 USD
                  </span>
                  <img
                    src="https://www.pngplay.com/wp-content/uploads/6/Black-5-Star-Rating-Transparent-PNG.png"
                    style={{ width: "40px" }}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="nav2-div">
            <p className="siteName2">LCO</p>
          </div>
        </div>
      </div>
      <MainBody />
    </div>
  );
}
