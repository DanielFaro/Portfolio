import { useState } from "react";
import styles from "./SideBar.module.css";
import { AppBar, Box, Toolbar, IconButton, Drawer } from "@mui/material";
import { ReactComponent as PersonalLogo } from "../../assets/icons/logoSm.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-regular-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { mobileLinks, scrollToTop } from "./index.js";
import Resume from "../../assets/images/DanielFaroResume.pdf";

export default function SideBar({ onClick }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = (event) => {
    event.preventDefault();
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setMenuOpen(!menuOpen);
  };

  const generateLinks = () => {
    return mobileLinks.map((linkName, i) => {
      return (
        <div
          key={linkName}
          className={styles.btn}
          onClick={() => {
            onClick(linkName);
          }}>
          /{linkName}
        </div>
      );
    });
  };

  return (
    <AppBar sx={{ backgroundColor: "secondary.dark" }}>
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          boxShadow: 2,
        }}>
        <div className={styles.logo} onClick={() => scrollToTop()}>
          <PersonalLogo />
        </div>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="open drawer"
          onClick={toggleMenu}>
          <FontAwesomeIcon
            icon={faBars}
            size="xs"
            style={{ color: "#ffffff" }}
          />
        </IconButton>
        <Drawer
          anchor="right"
          variant="temporary"
          open={menuOpen}
          onClose={toggleMenu}
          PaperProps={{
            sx: {
              width: 100,
              backgroundColor: "secondary.dark",
              padding: 1,
            },
          }}>
          <Box onClick={toggleMenu} sx={{ marginBottom: 5, cursor: "pointer" }}>
            <FontAwesomeIcon
              icon={faCircleXmark}
              size="lg"
              style={{ color: "#ffffff" }}
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "1.5em",
              alignItems: "center",
            }}>
            {generateLinks()}
            <Box>
              <a href={Resume} target="_blank" rel="noreferrer">
                <button className={styles.resumeBtn}>C/V</button>
              </a>
            </Box>
          </Box>
        </Drawer>
      </Toolbar>
    </AppBar>
  );
}
