import React from "react";
import Image from "next/image";
import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.entry}>
      <div className={styles.iconEntry}>
        <div className={styles.iconWrapper}>
          <Image
            src="/footerLogo.svg"
            height="42"
            width="42"
            alt="footer icon"
          />
        </div>
        <div className={styles.iconWrapper}>
          <Image
            src="/footer-social.png"
            height="26"
            width="26"
            alt="footer icon"
          />
          <span>Follow us</span>
        </div>
      </div>
      <p className={styles.copyright}>
        ©{new Date().getFullYear()} All right reserved YID
      </p>
    </footer>
  );
};

export default Footer;
