import React from "react";
import S from "./Home.module.css";

const Home = () => {
  return (
    <div className={S.container}>
      <h4>Projeto desenvolvido por Squad 8</h4>
      <li>Danylo Baziewicz</li>
      <li>Erika Rodrigues</li>
      <li>Letícia Laranja</li>
      <li>Luis Eduardo Gonçalves</li>
    </div>
  );
};

export default Home;
