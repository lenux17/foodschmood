import React, { Component } from "react";
import "./CatalogueSection.css";

export const CatalogueSection = () => {
  return (
    <div className="Card">
      <div>
        <h1>Kitten</h1>
        <img
          src="http://2000.ua/modules/pages/pictures/1000x1000/331_997122896826b3dec63d44a3958c4c1b_6626.jpg"
          width="250"
          height="250"
        />
        <a href="#" class="button">
          See more >
        </a>
      </div>
      <div>
        <h1>Adult cat</h1>
        <img
          src="https://i.obozrevatel.com/gallery/2017/10/23/03.jpg"
          width="250"
          height="250"
        />
        <a href="#" class="button">
          See more >
        </a>
      </div>
      <div>
        <h1>Senior</h1>
        <img
          src="https://cs8.pikabu.ru/post_img/big/2016/04/07/8/1460037562131737609.jpg"
          width="250"
          height="250"
        />
        <a href="#" class="button">
          See more >
        </a>
      </div>
    </div>
  );
};
