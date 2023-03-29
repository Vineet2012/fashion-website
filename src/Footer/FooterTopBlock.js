import React from "react";
import FooterMiddleBlock from "./FooterMiddleBlock";
import "./FooterTopBlock.css";

export default function FooterTopBlock() {
  return (
    <div>
      <div className="linkToTop-wrapper">
        <a className="linkToTop" href="#top">
          Back to top
        </a>
      </div>
      <div className="links-wrapper-wrpper">
        <div className="links-wrapper">
          <div className="links1-wrapper">
            <h4 className="linksFooter">Get to Know Us</h4>
            <a className="links1">About us</a>
            <a className="links1">Careers</a>
            <a className="links1">Press Release</a>
            <a className="links1">Familco Science</a>
          </div>
          <div className="links1-wrapper">
            <h4 className="linksFooter">Connect with Us</h4>
            <a className="links1">Facebook</a>
            <a className="links1">Twitter</a>
            <a className="links1">Instagram</a>
          </div>
          <div className="links1-wrapper">
            <h4 className="linksFooter">Make Money with Us</h4>
            <a className="links1">Sell on Femilco</a>
            <a className="links1">Sell under familco Accelerator</a>
            <a className="links1">Protect and build your brand</a>
            <a className="links1">Familco global selling</a>
            <a className="links1">Become an affiliate</a>
            <a className="links1">Fulfillment by Familco</a>
            <a className="links1">Advertise your product</a>
            <a className="links1">Familco pay on merchants</a>
          </div>
          <div className="links1-wrapper">
            <h4 className="linksFooter">Let us help you</h4>
            <a className="links1">COVID-19 and Familco</a>
            <a className="links1">Your acoount</a>
            <a className="links1">Return centers</a>
            <a className="links1">100% purchase protection</a>
            <a className="links1">Familco app download</a>
            <a className="links1">Familco Assistant Download</a>
            <a className="links1">Help</a>
          </div>
        </div>
        <hr
          style={{
            background: "white",
            height: "1px",
            border: "none",
          }}
        />
        <FooterMiddleBlock />
      </div>
    </div>
  );
}
