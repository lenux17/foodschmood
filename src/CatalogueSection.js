import React, { Component } from "react";
import "./CatalogueSection.css";
import { CatalogueItem } from "./CatalogueItem";

export const CatalogueSection = () => {
  return (
    <div className="Card">
      <CatalogueItem
        src="http://2000.ua/modules/pages/pictures/1000x1000/331_997122896826b3dec63d44a3958c4c1b_6626.jpg"
        text="Kitten"
      />
      <CatalogueItem
        src="https://i.obozrevatel.com/gallery/2017/10/23/03.jpg"
        text="Adult cat"
      />
      <CatalogueItem
        src="https://cs8.pikabu.ru/post_img/big/2016/04/07/8/1460037562131737609.jpg"
        text="Senior"
      />
    </div>
  );
};
