import {
  Box,
  Button,
  Modal as Modal1,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import S from "./Modal.module.css";
import Label from "../common/Label/Label";
import { getMenu } from "../../Service/Service";
import Input from "../common/Input/Input";

const Modal = ({valorFinal, setValorFinal}) => {
  const [reload, setReload] = useState(false);
  const [open, setOpen] = useState(false);
  const [pedidos, setPedidos] = useState([]);
  const [pedido, setPedido] = useState({ numero: '', produtosPedido: [] });
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

  function handleAdicionaPedido(quantidade, ptd) {
      const novosProdutos = [...produtos]
      const index = produtos.findIndex(item => item.id === ptd.id)
      novosProdutos[index].quantidade = quantidade
      setProdutos(novosProdutos)
      pedido.produtosPedido.push(produtos)
  }

  function salvaPedido() {
    const pedidoFinal = pedido.produtosPedido[pedido.produtosPedido.length -1]
    pedidos.push(pedidoFinal)
    let valorTotal = 0;
    for(let j = 0; j<pedidos[pedidos.length -1].length; j++){
      if(pedidos[pedidos.length -1][j].quantidade){
        valorTotal = (pedidos[pedidos.length -1][j].quantidade * pedidos[pedidos.length -1][j].valor) + valorTotal;
        pedidos[pedidos.length -1][j].quantidade = 0;
      }
    }
    setValorFinal([...valorFinal, {num: pedido.numero, valorTotal: valorTotal}])
    handleClose()
  }

  const handleOpenModal = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className={S.divModal}>
      <Button
        variant="contained"
        sx={{
          width: "10rem",
          height: "4rem",
          margin: "10px",
          backgroundColor: "#230000",
          fontFamily: "Poppins",
        }}
        onClick={handleOpenModal}
      >
        NOVO PEDIDO
      </Button>
      <Modal1
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className={S.meio}>
          <Box className={S.txtModal}>
            <div className={S.div100}>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                CADASTRAR NOVO PEDIDO
              </Typography>
              <Input type="text" placeholder="Nº pedido" required={true} onChange={(event) => {
                setPedido({ ...pedido, numero: event.target.value })
              }}/>
            </div>
            <Typography
              id="modal-modal-description"
              sx={{ mt: 2 }}
            ></Typography>
            <div className={S.container}>
              {produtos.map((produto) => (
                <div key={produto.id}>
                  <div className={S.divProdutos}>
                    <Label text={produto.produto} />
                    <Label text={`R$ ${produto.valor}`} />
                    <TextField
                      id="outlined-number"
                      type="number"
                      sx={{ width: "10ch" }}
                      defaultValue={0}
                      InputProps={{ inputProps: { min: 0, max: 10 } }}
                      onChange={(e) => {
                        handleAdicionaPedido(e.target.value, produto);
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
            <div className={S.divBtns}>
              <Button
                variant="contained"
                sx={{
                  margin: "5px",
                  backgroundColor: "#230000",
                  fontFamily: "Poppins",
                }}
                onClick={handleClose}
              >
                FECHAR
              </Button>
              <Button
                variant="contained"
                sx={{
                  margin: "5px",
                  backgroundColor: "#230000",
                  fontFamily: "Poppins",
                }}
                onClick={salvaPedido}
              >
                SALVAR
              </Button>
            </div>
          </Box>
        </div>
      </Modal1>
    </div>
  );
};

export default Modal;
