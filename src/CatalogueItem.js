import React, { Component } from "react";
import "./CatalogueItem.css";

export const CatalogueItem = props => {
  return (
    <div className="Card">
      <div>
        <h1>{props.text}</h1>
        <div className="ImageContainer">
          <img src={props.src} width="250" height="250" />
        </div>
        <a href="#" class="button">
          See more >
        </a>
      </div>
    </div>
  );
};
