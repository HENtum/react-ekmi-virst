import React from "react";
import { ImageSlider } from "../imageSlider";

import "./style.scss";

export const First = () => {
  return (
    <div className="first">
      <div className="container">
        <div className="text">
          <p>
            <span>Л</span>УЧШАЯ ЖИЗНЬ, СОЗДАННАЯ ДЛЯ ВАС!
          </p>
          <div className="button">
            <button>перейти в КАталог</button>
          </div>
        </div>
        <ImageSlider />
      </div>
    </div>
  );
};
