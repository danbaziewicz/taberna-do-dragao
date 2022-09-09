import React from 'react'
import { Link } from 'react-router-dom'
import S from './Header.module.css'
import logo from "../../../assets/images/logoSemBackground.png"
import { BsCart3 } from "react-icons/bs";

const Header = () => {
  return (
    <header className={S.header}>
      <nav className={S.nav}>
        <img src={logo} alt="logo de dragão"/>
        <Link className={S.link} to={"/"}>
          Home
        </Link>
        <Link className={S.link} to={"/cardapio"}>
          Cardápio
        </Link>
        <Link className={S.link} to={"/pedidos"}>
          Pedidos
        </Link>
        <Link className={S.linkLogin} to={"/login"}>
          Login
        </Link>
      </nav>
      
    </header>
  )
}

export default Header