import { Box, Modal } from '@mui/material'
import React from 'react'
import FormUpdate from '../FormUpdate/FormUpdate'

const ModalUpdate = () => {
    const updateProd = async (produto) => {
        editProduto(produto, formAtualiza);
        setFormAtualiza({
            categoria: "",
            url: "",
            produto: "",
            valor: "",
            descricao: ""
        });
    }

    return (
        <div>
            <Modal>
                <Box>
                    <FormUpdate />
                </Box>
            </Modal>
        </div>
    )
}

export default ModalUpdate