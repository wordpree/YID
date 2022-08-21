import Image from "next/image";
import React from "react";
import logo from "../public/logo.svg";
import style from "../styles/Header.module.css";

const Header = () => {
  return (
    <nav className={style.nav}>
      <div>
        <Image height={142} width={142} alt="YID" src={logo} />
      </div>
    </nav>
  );
};

export default Header;
