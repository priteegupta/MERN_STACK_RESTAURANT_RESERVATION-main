import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineArrowRight } from "react-icons/hi";

const About = () => {
  return (
    <>
   \
      <section className="about" id="about">
        <div className="container">
          <div className="banner">
            <div className="top">
              <h1 className="heading">ABOUT US</h1>
              <p>The only thing we're serious about is food.</p>
            </div>
            <p className="mid">
            Welcome to EazyDine, your go-to spot for delicious food and a cozy dining experience. Whether it's a family gathering, a date night, or a casual meal with friends, we serve freshly prepared dishes with love. Our easy online reservation system lets you book a table in just a few clicks, ensuring a hassle-free experience. With a warm ambiance and friendly service, we make every visit special. Reserve your table today and enjoy a great meal with us!
            </p>
            <Link to={"/about"}>
            
              Explore Menu{" "}
              <span>
                <HiOutlineArrowRight />
              </span>
            </Link>
          </div>
          <div className="banner">
            <img src="about.jpg" alt="about" />
          </div>
        </div>
        
      </section>
    </>
  );
};

export default About;
