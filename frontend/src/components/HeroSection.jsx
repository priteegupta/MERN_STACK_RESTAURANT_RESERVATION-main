import React from "react";
import Navbar from "./Navbar";

const HeroSection = () => {
  return (
    <section className="heroSection" id="heroSection">
      <Navbar />
      <div className="container">
        <div className="banner">
          <div className="largeBox">
            <h1 className="title">Savor</h1>
          </div>
          <div className="combined_boxes">
            <div className="imageBox">
              <img src="./Second.jpg" alt="hero" />
            </div>
            <div className="textAndLogo">
              <div className="textWithSvg">
                <h1 className="title">The</h1>
                <h1 className="title dishes_title">Flavor</h1>
                {/* <img src="./threelines.svg" alt="threelines" /> */}
              </div>
              {/* <img className="logo" src="foodicon.png" alt="logo" /> */}
            </div>
          </div>
        </div>
        <div className="banner">
          <div className="imageBox">
            <img src="first.jpg" alt="hero" />
          </div>
          <h1 className="title dishes_title">Flavor</h1>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
