import React from "react";
import Eventcard from "./Eventcard";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init({
  offset: 200,
  duration: 900,
});

function Events() {
  return (
    <>
      <div className="container-fluid event mt-5">
        <div className="row">
          <div className="col-10 mx-auto">
            <h1 className="py-4">Past Events</h1>
            <div className="container-fluid event-part">
              <div className="row">
                <div data-aos="fade-right" className="col-lg-6 ">
                  <Eventcard
                    img="https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2.0,f_auto,g_xy_center,h_650,q_auto:good,w_2560,x_w_mul_0.5,y_h_mul_0.0/v1/gcs/platform-data-dsc/event_banners/Banner_3Svlp2y.png?lg"
                    title="A Kickstart to Google Cloud"
                    content="GDSC DJSCE along
                  with GDSC VJTI and GDSC UMIT brings you an amazing session on
                  Kickstart to Google Cloud☁️. Learn from 👉🏻 Mr. Nirav Kothari
                  who is a Google Developer Expert of Google Cloud Platform,
                  Co-organizer of GDG Cloud Community in Mumbai.."
                  />
                </div>
                <div data-aos="fade-left" className="col-lg-6">
                  <Eventcard
                    img="https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2.0,f_auto,g_xy_center,h_650,q_auto:good,w_2560,x_w_mul_0.5,y_h_mul_0.0/v1/gcs/platform-data-dsc/event_banners/WhatsApp%20Image%202021-08-23%20at%203.49.16%20PM.jpeg?lg"
                    title="Introduction to GDSC DJSCE Chapter"
                    content="We hereby, welcome you to the first generation of Google Developer Students Club of our College – GDSC DJSCE.

Our goal 🎯 at GDSC DJSCE is to create a welcoming environment for all students, from novice developers just getting started to advanced developers looking to improve their skills."
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
    </>
  );
}

export default Events;
