import React from "react";
import styles from "../styles/Home.module.css";

const BgVid = () => {
  return (
    <div className={styles.vidWrapper}>
      <div className={styles.overlay} />
      <video autoPlay loop className={styles.vid} muted>
        <source src="/bg_vid.mp4" type="video/mp4" />
        Your browser does not support this video file.
      </video>
      <div className={styles.vidContent}>
        <h3 className={styles.vidTitle}>
          Let us bring a beautiful <br /> world to you
        </h3>
      </div>
    </div>
  );
};

export default BgVid;
