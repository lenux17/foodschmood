import React, { Component } from "react";
import "./FacebookSection.css";

export const FacebookSection = () => {
  return (
    <div className="facebookSection">
      <img
        className="f"
        src="http://vellerupsommerby.dk/wp-content/uploads/2017/09/facebook-icon-logo-C61047A9E7-seeklogo.com_.png"
      />
      <h1>Cat's Community on Facebook</h1>
      <h3>
        Ask questions, brag about the photos and feats of your cat, win
        contests.
      </h3>
      <h2>Join cat fans</h2>
      <a href="#">
        <img
          className="link"
          src="https://icon-library.net/images/facebook-icon-circle/facebook-icon-circle-24.jpg"
        />
      </a>
    </div>
  );
};
