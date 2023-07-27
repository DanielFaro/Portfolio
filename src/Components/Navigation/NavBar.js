import { useState } from "react";
import { useSpring, animated } from "react-spring";
import styles from "./NavBar.module.css";
import { links, mobileLinks, scrollToTop } from "./index.js";
import { AppBar, Box, Toolbar } from "@mui/material";
import { ReactComponent as PersonalLogo } from "../../assets/icons/logo.svg";

export default function NavBar({ onClick, width }) {
  const [hoveredLink, setHoveredLink] = useState(null);

  const hoveredProps = useSpring({
    from: { scale: 1.1 },
    to: { scale: 1.2 },
    loop: { reverse: true },
    config: { duration: 1000 },
  });

  const generateLinks = () => {
    const siteLinks = width > 768 ? links : mobileLinks;
    return siteLinks.map((linkName, i) => {
      return (
        <animated.div
          key={linkName}
          onMouseEnter={() => setHoveredLink(i)}
          onMouseLeave={() => setHoveredLink(null)}
          className={styles.btn}
          onClick={() => {
            onClick(linkName);
          }}
          style={i === hoveredLink ? hoveredProps : null}
        >
          /{linkName}
        </animated.div>
      );
    });
  };
  // E3E8F8
  // 018CFE
  //3776FD
  // 0AC1FD

  return (
    <AppBar position="fixed" sx={{ backgroundColor: "secondary.main" }}>
      <Toolbar
        sx={{
          display: "flex",
          color: "white",
          justifyContent: "space-between",
          boxShadow: 2,
        }}
      >
        <div className={styles.logo} onClick={() => scrollToTop()}>
          <PersonalLogo />
        </div>
        <Box
          sx={{
            display: "flex",
            gap: "1.5em",
            alignItems: "center",
          }}
        >
          {generateLinks()}
        </Box>
      </Toolbar>
    </AppBar>
  );
}
