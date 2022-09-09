import React, { useState, useEffect } from 'react'
import { Button } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'
import { BsFillPlusSquareFill, BsFillArrowUpCircleFill } from "react-icons/bs";
import CardProd from '../../components/CardProd/CardProd'
import S from './Cardapio.module.css'
import { getMenu } from "../../Service/Service";
import ModalProd from '../../components/ModalProd/ModalProd';
import Form from '../../components/Form/Form';


const Cardapio = () => {
  const [reload, setReload] = useState(false);
  const [produtos, setProdutos] = useState([]);
  const [open, setOpen] = useState(false);

  const request = async (close) => {
    const response = await getMenu(close);
    setProdutos(response);
  };

  const handleOpenModal = () => {
    setOpen(true)
  }

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
        <Button onClick={handleOpenModal} variant="contained" startIcon={<BsFillPlusSquareFill />}>Adicionar</Button>
        <Button onClick={handleOpenModal} variant="contained" startIcon={<BsFillArrowUpCircleFill />}>Atualizar</Button>
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
      {open && <ModalProd open={open} setOpen={setOpen}>
        <Form setOpen={setOpen} setReload={setReload} />
      </ModalProd>}
    </div>
  )
}

export default Cardapio