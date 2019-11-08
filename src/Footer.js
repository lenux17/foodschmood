import React, { Component } from "react";
import "./Footer.css";
import { FooterItem } from "./FooterItem";

export const Footer = () => {
  return (
    <div className="footer">
      <div className="icon">
        <FooterItem
          src="http://simpleicon.com/wp-content/uploads/key-4.png"
          text="Privacy policy"
        />
        <FooterItem
          src="https://image.freepik.com/iconos-gratis/flecha-atras-esbozar_318-8503.jpg"
          text="Cookies"
        />
        <FooterItem
          src="http://download.seaicons.com/download/i96945/iconsmind/outline/iconsmind-outline-scale.ico"
          text="Legal disclaimer"
        />
        <FooterItem
          src="https://d30y9cdsu7xlg0.cloudfront.net/png/95226-200.png"
          text={`Information\nfor parents`}
        />
        <FooterItem
          src="https://cdn.pixabay.com/photo/2016/04/16/10/32/icon-1332774_960_720.png"
          text="Contact"
        />
      </div>
      <p>©Copyrights by lenux17 2019.</p>
      <button>Consent to cookies</button>
    </div>
  );
};
