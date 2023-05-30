import React from "react";

import "./style.scss";

export const NewItems = () => {
  const items = [
    {
      id: 1,
      img: "images/forNew/img_1.png",
      name: "Alba",
      price: "15 000 uah",
    },
    {
      id: 2,
      img: "images/forNew/img_2.png",
      name: "Martin",
      price: "15 000 uah",
    },
    {
      id: 3,
      img: "images/forNew/img_3.png",
      name: "Luara",
      price: "15 000 uah",
    },
  ];

  return (
    <div className="newItems">
      <div className="container-new">
        <p>
          <span>Н</span>овинки
        </p>
        <div className="divNew">
          <img
            className="vectorPrev"
            src="images/forNew/vector1.png"
            alt="Назад"
          />
          <ul>
            {items.map((obj) => (
              <li key={obj.id}>
                <img src={obj.img} alt="Items" />
                <p className="name">{obj.name}</p>
                <p className="price">{obj.price}</p>
              </li>
            ))}
          </ul>
          <img
            className="vectorNext"
            src="images/forNew/vector2.png"
            alt="Вперед"
          />
        </div>
        <div className="button-items">
          <button>перейти в КАталог</button>
        </div>
      </div>
    </div>
  );
};
