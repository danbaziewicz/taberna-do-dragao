import React from "react";
import Button from "../../components/common/Button/Button";
import S from "./Home.module.css";
import craftbeer from "../../assets/images/craftbeer.svg";
import { GiMartini, GiWaterDrop, GiBeerBottle, GiHops, GiWheat, GiGrain} from "react-icons/gi";
import ActionAreaCard from "../../components/common/Card/Card";

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
            <Button
              texto="Peça já o seu!"
              style={S.button}
              icon={<GiMartini size="30px" color="#EF761E" />}
            />
          </div>
        </div>
        <div className={S.circulo}>
          <p>imagem de um drink</p>
        </div>
      </section>
      <section className={S.sectionCards}>
        <ActionAreaCard/>
        <ActionAreaCard/>
        <ActionAreaCard/>
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
            <GiWaterDrop size="80px" color="#EF761E"/> +
            <GiGrain size="80px" color="#EF761E"/> +
            <GiHops size="80px" color="#EF761E"/> +
            <GiWheat size="80px" color="#EF761E"/> =
            <GiBeerBottle size="80px" color="#EF761E"/></div>
        </div>
      </section>
    </div>
  );
};

export default Home;
