import React from "react";
import Button from "../../components/common/Button/Button";
import S from "./Home.module.css";
import { Link } from "react-router-dom";
import craftbeer from "../../assets/images/craftbeer.svg";
import {
  GiMartini,
  GiWaterDrop,
  GiBeerBottle,
  GiHops,
  GiWheat,
  GiGrain,
} from "react-icons/gi";
import ActionAreaCard from "../../components/common/Card/Card";
import tequila from "../../assets/images/tequila.png";
import gin from "../../assets/images/gin.png";
import martini from "../../assets/images/martini.png";
import mojito from "../../assets/images/mojito.png";

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
                icon={<GiMartini size="30px" color="#EF761E" />}
              />
            </Link>
          </div>
        </div>
        <div className={S.circulo}>
          <img src={mojito}/>
          <h2>MOJITO</h2>
        </div>
      </section>
      <section className={S.sectionCards}>
        <div className={S.tituloCards}><h2>Populares na taberna</h2></div>
        <div className={S.cards}>
        <ActionAreaCard
          valor="3.5"
          image={tequila}
          titulo="Tequila"
          descricao="Bebida alcoólica destilada, que é feito a partir do suco fermentado da planta mexicana de agave-azul, especificamente várias variedades de Agave tequilana Weber. Tequila pode ter entre 31% e 55% de álcool."
        />
        <ActionAreaCard
          valor="4.5"
          image={gin}
          titulo="Gin"
          descricao="É uma bebida destilada à base de cereais. Posteriormente passa por um processo de infusão com zimbro e outras especiarias. Tem teor alcoólico entre 37,5% e 50%, dependendo da marca."
        />
        <ActionAreaCard
          valor="4"
          image={martini}
          titulo="Martíni"
          descricao="É um coquetel feito com gin e vermute seco, mexidos com gelo e coado em uma taça cocktail sem gelo. A sua finalização e decoração tradicional é um 'twist' de casca de limão-siciliano, ou com azeitonas verdes."
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
