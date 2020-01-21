import React, { Component } from "react";
import "./AboutSection.css";

export const AboutSection = () => {
  return (
    <div className="aboutSection">
      <div className="foodschmood">
        <h1>Foodschmood</h1>
        <a href="#">Foodschmood</a>
        <a href="#">Site owner</a>
      </div>
      <div className="products">
        <h1>Products</h1>
        <a href="#">Kitten</a>
        <a href="#">Adult cat</a>
        <a href="#">Senior</a>
      </div>
    </div>
  );
};
