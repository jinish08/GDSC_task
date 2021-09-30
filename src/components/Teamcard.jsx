import React from "react";
import { Link } from "react-router-dom";

function Teamcard(props) {
  return (
    <>
      <div class="my-5 py-4 mx-4 profile-card">
        <h2 className="text-center mb-5">{props.info}</h2>
        <div className="p-card-img my-2">
          <img
            src="http://lorempixel.com/150/150/people/"
            alt="profile"
            width="170px"
          />
        </div>

        <h5 className="text-center my-2">{props.name}</h5>
        <div className="profile-b-d my-4 text-center">
          <Link to="/" className="profile-btn btn btn-lg btn-success">
            View Profile
          </Link>
        </div>
      </div>
    </>
  );
}

export default Teamcard;
