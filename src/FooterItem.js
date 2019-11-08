import React, { Component } from "react";
import "./FooterItem.css";

export const FooterItem = props => {
  return (
    <div className="icon">
      <a href="#">
        <img src={props.src} height="35" width="35" />
        <p>{props.text}</p>
      </a>
    </div>
  );
};
