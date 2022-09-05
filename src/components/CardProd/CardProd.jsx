import React from 'react'
import S from './Card.module.css'

const CardProd = ({ produto, descricao, url, valor }) => {
    return (
        <div className={S.mainMenu}>
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