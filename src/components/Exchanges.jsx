import React from 'react';
import styles from "../App.module.scss";
import fiverr from "../assets/img/fiverr.webp";
import freelancehunt from "../assets/img/freelancehunt.webp";


export function Exchanges() {
  const linkFreelancehunt = 'https://freelancehunt.com/freelancer/rain_jv.html'

  return (
    <div className={styles.exchanges}>
      <div className={styles.exchanges__titles}>
        <h2 className={styles.exchanges__title}>Exchanges where you can buy my services</h2>
        <hr />
        <h2 className={styles.exchanges__title}>Біржі, де ви можете придбати мої послуги</h2>
      </div>
      <div className={styles.exchanges__links}>
        <a href="https://www.fiverr.com/alexander__o?public_mode=true" className={styles.exchanges__link} target="_black">
          <img src={fiverr} alt="Fivver" className={styles.exchanges__image} />
        </a>
        <a href={linkFreelancehunt} className={styles.exchanges__link} target="_black">
          <img src={freelancehunt} alt="Freelancehunt" className={styles.exchanges__image} />
        </a>
      </div>
    </div>
  )
}
