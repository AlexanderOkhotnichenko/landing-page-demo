import React from "react";
import styles from "../app.module.scss";

export function Cart({ id, link, img, title }) {

  return (
    <a href={link?.href} className={`${styles.cart} group`} id={id} target="_blank">
      <div className={styles.content}>
        <img src={img?.src} alt={img?.alt} className={styles.hero} />
        <div className={styles.description}>
          <h2 className={styles.title} title={title?.attr}>{title?.name}</h2>
        </div>
      </div>
    </a>
  );
}
