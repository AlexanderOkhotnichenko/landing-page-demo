import React from "react";
import styles from "../App.module.scss";

export function Container({ children, ...props }) {
  return (
    <div className={styles.container} {...props}>
      {children}
    </div>
  );
}
