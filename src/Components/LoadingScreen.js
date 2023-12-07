import { useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import styles from "./LoadingScreen.module.css";

export default function LoadingScreen({ loading }) {
  // let [loading, setLoading] = useState(true);
  let [color, setColor] = useState("#ffffff");

  // const override = {
  //   display: "block",
  //   margin: "0 auto",
  //   borderColor: "red",
  // };

  return (
    <div className={styles.loaderWrapper}>
      <ClipLoader
        color={color}
        loading={loading}
        // cssOverride={override}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
}
