import React from "react";
import Button from "../../components/common/Button/Button";
import S from "./Home.module.css";
import { Link } from "react-router-dom";
import craftbeer from "../../assets/images/craftbeer.svg";
import {
  GiSpikedDragonHead,
  GiWaterDrop,
  GiBeerBottle,
  GiHops,
  GiWheat,
  GiGrain,
} from "react-icons/gi";
import ActionAreaCard from "../../components/common/Card/Card";
import hidromel from "../../assets/images/hidromel.png";
import fogoVivo from "../../assets/images/fogoVivo.png";
import cervejas from "../../assets/images/cervejas.png";
import pocaoreiarthur from "../../assets/images/pocaoreiarthur.png";

const Home = () => {
  return (
    <div className={S.container}>
      <section className={S.conteudo}>
        <div className={S.title}>
          <h1>
            Desfrute dos melhores <span className={S.cor}>drinks</span>
          </h1>
          <p>
            Torne seu dia ainda mais especial, com tudo que a taberna tem para
            te oferecer
          </p>
          <div>
            <Link className={S.link} to={"/cardapio"}>
              <Button
                texto="Peça já o seu!"
                style={S.button}
                icon={<GiSpikedDragonHead size="30px" color="#00FD03"/>}
              />
            </Link>
          </div>
        </div>
        <div className={S.circulo}>
          <img src={pocaoreiarthur}/>
        </div>
      </section>
      <section className={S.sectionCards}>
        <div className={S.tituloCards}><h2>Populares na taberna</h2></div>
        <div className={S.cards}>
        <ActionAreaCard
          valor="4"
          image={hidromel}
          titulo="Hidromel"
          descricao="Bebida alcoólica fermentada cuja maior parcela dos açúcares que a criou são provenientes do mel"
        />
        <ActionAreaCard
          valor="5"
          image={cervejas}
          titulo="Régua de Degustação"
          descricao="Blend das nossas cervejas artesanais para a degustação"
        />
        <ActionAreaCard
          valor="3.5"
          image={fogoVivo}
          titulo="Fogo Vivo"
          descricao="Vodka, curaçau fino, limão, xarope de maçã verde e absinto"
        />
        
        </div>
        
      </section>
      <section className={S.conteudo2}>
        <img src={craftbeer} />
        <div className={S.descBeer}>
          <h2>Conheça um pouco sobre nossas cervejas artesanais...</h2>
          <p>
            Feita com os melhores ingredientes, sem a adição de conservantes e
            de outros produtos industrializados. A sua composição é à base de
            água, levedura, lúpulo e cevada maltada.
          </p>
          <div className={S.icones}>
            <GiWaterDrop size="80px" color="#EF761E" /> +
            <GiGrain size="80px" color="#EF761E" /> +
            <GiHops size="80px" color="#EF761E" /> +
            <GiWheat size="80px" color="#EF761E" /> =
            <GiBeerBottle size="80px" color="#EF761E" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
