import React from "react";
import S from "./Footer.module.css";
import Input from "../Input/Input";
import { FaWhatsapp, FaPhone, FaFacebookSquare, FaInstagram, FaTwitter, FaLinkedin, FaCcVisa, FaCcPaypal, FaRegMoneyBillAlt, FaRegPaperPlane, FaCcMastercard, FaBeer} from "react-icons/fa";
import svg from "../../../assets/images/pix.svg"
import logo from "../../../assets/images/logoSemBackground.png"

const Footer = () => {
  return (
    <div className={S.container}>
      <footer className={S.footer}>
        <div className={S.taberna}>
          <img src={logo}/>
        </div>
        <div className={S.infos}>
          
          <h3>Horário de funcionamento:</h3>
          <p>De seg a sex das 17:00 às 00:00</p>
          <p>Sab, dom e feriados das 15:00 às 00:30</p>
          <h3>Endereço: rua squad, nº 8 - SP</h3>
          <h3>Contato:</h3>
          <div className={S.contato}>
          <p><FaWhatsapp size="25px" color="#766B65"/>+55(11)9999-0000</p>
          <p><FaPhone size="25px" color="#766B65"/>+55(11)3333-7777</p>
          </div>
          
        </div>
        <div className={S.social}>
          <h3>Estamos nas redes sociais</h3>
          <div className={S.redesSociais}>
          <FaFacebookSquare size="35px" color="#766B65"/>
          <FaInstagram size="35px" color="#766B65"/>
          <FaTwitter size="35px" color="#766B65"/>
          <FaLinkedin size="35px" color="#766B65"/>
          </div>
          <h3>Formas de pagamento</h3>
          <div className={S.pay}>
          <FaCcVisa size="35px"/>
          <FaCcMastercard size="35px"/>
          <FaCcPaypal size="35px"/>
          <FaRegMoneyBillAlt size="35px"/>
          <img src={svg}/>
          </div>
          
        </div>
        <div className={S.alert}>
          <h3>BEBA COM MODERAÇÃO! <FaBeer size="15px"/></h3>
        </div>

        <div>
          <form className={S.newsletter}>
            <h3>Assine nossa Newsletter! <FaRegPaperPlane/></h3>
            <Input
              type="email"
              name="email"
              id="email"
              placeholder={"seumelhoremail@outlook.com"}
              style={S.input}
            />
            <input type="submit" value="Assinar" className={S.button}/>
          </form>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
