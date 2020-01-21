import React, { Component } from "react";
import "./Footer.css";
import { FooterItem } from "./FooterItem";
import Key from "./images/key.png";
import Arrow from "./images/arrow.png";
import Balance from "./images/balance.png";
import Family from "./images/family.png";
import Message from "./images/message.png";

export const Footer = () => {
  return (
    <div className="footer">
      <div className="icon">
        <FooterItem src={Key} text="Privacy policy" />
        <FooterItem src={Arrow} text="Cookies" />
        <FooterItem src={Balance} text="Legal disclaimer" />
        <FooterItem src={Family} text={`Information\nfor parents`} />
        <FooterItem src={Message} text="Contact" />
      </div>
      <p>©Copyrights by lenux17 2019.</p>
      <button>Consent to cookies</button>
    </div>
  );
};
