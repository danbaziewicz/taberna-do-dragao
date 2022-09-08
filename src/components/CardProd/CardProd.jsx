import React from 'react'
import { AiFillEdit, AiOutlineDelete } from 'react-icons/ai'
import S from './Card.module.css'

const CardProd = ({ url, produto, descricao, valor, setopenDelete, setProdutosId, setProdutosUpdate, setOpenUpdate }) => {

    const openModal = () => {
        setProdutosId(produto)
        setopenDelete(true)
    }

    const openModalUpdate = () => {
        setProdutosUpdate({ url, produto, descricao, valor })
        setOpenUpdate(true)
    }

    return (
        <div className={S.mainMenu}>
            <div className={S.icon}>
                <AiOutlineDelete onClick={openModal} className={S.delete} />
                <AiFillEdit onClick={openModalUpdate} className={S.update} />
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