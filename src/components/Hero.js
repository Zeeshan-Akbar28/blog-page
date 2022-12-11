import React from "react";
import "../styles/hero.css";

function Hero() {
  return (
    <div className="hero--container">
      <div className="hero--left">
        <h4 className="heading--h2">Our Blog</h4>
      </div>
      <div className="hero--right">
        <h4 className="heading--h5">
          Diagnose Car Problems If You Don’t Know Much About Cars
        </h4>
        <p className="body--2">
          We provide a full range of front end mechanical repairs for all makes
          and models of cars, no matter the cause. This includes, We provide a
          full range of front end mechanical.
        </p>
      </div>
    </div>
  );
}

export default Hero;
