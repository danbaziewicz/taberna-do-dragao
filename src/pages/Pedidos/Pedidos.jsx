import React, { useState } from "react";
import CardPedido from "../../components/CardPedido/CardPedido";
import Modal from "../../components/Modal/Modal";
import S from "./Pedidos.module.css";


const Pedidos = () => {
  const [valorFinal, setValorFinal] = useState([])
  return (
    <div >
      <Modal valorFinal={valorFinal} setValorFinal={setValorFinal}/>
      <div className={S.divPedidos}>

      {valorFinal.map((elemento, index)=>{
        return(<CardPedido num={elemento.num} valorTotal={elemento.valorTotal} key={index}/>)
      })}
      
      </div>
    </div>
  );
};

export default Pedidos;
