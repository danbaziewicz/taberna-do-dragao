import React from 'react'
import S from './Card.module.css'

const CardProd = ({ produto, descricao, valor }) => {
    return (
        <div className={S.mainMenu}>
            <div className={S.descricao}>
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaEzeXkjNCaX93iCcVgYs2y1TQdFvpKvi5zA&usqp=CAU'></img>
                <h4>{produto}Calabresa Acebolada</h4>
                <small>{descricao}Uma porçao de 400 gramas de calabresa com cebola frita</small>
                <h5>R${valor}15,00</h5>
            </div>
        </div>
    )
}

export default CardProd