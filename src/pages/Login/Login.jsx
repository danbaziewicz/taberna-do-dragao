import React, { useState } from 'react'
import Styles from './Login.module.css'
import logoSemBackground from '../../assets/images/logoSemBackground.png'
import { Link } from 'react-router-dom';


const Login = () => {
  const [email, setEmail] = useState("")
  const [senha, setSenha] = useState("")


  return (
    <section className={Styles.containerTotal}>

      <div className={Styles.containerInicioLogin}>


        <div className={Styles.titulo}>
          <span className={Styles.formTitulo}>Login
            <img src={logoSemBackground} alt="Dragão da Taberna do Dragão" />
          </span>
        </div>

        <form className={Styles.baseForm}>


          <div className={Styles.formularios}>
            <label htmlFor="email" className={Styles.label}>
              E-mail:
            </label>
            <input className={Styles.input} type="email" id="email" name="email" />
            <span className={Styles.focusInput} data-placeholder="E-mail"></span>
          </div>



          <div className={Styles.formularios}>
          <label htmlFor="password" className={Styles.label}>
              Senha:
            </label>
            <input className= {Styles.input} type="password" id="senha" name="senha" />
            <span className={Styles.focusInput} data-placeholder="Password"></span>
          </div>


          <div className={Styles.containerFormulariosBtn}>
            <input value="Conectar" type= "submit" className={Styles.formulariosBtn}></input>
          </div>
        </form>

      </div>


    </section>


  )



}


export default Login