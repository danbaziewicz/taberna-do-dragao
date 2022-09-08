import {
    Box,
    Modal
} from "@mui/material";
import React from 'react';
import { deleteProduto } from "../../Service/Service";
import Button from "../common/Button/Button";
import S from './ModalDel.module.css'

const ModalDelete = ({ produtosId, setopenDelete, setReload, openDelete }) => {
    const handleDelete = async () => {
        await deleteProduto(produtosId)
        setReload(true);
        setopenDelete(false);
    };

    const handleClose = () => {
        setopenDelete(false);
    }

    return (
        <div>
            <Modal className={S.divInterna}
                open={openDelete}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description">
                <Box>
                    <h4>Quer deletar o produto?</h4>
                    <div>
                        <Button onClick={handleDelete} texto='SIM' />
                        <Button onClick={handleClose} texto='CANCELAR' />
                    </div>
                </Box>
            </Modal>
        </div>
    )
}

export default ModalDelete