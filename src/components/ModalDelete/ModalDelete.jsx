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
        <div className={S.divPrincipal}>
            <Modal
                open={openDelete}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description">
                <div>
                    <Box className={S.divInterna}>
                        <h3>Quer deletar o produto?</h3>
                        <div>
                            <Button onClick={handleDelete} texto='SIM' />
                            <Button onClick={handleClose} texto='CANCELAR' />
                        </div>
                    </Box>
                </div>
            </Modal>
        </div>
    )
}

export default ModalDelete