import {
    Box,
    Modal
} from "@mui/material";
import React from 'react';
import { deleteProduto } from "../../Service/Service";
import Button from "../common/Button/Button";

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
            <Modal
                open={openDelete}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description">
                <Box>
                    <h4>Quer deletar o produto?</h4>
                    <Button onClick={handleDelete} texto='SIM' />
                    <Button onClick={handleClose} texto='CANCELAR' />
                </Box>
            </Modal>
        </div>
    )
}

export default ModalDelete