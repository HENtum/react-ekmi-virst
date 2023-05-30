import React, { useState } from "react";

import "./style.scss";

export const Header = () => {
  const [sortOpen, setSortOpen] = useState(false);
  const [languageOpen, setLanguageOpen] = useState(false);
  const languages = ["RU", "UA", " EN"];
  const [lanuageIndex, setLanuageIndex] = useState(0);
  const [fill, setfill] = useState("black");

  return (
    <div className="header">
      <div className="container">
        <ul className="headerUl">
          <li
            className="open header-hidden"
            onClick={() => setSortOpen(!sortOpen)}
          >
            КАТАЛОГ
            {sortOpen && (
              <ul>
                <li>Диваны</li>
                <li>Кресла</li>

                <li>Стулья</li>

                <li>Кровати</li>
                <li>Матрацы</li>
                <li>Пуфы</li>
                <li>Эксклюзивная мебель</li>
                <li>2D-3D модели</li>
              </ul>
            )}
          </li>

          <li className="upper header-hidden">Индивидуальная мебель</li>
          <li className="upper header-hidden">Контакты</li>

          <li className="header-logo">
            <img src="images/forHeader/logo.png" alt="logo" />
          </li>
          <li className="upper header-hidden">О компании</li>
          <li className="forOpenSans header-hidden">+38 (099)-638-45-37</li>
          <li className="upper lang">
            <ul
              className="languageUl"
              onClick={() => setLanguageOpen(!languageOpen)}
            >
              <li className="upper mobile-upper">
                {languages[lanuageIndex]}
                {languageOpen && (
                  <ul className="openLanguage">
                    {languages.map((obj, i) => (
                      <li
                        className={i === lanuageIndex && "active"}
                        key={i}
                        onClick={() => setLanuageIndex(i)}
                      >
                        {obj}
                      </li>
                    ))}
                  </ul>
                )}
              </li>
              <li className="header-vector">
                <img src="images/forHeader/vector.png" alt="changeLanguage" />
              </li>
            </ul>
          </li>
          <li
            onMouseEnter={() => setfill("#FF9619")}
            onMouseLeave={() => setfill("black")}
          >
            <svg
              className="visible header-phone"
              width="21"
              height="21"
              viewBox="0 0 21 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16.2382 21C16.0338 20.9994 15.8301 20.9765 15.6304 20.9316C11.8298 20.1276 8.32834 18.2424 5.52915 15.4931C2.78968 12.7377 0.889716 9.22957 0.0591278 5.39304C-0.0388091 4.9149 -0.0147715 4.41902 0.128928 3.95313C0.272627 3.48723 0.531152 3.067 0.879631 2.73285L3.31075 0.339911C3.43492 0.219821 3.58246 0.127859 3.74374 0.0700266C3.90502 0.0121938 4.07641 -0.0102096 4.24673 0.00427847C4.42333 0.0231192 4.59375 0.0812958 4.746 0.174717C4.89826 0.268138 5.02865 0.394535 5.12801 0.54502L8.16691 5.13821C8.28087 5.31643 8.33588 5.52736 8.32385 5.73995C8.31181 5.95254 8.23337 6.15556 8.10006 6.31914L6.57453 8.18377C7.1821 9.5589 8.04253 10.8017 9.10897 11.8446C10.1685 12.9254 11.4209 13.7883 12.7982 14.3868L14.6884 12.8515C14.8471 12.7232 15.0403 12.6474 15.2423 12.6341C15.4442 12.6207 15.6453 12.6706 15.8189 12.777L20.4076 15.8101C20.5651 15.9062 20.6992 16.0376 20.8 16.1943C20.9008 16.351 20.9656 16.529 20.9896 16.7149C21.0135 16.9009 20.9961 17.09 20.9384 17.268C20.8808 17.4461 20.7845 17.6085 20.6568 17.7431L18.2864 20.1422C18.0172 20.4162 17.6976 20.6331 17.3461 20.7803C16.9946 20.9275 16.6181 21.0021 16.2382 21ZM4.14949 1.23493L1.71837 3.62787C1.52233 3.81467 1.37721 4.05044 1.29729 4.31199C1.21736 4.57353 1.20539 4.85185 1.26253 5.11957C2.03485 8.71962 3.81017 12.0139 6.37396 14.6043C9.0082 17.1909 12.3032 18.964 15.8796 19.7196C16.1503 19.7775 16.4309 19.7657 16.6961 19.6855C16.9612 19.6052 17.2028 19.4589 17.3991 19.2596L19.7694 16.8605L15.3387 13.933L13.3087 15.5863C13.231 15.6492 13.1394 15.6917 13.042 15.7102C12.9445 15.7286 12.8441 15.7223 12.7496 15.692C11.064 15.0569 9.53652 14.0488 8.27631 12.7397C6.97284 11.4949 5.96105 9.96511 5.31642 8.26457C5.28915 8.16162 5.28825 8.05322 5.31379 7.94981C5.33934 7.8464 5.39048 7.75145 5.46229 7.6741L7.1033 5.66652L4.14949 1.23493Z"
                fill={fill}
              />
            </svg>
          </li>
          <li>
            <img
              className="visible"
              src="images/forHeader/menu.png"
              alt="menu"
            />
          </li>
        </ul>
      </div>
    </div>
  );
};
