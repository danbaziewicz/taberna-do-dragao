import React, { useState } from 'react'
import { AiFillEdit, AiOutlineDelete } from 'react-icons/ai'
import S from './Card.module.css'

const CardProd = ({ produto, descricao, url, valor, setopenDelete, setProdutosId }) => {

    const openModal = () => {
        setProdutosId(produto)
        setopenDelete(true)
    }

    return (
        <div className={S.mainMenu}>
            <div className={S.icon}>
                <AiOutlineDelete onClick={openModal} className={S.delete} />
                <AiFillEdit className={S.update} />
            </div>
            <div className={S.descricao}>
                <img src={url} alt='produto' />
                <h4>{produto}</h4>
                <small>{descricao}</small>
                <h5>R${valor}</h5>
            </div>
        </div>
    )
}

export default CardProd