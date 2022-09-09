import { Box, Modal } from '@mui/material'
import React from 'react'
import FormUpdate from '../FormUpdate/FormUpdate'
import S from "./ModalUpdate.module.css"

const ModalUpdate = ({ produtosUpdate, setReload, setOpenUpdate, openUpdate, handleClose }) => {


    return (
        <div>
            <Modal
                open={openUpdate}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description">
                <Box className={S.divInterna}>
                    <FormUpdate produtosUpdate={produtosUpdate} setReload={setReload} setOpenUpdate={setOpenUpdate} />
                </Box>
            </Modal>
        </div>
    )
}

export default ModalUpdate