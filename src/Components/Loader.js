import { useState, useEffect } from "react";
import { useMeasure } from "react-use";
import { useSpring, animated, easings } from "react-spring";
import styles from "./Loader.module.css";

const Loader = () => {
  const [active, toggle] = useState(false);
  const [ref, { width }] = useMeasure();
  const props = useSpring({
    width: active ? width : 0,
    backgroundColor: active ? "green" : "red",
    config: { duration: 1000 },
  });
  const containerSpring = useSpring({
    from: { opacity: 1 },
    to: { opacity: 0 },
    delay: 1000,
    // config: { easing: easings.easeOutBack(2) },
    config: { duration: 1000 },
  });

  // only activate on mount, dont make it clickable,
  // useEffect to set to active on first mount
  useEffect((active) => {
    toggle(!active);
  }, []);

  console.log("## width from useMeasure ==", width);

  return (
    <animated.div className={styles.container} style={containerSpring}>
      <div ref={ref} className={styles.main}>
        <animated.div className={styles.fill} style={props} />
        <animated.div className={styles.content}>
          {props.width.to((x) => Math.floor((x * 100) / width))}
        </animated.div>
      </div>
    </animated.div>
  );
};

export default Loader;
