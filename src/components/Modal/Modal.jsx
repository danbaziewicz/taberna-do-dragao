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
import { getMenu } from "../../Service/Service";

const Modal = () => {
  const [reload, setReload] = useState(false);
  const [open, setOpen] = useState(false);
  const [pedidos, setPedidos] = useState([]);
  const [pedido, setPedido] = useState([]);
  const [produtos, setProdutos] = useState([]);

  const request = async (close) => {
    const response = await getMenu(close);
    setProdutos(response);
  };

  async function novoPedido() {
    const valores = document.querySelectorAll("input");
    valores.forEach((input) => (input.value = ""));

    const filtro = await pedido.filter((value, index, self) =>
      index === self.findIndex((t) => (
        t.nome === value.nome
      ))
    )
    setPedidos([...pedidos, ...filtro])
    console.log(pedidos);
    setPedido([]);
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
              {produtos.map((produtos, index) => (
                <div className={S.divProdutos}>
                  <Label text={produtos.produto} />
                  <Label text={`R$ ${produtos.valor}`} />
                  <TextField
                    nome={produtos.produto}
                    id="outlined-number"
                    type="number"
                    sx={{ width: "10ch" }}
                    key={index}
                    defaultValue={0}
                    InputProps={{ inputProps: { min: 0, max: 10 } }}
                    onChange={(e) => {
                      setPedido([{ nome: index, qtd: e.target.value }, ...pedido]);
                    }}
                  />
                </div>
              ))}
            </div>
            <div className={S.divBtns}>
              <Button onClick={handleClose}>FECHAR</Button>
              <Button onClick={novoPedido}>SALVAR</Button>
            </div>
          </Box>
        </div>
      </Modal1>
    </div>
  );
};

export default Modal;
