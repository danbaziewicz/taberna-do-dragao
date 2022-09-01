import React from "react";
import Button from "../../components/common/Button/Button";
import S from "./Home.module.css";
import { BiDrink } from "react-icons/bi";
import craftbeer from "../../assets/images/craftbeer.svg"

const Home = () => {
  return (
    <div className={S.container}>
      <section className={S.conteudo}>
        <div className={S.title}>
          <h1>Desfrute dos melhores <span className={S.cor}>drinks</span></h1>
          <p>Torne seu dia ainda mais especial, com tudo que a taberna tem para te oferecer</p>
          <div><Button texto="Peça já o seu!" style={S.button} icon={<BiDrink size="30px" color="#EF761E" alignmentBaseline="baseline"/>}/></div>
        </div>
        <div className={S.circulo}><p>imagem de um drink</p></div>
      </section>
      <section className={S.conteudo2}>
        <img src={craftbeer}/>
      </section>
    </div>
  );
};

export default Home;
