import React from "react";

import "./style.scss";

export const Past = () => {
  const items = [
    {
      id: 1,
      img: "images/forPust/img_1.png",
      name: "Martin",
    },
    {
      id: 2,
      img: "images/forPust/img_2.png",
      name: "Alba",
    },
    {
      id: 3,
      img: "images/forPust/img_3.png",
      name: "Toscana",
    },
    {
      id: 4,
      img: "images/forPust/img_4.png",
      name: "Leonardo",
    },
  ];

  return (
    <div className="past">
      <div className="container-past">
        <p>
          <span>П</span>оследние публикации
        </p>
        <div className="divPast">
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
              </li>
            ))}
          </ul>
          <img
            className="vectorNext"
            src="images/forNew/vector2.png"
            alt="Вперед"
          />
        </div>
      </div>
    </div>
  );
};
