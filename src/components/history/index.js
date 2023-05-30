import React from "react";

import "./style.scss";

export const History = () => {
  return (
    <div className="history">
      <div className="container-history">
        <p>
          <span>Н</span>аша история
        </p>
        <div className="firstHistory">
          <div className="blackHistoryFon">
            <h5>Наработки длинной в 25 лет</h5>
            <p>
              Каждый производитель заявляет, что делает все для своих
              покупателей, но не каждый производитель способен подтвердить свои
              заявления многолетней историей
            </p>
            <div className="orangeHistoryFon"></div>
          </div>
          <div className="imgHistory">
            <img src="images/forHistory/img_1.png" alt="sofa" />
          </div>
        </div>
        <div className="secondHistory">
          <p>1993</p>
          <p className="bigP">25 лет </p>
          <p>2021</p>
        </div>
      </div>
    </div>
  );
};
