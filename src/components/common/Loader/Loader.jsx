import React from "react";
import S from "./Loader.module.css";
import logo from "../../../assets/images/logoSemBackground.png";

const Loader = () => {
  return (
    <div className={S.loader}>
      <div className={S.spinner}>
      <img src={logo} className={S.imgLoad}/>
      </div>
    </div>
  );
};

export default Loader;
