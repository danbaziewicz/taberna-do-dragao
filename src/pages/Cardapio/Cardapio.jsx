import React, { useState, useEffect } from 'react'
import {
  Button
} from "@mui/material";
import { BsFillPlusSquareFill } from "react-icons/bs";
import CardProd from '../../components/CardProd/CardProd'
import S from './Cardapio.module.css'
import { getMenu } from "../../Service/Service";
import ModalProd from '../../components/ModalProd/ModalProd';
import Form from '../../components/Form/Form';
import Label from '../../components/common/Label/Label';
import Input from '../../components/common/Input/Input';
import ModalDelete from '../../components/ModalDelete/ModalDelete';
import ModalUpdate from '../../components/ModalUpdate/ModalUpdate';


const Cardapio = () => {
  const [reload, setReload] = useState(false);
  const [produtos, setProdutos] = useState([]);
  const [produtosId, setProdutosId] = useState();
  const [produtosUpdate, setProdutosUpdate] = useState();
  const [open, setOpen] = useState(false);
  const [openDelete, setopenDelete] = useState(false);
  const [openUpdate, setOpenUpdate] = useState(false);
  const [busca, setBusca] = useState("");
  const [formAtualiza, setFormAtualiza] = useState({
    categoria: "",
    url: "",
    produto: "",
    valor: "",
    descricao: ""
  })

  const request = async (close) => {
    const response = await getMenu(close);
    setProdutos(response);
  };

  const handleOnChange = (target, key) => {
    const value = target.value;
    setFormAtualiza({ ...formAtualiza, [key]: value });
  }

  const handleOpenModal = () => {
    setOpen(true)
  }

  useEffect(() => {
    request("/menu");
    setReload(false)
  }, [reload]);


  return (
    <div className={S.container}>
      <h2 className={S.titulo}>
        Cardápio
      </h2>
      <Button onClick={handleOpenModal} variant="contained" startIcon={<BsFillPlusSquareFill />}>Adicionar</Button>
      <section className={S.searchInput} >
        <Label text="Busca:" />
        <Input type="search" value={busca} onChange={(e) => setBusca(e.target.value)} />
      </section>
      <div className={S.cards}>
        {!!produtos && produtos.filter((val) => {
          if (busca === "") {
            return val
          } else if (val.produto.toLowerCase().includes(busca.toLowerCase())) {
            return val
          }
        }).map((produtos, index) => {
          return (
            <CardProd
              key={index}
              url={produtos.url}
              produto={produtos.produto}
              descricao={produtos.descricao}
              valor={produtos.valor}
              setReload={setReload}
              setopenDelete={setopenDelete}
              setProdutosId={setProdutosId}
              setProdutosUpdate={setProdutosUpdate}
            />
          )
        })}
      </div>
      {open && <ModalProd open={open} setOpen={setOpen} handleOnChange={handleOnChange}>
        <Form setOpen={setOpen} setReload={setReload} />
      </ModalProd>}
      {openDelete && <ModalDelete setReload={setReload} openDelete={openDelete} setopenDelete={setopenDelete} produtosId={produtosId}>
      </ModalDelete>}
      {openUpdate && <ModalUpdate setReload={setReload} openUpdate={openUpdate} setOpenUpdate={setOpenUpdate} produtosUpdate={produtosUpdate}>
      </ModalUpdate>}
    </div>
  )
}

export default Cardapio