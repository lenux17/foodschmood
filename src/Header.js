import React from "react";
import logo from "./images/logo.png";
import "./Header.css";

export const Header = () => {
  return (
    <div className="Header">
      <img className="Logo" src={logo} />
    </div>
  );
};
