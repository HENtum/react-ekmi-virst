import React from "react";
import { AboutEkmi } from "../../components/aboutEkmi";
import { First } from "../../components/first";
import { Footer } from "../../components/footer";
import { Form } from "../../components/form";
import { History } from "../../components/history";
import { Individ } from "../../components/individ";

import { NewItems } from "../../components/newItems";
import { Partners } from "../../components/partners";
import { Past } from "../../components/past";

import "./style.scss";

export const Home = () => {
  return (
    <div className="home">
      <First />
      <NewItems />
      <Individ />
      <History />
      <Past />
      <Form />
      <AboutEkmi />
      <Partners />

      {/* <div className="form-container">
        <div className="home-form">
          <InputForm />
        </div>
      </div> */}
      <Footer />
    </div>
  );
};
