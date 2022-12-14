import {
    Box,
    Modal
} from "@mui/material";
import React from "react";
import Form from "../Form/Form";
import S from "./Modal.module.css"

const ModalProd = ({ setOpen, handleOnChange, handleClick, setReload }) => {

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <div>
                    <Box className={S.divInterna}>
                        <Form handleOnChange={handleOnChange} handleClick={handleClick} setReload={setReload} setOpen={setOpen} />
                    </Box>
                </div>
            </Modal>
        </div>
    )
}

export default ModalProd