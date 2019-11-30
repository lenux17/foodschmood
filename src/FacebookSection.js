import React, { Component } from "react";
import "./FacebookSection.css";
import GreyFacebook from "./images/greyFacebook.png";
import Facebook from "./images/facebook.png";

export const FacebookSection = () => {
  return (
    <div className="facebookSection">
      <img className="f" src={Facebook} />
      <h1>Cat's Community on Facebook</h1>
      <h3>
        Ask questions, brag about the photos and feats of your cat, win
        contests.
      </h3>
      <h2>Join cat fans</h2>
      <a href="#">
        <img className="link" src={GreyFacebook} />
      </a>
    </div>
  );
};
