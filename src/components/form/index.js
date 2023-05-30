import React from "react";
import { InputForm } from "../inputForm";

import "./style.scss";

export const Form = () => {
  return (
    <div className="form">
      <div className="container-form">
        <div className="formInput">
          <img src="images/forForm/img_1.png" alt="sofa" />
          <div>
            <InputForm />
          </div>
        </div>
      </div>
    </div>
  );
};
