import React from "react";
import "./style.scss";

export const Partners = () => {
  return (
    <div className="partners">
      <div className="container-partners">
        <h5>
          {" "}
          <span>Н</span>аши партнеры
        </h5>
      </div>
      <div className="container-back-partners">
        <div className="back-partners">
          <div className="black">
            <div className="text-black">
              <p className="title-text">
                Компании сотрудничают с нами по всему миру
              </p>
              <div className="p-text">
                <p>
                  На данный момент дилерская сеть фабрики «Экми-Мебель»
                  насчитывает более 30 салонов по всей Украине. Сейчас мы
                  заинтересованы в расширении сети и предлагаем выгодные условия
                  для сотрудничества.
                </p>
                <p>
                  Основным преимуществом фабрики является изготовление любого
                  индивидуального изделия, мягкой мебели и аксессуаров из наших
                  основных коллекций. Также присутствует линейка оригинальных
                  интерьерных корпусных изделий.
                </p>
              </div>
            </div>
          </div>
          <div className="orange-fon">
            <div className="orange-block"></div>
            <div className="img-partners">
              <img src="images/forPartners/img_1.png" alt="sofa" />
            </div>
            <div className="orange-block-big"></div>
          </div>
        </div>
      </div>
      <div className="container-partners">
        <div className="logo">
          <img src="images/forPartners/logo_1.png" alt="logo" />
          <img src="images/forPartners/logo_2.png" alt="logo" />
          <img src="images/forPartners/logo_3.png" alt="logo" />
          <img src="images/forPartners/logo_4.png" alt="logo" />
        </div>
      </div>
      <div className="container-partners">
        <div className="items">
          <img src="images/forPartners/item_1.jpg" alt="items" />
          <img src="images/forPartners/item_2.png" alt="items" />
          <img src="images/forPartners/item_3.png" alt="items" />
          <img src="images/forPartners/item_4.png" alt="items" />
        </div>
      </div>
    </div>
  );
};
