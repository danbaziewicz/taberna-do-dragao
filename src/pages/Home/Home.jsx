import React from "react";
import S from "./Home.module.css";

const Home = () => {
  return (
    <div className={S.container}>
      <section className={S.conteudo}>
        <div>
          <h1>Desfrute dos melhores drinks</h1>
          <p>Torne seu dia ainda mais especial, com tudo que a taberna tem para te oferecer</p>
        </div>
        <div className={S.circulo}></div>
      </section>
    </div>
  );
};

export default Home;
