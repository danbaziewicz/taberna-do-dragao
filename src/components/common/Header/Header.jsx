import React from 'react'
import { Link } from 'react-router-dom'
import S from './Header.module.css'

const Header = () => {
  return (
    <header className={S.header}>
      <nav className={S.nav}>
        <Link className={S.link} to={"/"}>
          Home
        </Link>
        <Link className={S.link} to={"/cardapio"}>
          Cardápio
        </Link>
        <Link className={S.link} to={"/pedidos"}>
          Pedidos
        </Link>
        <Link className={S.link} to={"/login"}>
          Login
        </Link>
        
      </nav>
    </header>
  )
}

export default Header