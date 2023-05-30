import React from "react";

import "./style.scss";

export const Individ = () => {
  return (
    <div className="container-individ">
      <div className="individ">
        <div className="greenFon">
          <img src="images/forIndivid/grid.png" alt="grid" />
          <img className="sofa" src="images/forIndivid/sofa.png" alt="sofa" />
          <div className="orange"></div>
        </div>
        <div className="blackFon">
          <div className="rightBlack">
            <h5>
              <span>И</span>ндивидуальная мебель
            </h5>
            <p className="p_1">Полный цикл производства.</p>
            <p className="p_2">
              Качество мягкой мебели начинается задолго до начала ее
              производства.
            </p>
            <div className="button-individ">
              <button>Индивидуальная мебель</button>
            </div>
          </div>
          <div className="rightOrange">
            <p>furniture</p>
          </div>
        </div>
      </div>
    </div>
  );
};
