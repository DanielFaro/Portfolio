import { useEffect, useState, forwardRef } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useSpring, animated } from "react-spring";
import Modal from "@mui/material/Modal";
import Backdrop from "@mui/material/Backdrop";
import Loader from "./Loader";
import styles from "./LoadingModal.module.css";
// const FadeWrapper = forwardRef(function FadeWrapper(props, ref) {
//   const { in: open, children, onEnter, onExited, ...other } = props;
//   const style = useSpring({
//     from: { opacity: 0 },
//     to: { opacity: open ? 1 : 0 },
//     onStart: () => {
//       if (open && onEnter) {
//         onEnter();
//       }
//     },
//     onRest: () => {
//       if (!open && onExited) {
//         onExited();
//       }
//     },
//   });

//   return (
//     <animated.div ref={ref} style={style} {...other}>
//       {children}
//     </animated.div>
//   );
// });

// const style = {
//   position: "absolute",
//   // height: 500,
//   // width: 500,
//   top: "50%",
//   left: "50%",
//   height: "100%",
//   width: "100%",
//   transform: "translate(-50%, -50%)",
//   bgcolor: "background.paper",
//   border: "2px solid #000",
//   boxShadow: 24,
//   p: 4,
// };

export default function LoadingModal() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    handleOpen();
  }, []);

  return (
    <div className={open ? styles.modalWrapper : styles.modalWrapperClosed}>
      {open && <Loader show={open} />}
      <Button onClick={handleClose}>Enter</Button>
    </div>
  );
}
