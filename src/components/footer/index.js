import React from "react";

import "./style.scss";

export const Footer = () => {
  return (
    <div className="footer">
      <div className="container-logo">
        <p className="ekmi-logo">ekmi</p>
      </div>
      <div className="footer-fon">
        <div className="container-footer">
          <div className="footer-words">
            <div>
              <img src="images/forFooter/logo_1.png" alt="logo" />
            </div>
            <div className="footer-ul">
              <ul className="footer-ul1">
                <li className="li-weight">Каталог</li>
                <li>О компании</li>
                <li className="individ-li">
                  Индивидуальная<br></br> мебель
                </li>
                <li className="individ-li gap-li">
                  Партнерам<br></br> дизайнерам
                </li>
              </ul>
              <ul className="footer-ul2">
                <li>2D, 3D модели</li>
                <li>Шоу-румы</li>
                <li>Дилерам</li>
                <li>Контакты</li>
                <li>Конфигуратор</li>
              </ul>
            </div>
            <div className="footer-contact">
              <div className="footer-images">
                <img src="images/forFooter/insta.png" alt="logo-brend" />
                <img src="images/forFooter/fase.png" alt="logo-brend" />
              </div>
              <div className="footer-number">+38 (099)-638-45-37</div>
              <div className="button-footer">
                <button>Персональная консультация</button>
              </div>
            </div>
          </div>
          <div className="aftor">
            © 1993–2021 Интернет-магазин «EKMI™» — меблі
          </div>
        </div>
      </div>
    </div>
  );
};
