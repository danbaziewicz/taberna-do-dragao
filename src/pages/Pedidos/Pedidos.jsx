import React from "react";
import CardPedido from "../../components/CardPedido/CardPedido";
import Modal from "../../components/Modal/Modal";
import S from "./Pedidos.module.css";

const Pedidos = () => {
  return (
    <div className={S.divPedidos}>
      <Modal />
      <CardPedido />
    </div>
  );
};

export default Pedidos;
