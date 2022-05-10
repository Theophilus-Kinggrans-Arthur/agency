import Image from "next/image";
import React from "react";
import styles from "../styles/Footer.module.css";
import Link from "next/link";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.cardL}>
        <h1 className={styles.title}>RUTH CREATIVES</h1>
        <h1 className={styles.linkTitle}>
          <a href="/contact" passHref>
            <span className={styles.linkText}>WORK WITH US</span>
            <Image src="/img/link.png" width="40px" height="40px" alt="" />
          </a>
        </h1>
      </div>
      <div className={styles.cardS}>
        <div className={styles.cardItem}>
          14 CODE COAST CP <br /> GHANA
        </div>
        <div className={styles.cardItem}>
          CONTACT@RUTH
          <br /> +233 553I44993
        </div>
      </div>
      <div className={styles.cardS}>
        <div className={styles.cardItem}>
          FOLLOW US: <br /> __FB __IN __BE __TW
        </div>
        <div className={styles.cardItem}>
          @ 2022 RUTH INTERACTIVE,
          <br />
          ALL RIGHT RESERVED
        </div>
      </div>
    </div>
  );
};

export default Footer;
