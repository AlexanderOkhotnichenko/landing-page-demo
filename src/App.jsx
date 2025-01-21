import React from "react";
import { Main } from "./components/Main";
import { Reference } from "./components/Reference";
import { Cart } from "./components/Cart";
import { data } from "./data";
import { gsapAnimation } from "./gsapAnimation";
import styles from "./app.module.scss";

function App() {
  gsapAnimation();

  return (
    <Main>
      <div className={styles.container}>
        <Reference />
        <div className={styles.catallog}>
          {data.map((card, index) => (
            <Cart key={index} {...card} />
          ))}
        </div>
      </div>
    </Main>
  );
}

export default App;
