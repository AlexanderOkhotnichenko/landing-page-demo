import React, { useEffect, useState } from "react";
import styles from "../App.module.scss";

export function Card({ id, link, img, title, tags = [] }) {
  const [addClass, setAddClass] = useState(false);
  const timeout = 2700;

  useEffect(() => {
    setTimeout(() => {
      setAddClass(true);
    }, timeout);
  }, [timeout]);


  return (
    <a href={link.href} className={`${styles.card} ${addClass ? `${styles._init}` : ''} group`} id={id} target="_blank">
      <div className={`${styles.card__background} group-hover:brightness-130`}></div>
      <div className={styles.card__content}>
        <img src={img.src} alt={img.alt} className={styles.card__image} />
        <div className={styles.card__description}>
          <h2 className={styles.card__title} title={title.attr}>{title.name}</h2>
          <ul className={styles.card__tags}>
            {tags.map((tag, index) => (
              <li key={index}>
                <span className={styles.card__tag}>{tag.name}</span>
              </li>
              ))}
          </ul>
        </div>
      </div>
    </a>
  );
}
