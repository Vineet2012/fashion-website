import React from "react";
import { useNavigate } from "react-router-dom";
import "./nextPageNavBar.css";

export default function NextPageNavBar() {
  const navigate = useNavigate();
  function homePage() {
    navigate("/");
  }

  return (
    <div>
      <nav className="navbar navbar-dark navPage1Color">
        <div className="container-fluid">
          <a id="#top" className="color1" href="" onClick={homePage}>
            HOME
          </a>
          <a className="color1" href="#">
            ABOUT US
          </a>
          <a className="color1" href="#">
            CONTACT US
          </a>
          <a className="color1" href="#">
            EXPLORE MORE
          </a>
          <button
            className="navbar-toggler bg-dark"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasDarkNavbar"
            aria-controls="offcanvasDarkNavbar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="offcanvas offcanvas-end text-bg-dark"
            tabindex="-1"
            id="offcanvasDarkNavbar"
            aria-labelledby="offcanvasDarkNavbarLabel"
          >
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">
                FAMILCO
              </h5>
              <button
                type="button"
                className="btn-close btn-close-white"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Explore more
                  </a>
                </li>
              </ul>
              <form className="d-flex mt-3" role="search">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button className="btn btn-success" type="submit">
                  Search
                </button>
              </form>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
