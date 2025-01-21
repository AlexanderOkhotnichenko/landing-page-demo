import React from 'react'
import { IoLogoGithub } from "react-icons/io";
import styles from "../app.module.scss";

export function Reference() {
  return (
    <div className={styles.github}>
    <div className={styles.g_content}>
      <a href="https://github.com/AlexanderOkhotnichenko" title="github repository" className={styles.icon} target="_black">
        <IoLogoGithub />
      </a>
    </div>
  </div>
  )
}
