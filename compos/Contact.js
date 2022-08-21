import React from "react";
import styles from "../styles/Home.module.css";
import Form from "./Form";

const Contact = () => {
  return (
    <section className="contact-entry">
      <div className={styles.contactContent}>
        <h3 className={styles.mainTitle}>Contact us</h3>
        <p className={styles.mainText}>{`Let's talk today`}</p>
      </div>
      <Form />
    </section>
  );
};

export default Contact;
