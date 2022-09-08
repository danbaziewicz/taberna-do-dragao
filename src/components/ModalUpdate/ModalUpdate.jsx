import { Box, Modal } from '@mui/material'
import React from 'react'
import FormUpdate from '../FormUpdate/FormUpdate'

const ModalUpdate = ({ produtosUpdate, setReload, setOpenUpdate, openUpdate, handleClose }) => {


    return (
        <div>
            <Modal
                open={openUpdate}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description">
                <Box>
                    <FormUpdate produtosUpdate={produtosUpdate} setReload={setReload} setOpenUpdate={setOpenUpdate} />
                </Box>
            </Modal>
        </div>
    )
}

export default ModalUpdate