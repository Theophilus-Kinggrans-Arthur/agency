import React from "react";
import styles from "../styles/Intro.module.css";
import Image from "next/image";
import Circle from "./Circle";

const Intro = () => {
  return (
    <div className={styles.container}>
      <Circle backgroundColor="#b0ff49" left="-50vh" top="-50vh" />
      <Circle backgroundColor="#b0ff49" right="-40vh" />
      <div className={styles.card}>
        <h1 className={styles.title}>
          <span className={styles.brand}>RUTH</span> DIGITAL PRODUCT AGENCY
        </h1>
        <p className={styles.desc}>
          Create live segment and target right people for message based on thier
          behaviors
        </p>
        <button className={styles.button}>DISCOVER</button>
      </div>
      <div className={styles.card}>
        <Image
          src="/img/Avocado.png"
          with="100%"
          height="100%"
          objectFit="cover"
          layout="fill"
          alt=""
        />
      </div>
    </div>
  );
};

export default Intro;
