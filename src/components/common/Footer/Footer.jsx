import React from 'react'
import S from './Footer.module.css'
import Input from '../Input/Input'
import Button from '../Button/Button'

const Footer = () => {
  return (
    <div className={S.footer}>
      <footer>
        <div>
          <h4>Projeto desenvolvido por Squad 8</h4>
          <li>Danylo Baziewicz</li>
          <li>Erika Rodrigues</li>
          <li>Letícia Laranja</li>
          <li>Luís Eduardo Gonçalves</li>
        </div>
        <div>
          <h3>Newsletter</h3>
          <Input />
          <Button />
        </div>
      </footer>
    </div>
  )
}

export default Footer