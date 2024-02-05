import { useLayoutEffect } from "react";
import { gsap, Power3, Back } from "gsap";
import styles from "./app.module.scss";

export function gsapAnimation() {
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      let tl = gsap.timeline({ delay: 1 });
      tl.from(
        `.${styles.cart}`,
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
      );
      tl.from(`.${styles.g_content}`, {
        duration: 0.75,
        opacity: 0,
        x: '20%',
        ease: Back.easeInOut,
      }, 0.75);
    });
    return () => ctx.revert();
  }, []);
}
