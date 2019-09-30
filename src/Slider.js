import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Slider.css";
import React, { Component } from "react";
import { default as RSlider } from "react-slick";

export const Slider = () => {
  const settings = {
    dots: true,
    arrows: true
  };
  return (
    <div className="container">
      <RSlider {...settings}>
        <div>
          <img
            src="https://data.whicdn.com/images/67174145/large.png"
            height="400"
          />
        </div>
        <div>
          <img
            src="https://pbs.twimg.com/media/BqnOpOpCEAAdiRp.jpg"
            height="400"
          />
        </div>
      </RSlider>
    </div>
  );
};
