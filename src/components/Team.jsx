import React from "react";
import Teamcard from "./Teamcard";

function Team() {
  return (
    <>
      <div className="container-fluid team">
        <div className="row">
          <div className="col-10 my-4 mx-auto">
            <div className="team-card">
              <div className="row">
                <div className="col-lg-4 col-md-6 ">
                  <Teamcard info="Core" name="John" />
                </div>
                <div className="col-lg-4 col-md-6">
                  <Teamcard info="Organizer" name="Soham Dave" />
                </div>
                <div className="col-lg-4  col-md-6">
                  <Teamcard info="Core" name="John" />
                </div>
                <div className="col-lg-4  col-md-6">
                  <Teamcard info="Core" name="John" />
                </div>
                <div className="col-lg-4 col-md-6">
                  <Teamcard info="Core" name="John" />
                </div>
                <div className="col-lg-4 col-md-6">
                  <Teamcard info="Core" name="John" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Team;
