import React from "react";
import styles from "../App.module.scss";

export function Catallog({ children }) {
  return <div className={styles.catallog}>{children}</div>;
}
