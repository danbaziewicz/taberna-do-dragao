import React, { useState, useEffect } from 'react'
import { Button } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'
import { BsFillPlusSquareFill, BsFillArrowUpCircleFill } from "react-icons/bs";
import CardProd from '../../components/CardProd/CardProd'
import S from './Cardapio.module.css'
import { getMenu } from "../../Service/Service";


const Cardapio = () => {
  const [reload, setReload] = useState(false);
  const [produtos, setProdutos] = useState([]);

  const request = async (close) => {
    const response = await getMenu(close);
    setProdutos(response);
  };

  useEffect(() => {
    request("/menu");
  }, []);

  useEffect(() => {
    if (reload) {
      request("/menu");
      setReload(false);
    }
  }, [reload]);

  return (
    <div className={S.container}>
      <h2 className={S.titulo}>
        Cardápio
      </h2>
      <div className={S.btns}>
        <Button variant="contained" startIcon={<DeleteIcon />}>Deletar</Button>
        <Button variant="contained" startIcon={<BsFillPlusSquareFill />}>Adicionar</Button>
        <Button variant="contained" startIcon={<BsFillArrowUpCircleFill />}>Atualizar</Button>
      </div>
      <div className={S.cards}>
        {produtos.map((produtos, index) => {
          return (
            <CardProd
              key={index}
              url={produtos.url}
              produto={produtos.produto}
              descricao={produtos.descricao}
              valor={produtos.valor} />
          )
        })}

      </div>
    </div>
  )
}

export default Cardapio