import React from "react";
import S from "./CardPedido.module.css";

const CardPedido = ({num, valorTotal}) => {
  return (
    <div className={S.pedidos}>
      <div className={S.divCard}>
            <h3>Pedido nº: {num} </h3>
            <h3>Total: {valorTotal}</h3>
          </div>
      </div>
  );
};

export default CardPedido;
