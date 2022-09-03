import React from "react";
import S from "./CardPedido.module.css";

const CardPedido = () => {
  return (
    <div className={S.pedidos}>
      <h1>Pedidos</h1>
      <div className={S.divCard}>
        <h3>pedidos aqui</h3>
      </div>
    </div>
  );
};

export default CardPedido;
