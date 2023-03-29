import React from "react";
import NextPageNavBar from "../../PAGE1/nextPage1NavBar/nextPageNavBar";
import "./SignUpForFree.css";

export default function SignUpForFree() {
  return (
    <div>
      <NextPageNavBar />
      <div>
        <div className="image-wrapper">
          <img
            className="image-first"
            onload='window.uet &amp;&amp; uet.call &amp;&amp; uet("af");'
            src="https://images-eu.ssl-images-amazon.com/images/G/31/img17/AmazonBusiness/AB_EventMLP/1044_AB_NewMLP_TopBanner_1500x350_2.gif"
            alt="create a free business account"
          />
        </div>
        <div className="head-wrapper">
          <h3 className="head">What is Famiclo Buisness?</h3>
          <div className="head1">
            <h3 className="head-wrapper-list">
              Your one-stop destination for all office purchases.
            </h3>
            <h3 className="head-wrapper-list">
              India's largest selection of products with GST. Discover a Faster
            </h3>
            <h3 className="head-wrapper-list">
              and a smater way to buy for work.
            </h3>
          </div>
        </div>
        <div className="container">
          <div className="center">
            <button className="button">Salient Features</button>
          </div>
        </div>
        <div class="container text-center">
          <div class="row row-cols-3">
            <div class="col my-5">
              <img
                style={{ width: "100%" }}
                src="https://images-eu.ssl-images-amazon.com/images/G/31/img17/AmazonBusiness/MLP2/MLP_GST_470x350finalss.jpg"
                alt="GST"
              />
            </div>
            <div class="col my-5">
              <img
                style={{ width: "100%" }}
                src="https://images-eu.ssl-images-amazon.com/images/G/31/img17/AmazonBusiness/MLP2/Tile_2_470x350_final.jpg"
                alt="Deals"
              />
            </div>
            <div class="col my-5">
              <img
                style={{ width: "100%" }}
                src="https://images-eu.ssl-images-amazon.com/images/G/31/img17/AmazonBusiness/MLP2/Tile_3_470x350_final.jpg"
                alt="Shipping"
              />
            </div>
            <div class="col">
              <img
                style={{ width: "100%" }}
                src="https://images-eu.ssl-images-amazon.com/images/G/31/img17/AmazonBusiness/MLP2/Tile_4_470x350_final.jpg"
                alt="A-Z"
              />
            </div>
            <div class="col">
              <img
                style={{ width: "100%" }}
                src="https://images-eu.ssl-images-amazon.com/images/G/31/img17/AmazonBusiness/MLP2/Tile_5_470x350_final.jpg"
                alt="Easy Returns"
              />
            </div>
            <div class="col">
              <img
                style={{ width: "100%" }}
                src="https://images-eu.ssl-images-amazon.com/images/G/31/img17/AmazonBusiness/MLP2/Tile_6_470x350_final.jpg"
                alt="Purchase"
              />
            </div>
          </div>
        </div>
        <div className="container">
          <div className="center2">
            <button className="button2">Register now to start saving</button>
          </div>
        </div>
      </div>
    </div>
  );
}
