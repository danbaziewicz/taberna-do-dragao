import React from "react";
import S from "./CardPedido.module.css";

const CardPedido = () => {
  return (
    <div className={S.pedidos}>
      <h1>Pedidos</h1>
      {/* <div className={S.divCard}>
        {pedidos.map((pedido) =>(
          <div key={pedido.id}>
            <h3>Pedido nº: {pedido.numero} </h3>
            <h3>Total: {pedido.valor}</h3>
          </div>
        ))}
      </div> */}
    </div>
  );
};

export default CardPedido;
