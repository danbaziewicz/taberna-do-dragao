import React, { useState } from 'react'
import Styles from './Login.module.css'
import logoSemBackground from '../../assets/images/logoSemBackground.png'
import { Link } from 'react-router-dom';
import { AiOutlineExclamationCircle } from "react-icons/ai"


const Login = () => {
  const [email, setEmail] = useState("")
  const [valido, setValido] = useState(true)
  const handleChange=(e)=>{
    const regex = /^(?=.*[A-Z].*[A-Z])(?=.*[!@#$&*])(?=.*[0-9].*[0-9])(?=.*[a-z].*[a-z].*[a-z]).{8}$/

    let valor= e.target.value
    if (regex.test(valor)){
      
      setValido(true)
    } else {
      setValido(false)
    }
    
    
  }

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
            <input  onChange={(e)=>handleChange(e)} className= {Styles.input} type="password" id="senha" name="senha" />
            {valido? "":<p className={Styles.label}>senha invalida <abbr title="Sua senha precisa ter: Duas letras maiúsculas,três letras minúsculas, dois números e um caractere especial. Exemplo: AF@02cvb "><AiOutlineExclamationCircle/></abbr> </p>}
            <span className={Styles.focusInput} data-placeholder="Password"></span>
          </div>


          <div className={Styles.containerFormulariosBtn}>
            <input value="Conectar" type= "submit"  className={Styles.formulariosBtn}></input>
          </div>
        </form>

      </div>


    </section>


  )



}


export default Login