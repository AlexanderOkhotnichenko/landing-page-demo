import { useLayoutEffect } from "react";
import { gsap, Power3 } from "gsap";
import styles from "./App.module.scss";

export function gsapAnimation() {
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      let tl = gsap.timeline({ delay: 0.5 });
      tl.from(
        `.${styles.card}`,
        {
          duration: 1.2,
          scale: 0,
          y: 100,
          ease: Power3.easeOut,
          stagger: {
            grid: [3, 15],
            from: 3,
            amount: 1.3,
          },
        },
        "start"
      ).to(`.${styles.card}`, {
        pointerEvents: "initial"
      });
    });
    return () => ctx.revert();
  });
}
