import React from "react";

import "./style.scss";

export const AboutEkmi = () => {
  return (
    <div className="aboutEkmi">
      <div className="container">
        <div className="about">
          <div className="aboutGroup">
            <span>1</span>
            <p className="about_P1">
              Осуществляемые компанией «Экми-Мебель» постоянные инвестиции в
              сертификацию своей продукции, убедительно подтверждают лидерство
              компании на украинском рынке высококачественной мягкой мебели.
            </p>
          </div>
          <div className="aboutGroup">
            <span>2</span>
            <p className="about_P2">
              Фабрика «Экми-мебель» сертифицирована по системе менеджмента
              качества ISO 9001:2000 на соответствие международным стандартам,
              представительством «Бюро Веритас» в Украине.
            </p>
          </div>
          <div className="aboutGroup">
            <span>3</span>
            <p className="about_P3">
              Компания «Экми-Мебель» первой из украинских производителей мягкой
              мебели обеспечила свою мебель полноценной гарантией и первой
              обоснованно заявила о лучшем качестве производимой мебели.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
