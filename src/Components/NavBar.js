import { useState, useEffect } from "react";
import { useSpring, animated } from "react-spring";
import styles from "./NavBar.module.css";
import { Button, AppBar, Box, Toolbar, duration } from "@mui/material";
import { flexbox, keys } from "@mui/system";
import { findByLabelText } from "@testing-library/react";
import { hover } from "@testing-library/user-event/dist/hover";

export default function NavBar({ onClick }) {
  const [active, toggle] = useState(false);
  const [mousedOver, setMousedOver] = useState(false);
  const [hoveredLink, setHoveredLink] = useState(null);
  const ABOUT = "ABOUT";
  const SKILLS = "SKILLS";
  const EXPERIENCE = "EXPERIENCE";
  const INTERESTS = "INTERESTS";
  const CONTACTS = "CONTACTS";

  const btnStyle = {
    fontStyle: "italic",
    fontFamily: "Courier New",
    fontWeight: "bold",
    fontSize: "2vh",
  };

  const pulsateProps = useSpring({
    from: { scale: 1 },
    to: { scale: 1.1 },
    loop: { reverse: true },
    config: { duration: 2000 },
  });

  const hoveredProps = useSpring({
    from: { scale: 1.4 },
    to: { scale: 1.5 },
    loop: { reverse: true },
    config: { duration: 1000 },
  });

  const generateLinks = () => {
    const links = [ABOUT, SKILLS, EXPERIENCE, INTERESTS, CONTACTS];
    return links.map((linkName, i) => {
      return (
        <animated.div
          onMouseEnter={() => setHoveredLink(i)}
          onMouseLeave={() => setHoveredLink(null)}
          className={styles.btn}
          onClick={() => {
            console.log("## click =", linkName);
            onClick(linkName);
          }}
          style={i === hoveredLink ? hoveredProps : pulsateProps}
        >
          {linkName}
        </animated.div>
      );
    });
  };

  console.log("## styles in NavBar ==", styles);

  return (
    <AppBar position="static">
      <Toolbar
        sx={{
          backgroundColor: "#01CDFE",
          display: "flex",
          width: "100%",
          justifyContent: "space-between",
        }}
      >
        <Box>HOME</Box>
        <Box
          sx={{
            display: "flex",
            gap: "2em",
            alignItems: "center",
            //marginRight: "10px",
          }}
        >
          {generateLinks()}
        </Box>
      </Toolbar>
    </AppBar>
  );
}
