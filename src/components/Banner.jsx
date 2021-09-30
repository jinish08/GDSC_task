import React from "react";
import { Link } from "react-router-dom";

function Banner() {
  return (
    <>
      <div className="container-fluid banner">
        <div className="row">
          <div className="col-10 mx-auto">
            <h1 className="banner-h">
              Dwarkadas J. Sanghvi College of Engineering - Mumbai
            </h1>
            <Link
              to="/contact"
              className="join-btn mt-5 btn btn-lg btn-primary"
            >
              Join Club
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Banner;
