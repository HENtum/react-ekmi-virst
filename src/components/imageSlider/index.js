import React, { useState } from "react";

import "./style.scss";

export const ImageSlider = () => {
  const images = [
    "images/forFirst/img_3.png",
    "images/forFirst/img_1.png",
    "images/forFirst/img_2.png",
  ];
  const markers = ["", "", ""];
  const [imageIndex, setImageIndex] = useState(1);
  const slideShow = () => {
    imageIndex === 2 ? setImageIndex(0) : setImageIndex(imageIndex + 1);
  };
  setTimeout(slideShow, 10000);
  return (
    <div className="image">
      <p className="date">Основано в 1993 году</p>
      <div>
        <img src={images[imageIndex]} alt="Sofa" />
      </div>
      <ul>
        {markers.map((obj, i) => (
          <li className={i === imageIndex ? "active" : ""} key={i}>
            {obj}
          </li>
        ))}
      </ul>
    </div>
  );
};
