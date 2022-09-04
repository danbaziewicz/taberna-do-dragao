import React from 'react'
import Button from '../common/Button/Button';
import S from './Modal.module.css'

const ModalProd = ({ setOpen, children }) => {
    const handleClose = () => setOpen(false);

    return (
        <div className={S.fade}>
            <div className={S.btnClose}>
                <Button onClick={handleClose}>X</Button>
            </div>
            {children}
        </div>
    )
}

export default ModalProd