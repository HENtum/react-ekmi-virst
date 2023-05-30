import React, { useRef, useState } from "react";

import "./style.scss";

export const InputForm = () => {
  const nameInput = useRef(null);
  const numberInput = useRef(null);
  const countryInput = useRef(null);
  const commentInput = useRef(null);

  const addClass = (id) => {
    document.getElementById(id).classList.add("active");
  };
  const removeClass = (id) => {
    document.getElementById(id).classList.remove("active");
  };
  const [name, setName] = useState(null);
  const [number, setNumber] = useState(null);
  const [country, setCountry] = useState(null);
  const [comment, setComment] = useState(null);

  return (
    <form className="formDiv">
      <p>Заполните форму</p>
      <h3>остались вопросы?</h3>
      <div className="form-flex">
        <div className="O">О</div>
        <div className="form-group">
          <label
            className={name > 0 ? "active" : ""}
            id="name"
            onClick={() => nameInput.current.focus()}
          >
            Ваше имя*
          </label>
          <input
            onFocus={() => addClass("name")}
            onBlur={() => name === null && removeClass("name")}
            ref={nameInput}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label
            className={number > 0 ? "active" : ""}
            id="number"
            onClick={() => numberInput.current.focus()}
          >
            Ваш номер телефона*
          </label>
          <input
            ref={numberInput}
            onFocus={() => addClass("number")}
            onBlur={() => number === null && removeClass("number")}
            onChange={(e) => setNumber(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label
            className={country > 0 ? "active" : ""}
            id="country"
            onClick={() => countryInput.current.focus()}
          >
            Страна
          </label>
          <input
            ref={countryInput}
            onFocus={() => addClass("country")}
            onBlur={() => country === null && removeClass("country")}
            onChange={(e) => setCountry(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label
            className={comment > 0 ? "active" : ""}
            id="comment"
            onClick={() => commentInput.current.focus()}
          >
            Комментарий
          </label>
          <input
            ref={commentInput}
            onFocus={() => addClass("comment")}
            onBlur={() => country === null && removeClass("comment")}
            onChange={(e) => setComment(e.target.value)}
          />
        </div>
        <div className="checkboxDiv">
          <input type="checkbox" className="checkbox" />
          <label className="checkboxChect"></label>
          <label className="checkboxLabel">
            Подтверждая заказ, я принимаю условия<br></br> пользовательского
            соглашения
          </label>
        </div>
      </div>
      <div className="buttonForm">
        <button>запросить звонок</button>
      </div>
    </form>
  );
};
