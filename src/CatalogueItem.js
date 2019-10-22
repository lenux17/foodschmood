import React, { Component } from "react";
import "./CatalogueItem.css";

export const CatalogueItem = props => {
  return (
    <div className="Card">
      <div>
        <h1>{props.text}</h1>
        <img src={props.src} width="250" height="250" />
        <a href="#" class="button">
          See more >
        </a>
      </div>
    </div>
  );
};
