import Typed from "typed.js";
import { useEffect, useRef } from "react";

import styles from "./AutoTypeWrapper.module.css";

export default function AutoTypeWrapper({ strings }) {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings,
      startDelay: 1000,
      typeSpeed: 90,
      backSpeed: 70,
      backDelay: 2000,
      smartBackspace: false,
      cursorChar: "|",
      loop: true,
      shuffle: true,
    });

    return () => typed.destroy();
  }, [strings]);

  return <span ref={el} className={styles.autoTypeWrapper} />;
}
