import React from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../node_modules/bootstrap/dist/js/bootstrap.bundle";
import About from "./About";
import Banner from "./Banner";
import Contact from "./Contact";
import Events from "./Events";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Team from "./Team";

function App() {
  return (
    <>
      <Navbar />
      <Banner />
      <About />
      <Team />
      <Events />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
