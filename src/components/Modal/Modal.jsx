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

const Modal = () => {
  const [reload, setReload] = useState(false);
  const [open, setOpen] = useState(false);
  const [pedidos, setPedidos] = useState([]);
  const [pedido, setPedido] = useState({ qtd: '', produtosPedido: [] });
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

      ptd.quantidade = parseInt(quantidade)
      pedido.produtosPedido.push(ptd)
      
      console.log(pedido.produtosPedido)
    
    
    
    
    
    
    
    //setPedido(...pedido, ptd.valor)
    // pedido.produtosPedido.push(ptd.valor);

    // const soma = (a, b) => a+b;
    // const total = pedido.produtosPedido.reduce(soma)
    

    // const prodArr = pedido.produtosPedido[0].produto;
    // if (prodArr) {
    //   console.log("entrou");
    // }

    // setPedido(...pedido, )
    //}
    // console.log(pedido.produtosPedido[0].produto);
    // console.log(prod[ptd.id])
    //console.log(pedido)@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
    // console.log(ptd)


    //map com reduce

    // setPedido({ qtd: "", produtosPedido: [] });
    //TO DO
    //VERIFICAR RECEBIMENTO DE VALOR DE INPUT
    //MANDAR VALORES OBJ PARA ARRAY
  }

  function salvaPedido() {
    const valorP = pedidos.push(pedido.produtosPedido)
    // setPedidos(...pedidos, pedido.produtosPedido)
    console.log(pedido.produtosPedido)
  }

  const handleOpenModal = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  // const buttonSX = {
  //   "&:hover": {
  //     backgroundColor: "#230000",
  //   },
  // };

  return (
    <div className={S.divModal}>
      <Button
        variant="contained"
        sx={{
          width: "10rem",
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
              <Input type="text" placeholder="Nº pedido" required="required"/>
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
                        console.log(e.target.value);
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
