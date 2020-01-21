import React, { Component } from "react";
import "./CatalogueSection.css";
import { CatalogueItem } from "./CatalogueItem";
import milkKitten from "./images/milk-kitten.png";
import fishAdult from "./images/fish-adult cat.png";
import foodSenior from "./images/food-senior.png";

export const CatalogueSection = () => {
  return (
    <div className="Cards">
      <CatalogueItem src={milkKitten} text="Kitten" />
      <CatalogueItem src={fishAdult} text="Adult cat" />
      <CatalogueItem src={foodSenior} text="Senior" />
    </div>
  );
};
