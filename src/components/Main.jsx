import React from "react";
import styles from "../app.module.scss";

export function Main({ children, ...props }) {
  return (
    <main className={styles.main} {...props}>
      {children}
    </main>
  );
}
