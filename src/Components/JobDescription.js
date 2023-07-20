import { useState } from "react";
import { useSpring } from "react-spring";
import styles from "./JobDescription.module.css";
import { Box, Tabs, Tab } from "@mui/material";

export default function JobDescription() {
  const [value, setValue] = useState(0);

  const handleChange = (e, newVal) => setValue(newVal);

  const Shift4 = {
    header: "Software Engineer III - Shift4",
    date: "Oct 2021 - Oct 2022",
    bullets: [
      `Maintained and developed front end code for a POS application used in secure bulk purchase transactions (e.g. Theme parks, Hotels, Stadiums)`,
      `Developed contemporary layouts for devices including tablets and phones`,
      `Improved UI experience based on user feedback for multiple software versions ranging in complexity`,
    ],
  };

  const Cadent = {
    header: "Associate Front-End Engineer - Cadent",
    date: "July 2019 - Oct 2021",
    bullets: [
      `Built shared React components for ad time purchasing app using React/Redux and ensure code functionality with Jest`,
      `Fixed bugs from existing codebases and implemented enhancements to improve speed and functionality`,
      `Explored modern js technology including sagas and web sockets`,
    ],
  };

  const ProjectOne = {
    header: "Junior Front-End Developer",
    date: "Dec 2017 - Sept 2018",
    bullets: [
      `Led the front-end development of an innovative web app for college students to learn and practice calculus`,
      `Built a fully functioning MVP for higher education from the ground up`,
      `Utilized burgeoning js libraries such immutableJS and semanticUI`,
    ],
  };

  const { header, date, bullets } =
    value === 0 ? Shift4 : value === 1 ? Cadent : ProjectOne;

  // Add a fade in/fade out transition for description
  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        height: "100%",
        // flexGrow: 1,
      }}
    >
      <Box>
        <Tabs
          value={value}
          onChange={handleChange}
          orientation="vertical"
          variant="scrollable"
          sx={{
            borderRight: 1,
            mr: 5,
            height: "300px",
          }}
        >
          <Tab value={0} label="Shift4" />
          <Tab sx={{ m: "70px 0px" }} value={1} label="Cadent" />
          <Tab value={2} label="ProjectOne" />
        </Tabs>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "start",
          flexDirection: "column",
          textAlign: "start",
        }}
      >
        <h3>{header}</h3>
        <p>{date}</p>
        <ul>
          {bullets.map((item) => (
            <li style={{ margin: "20px 0px" }}>{item}</li>
          ))}
        </ul>
      </Box>
    </Box>
  );
}
