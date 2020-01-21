import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Slider.css";
import React, { Component } from "react";
import { default as RSlider } from "react-slick";
import Cat1 from "./images/cat1.png";
import Cat2 from "./images/cat2.jpg";

export const Slider = () => {
  const settings = {
    dots: true,
    arrows: true
  };
  return (
    <div className="container">
      <RSlider {...settings}>
        <div>
          <img src={Cat1} height="400" />
        </div>
        <div>
          <img src={Cat2} height="400" />
        </div>
      </RSlider>
    </div>
  );
};
