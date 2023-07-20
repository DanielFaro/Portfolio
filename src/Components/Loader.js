import { useState, useEffect } from "react";
import { useMeasure } from "react-use";
import { useSpring, animated } from "react-spring";
import styles from "./Loader.module.css";
import { duration } from "@mui/material";

const Loader = () => {
  const [active, toggle] = useState(false);
  const [mousedOver, setMousedOver] = useState(false);
  const [ref, { width }] = useMeasure();
  // console.log(" show color in Loader ==", show);
  const props = useSpring({
    width: active ? width : 0,
    backgroundColor: active ? "green" : "blue",
    config: { duration: 1000 },
  });
  // const { x } = useSpring({ from: { x: 0 } });
  const { scale } = useSpring({
    from: { scale: 1 },
    to: { scale: 1.1 },
    // transform: mousedOver ? "scale(1.1)" : "scale(1)",
    // config: duration,
    loop: { reverse: true },
    // config: { duration: 1000 },
    // delay: 1000,
  });
  // const containerSpring = useSpring({
  //   from: { opacity: 1 },
  //   to: { opacity: 0 },
  //   delay: 1000,
  //   // config: { easing: easings.easeOutBack(2) },
  //   config: { duration: 1000 },
  // });

  // only activate on mount, dont make it clickable,
  // useEffect to set to active on first mount
  useEffect((active) => {
    toggle(!active);
  }, []);

  console.log("## width from useMeasure ==", props.width);

  return (
    <animated.div className={styles.container}>
      <animated.div ref={ref} className={styles.main}>
        <animated.div className={styles.fill} style={props} />
        <animated.div className={styles.content}>
          {props.width.to((x) => {
            console.log("inside loop ==", Math.floor((x * 100) / width));
            return Math.floor((x * 100) / width) < 101
              ? Math.floor((x * 100) / width)
              : "Enter";
          })}
        </animated.div>
        {/* {width === 200 && (
          <animated.div
            onMouseEnter={() => setMousedOver(true)}
            className={styles.enterbtn}
            style={pulsateProps}
          >
            Come inside
          </animated.div>
        )} */}
      </animated.div>
    </animated.div>
  );
};

export default Loader;
