import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init({
  offset: 300,
  duration: 900,
});

function About() {
  return (
    <>
      <div className="container-fluid about mt-5">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="container-fluid">
              <div className="row">
                <div data-aos="fade-right" className="col-md-6">
                  <h1 className="fs-1 py-3">
                    Helping students bridge the gap between theory and practice
                  </h1>
                  <p className="fs-5 py-3">
                    Google Developer Student Clubs (GDSC) are community groups
                    for college and university students interested in Google
                    developer technologies. Students from all undergraduate or
                    graduate programs with an interest in growing as a developer
                    are welcome. By joining a GDSC, students grow their
                    knowledge in a peer-to-peer learning environment and build
                    solutions for local businesses and their community.
                  </p>
                </div>
                <div data-aos="fade-left" className="col-lg-6">
                  <img
                    src="https://developers.google.com/community/gdsc/images/gdsc_hero.svg"
                    alt="gdsc-right"
                    height="80%"
                    className="about-img"
                  ></img>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
