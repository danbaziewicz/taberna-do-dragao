import {
  Box,
  Button,
  Modal as Modal1,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import S from "./Modal.module.css";
import { AiFillCloseCircle } from "react-icons/ai";
import Label from "../common/Label/Label";
import axios from "axios";

const Modal = () => {
  const [open, setOpen] = useState(false);
  const [pedidos, setPedidos] = useState([]);
  const [produtos, setProdutos] = useState([]);
  const [order, setOrder] = useState({ numero: "", pedido: [] });

  async function salvaPedido() {
    //await axios.post('link da api' order)
    carregarPedidos();
  }

  async function carregarPedidos() {
    const response = await axios.get("link da api em pedidos");
    setPedidos(response.data);
  }

  async function excluirPedido() {
    //await axios.delete('link da api'id) por ID
    carregarPedidos();
  }

  async function carregaProdutos() {
    const response = await axios.get("https://apirest-pub.herokuapp.com/menu");
    console.log(response.data.dados);
    setProdutos(response.data.dados);
  }

  async function novoPedido() {
    const valores = document.querySelectorAll("input");
    valores.forEach((valores) => (valores.value = ""));

    setOrder({ numero: "", pedido: [] });
    await carregaProdutos();
  }

  useEffect(() => {
    carregaProdutos();
  }, []);

  const handleOpenModal = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div className={S.divModal}>
      <Button onClick={handleOpenModal}>NOVO PEDIDO</Button>
      <Modal1
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className={S.meio}>
          <Box className={S.txtModal}>
            <div className={S.div100}>
              <div>
                <div className={S.divFecha}>
                  <AiFillCloseCircle onClick={handleClose} />
                </div>
              </div>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                CADASTRAR NOVO PEDIDO
              </Typography>
            </div>
            <Typography
              id="modal-modal-description"
              sx={{ mt: 2 }}
            ></Typography>
            <div className={S.container}>
              <div className={S.divProdutos}>
                <Label text={produtos.produto} />
                <Label text="R$ 00,00" />
                <TextField
                  id="outlined-number"
                  type="number"
                  sx={{ width: "10ch" }}
                />
              </div>
            </div>
            <div className={S.divBtns}>
              <Button onClick={handleClose}>FECHAR</Button>
              <Button onClick={handleClose}>SALVAR</Button>
            </div>
          </Box>
        </div>
      </Modal1>
    </div>
  );
};

export default Modal;
