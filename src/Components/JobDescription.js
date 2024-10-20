import { useState } from "react";
import { useSpring } from "react-spring";
import styles from "./JobDescription.module.css";
import { Box, Tabs, Tab } from "@mui/material";
import cadentImg from "../assets/images/cadentexample.jpg";
import shift4Img from "../assets/images/shift4.jpg";
import NoplexImg from '../assets/images/NoPlex.png';
import {ReactComponent as CadentSVG} from '../assets/images/cadent.svg';

export default function JobDescription() {
  const [value, setValue] = useState(0);

  const handleChange = (e, newVal) => setValue(newVal);

  const NoPlex = {
    company: "NoPlex",
    role: "Consulting Front-End Engineer",
    date: "July 2024 - Present",
    src: "https://www.noplex.ai",
    img: NoplexImg,
    alt: "Noplex",
    stack: "[React/React Native, Redux, Typescript, Axios]",
    description: `Developed new features for a task management app using React/React Native for web and mobile`,
  };

  const Shift4 = {
    company: "Shift4",
    role: "Software Engineer III",
    date: "Oct 2021 - Oct 2022",
    src: "https://www.shift4.com/online-payments",
    img: shift4Img,
    alt: "Shift4",
    stack: "[React, Redux, ReduxSaga, MaterialUI, Storybook]",
    description: `Maintained and developed front end code for a POS application used in secure bulk purchase transactions`,
  };

  // Developed contemporary layouts for devices including tablets and phones
  // Improved UI experience based on user feedback for multiple software versions ranging in complexity`,

  const Cadent = {
    company: "Cadent",
    role: "Associate Front-End Engineer",
    date: "July 2019 - Oct 2021",
    src: "https://cadent.tv/",
    img: cadentImg,
    width: 350,
    alt: "Cadent",
    stack: "[React, Redux, ReduxSaga, Storybook, Websockets, Jest]",
    description: `Built shared React components for ad time purchasing app using React/Redux and ensure code functionality with Jest.`,
  };

  // Fixed bugs from existing codebases and implemented enhancements to improve speed and functionality.
  // Explored modern js technology including sagas and web sockets`,

  const ProjectOne = {
    company: "Project One",
    role: "Junior Front-End Developer",
    date: "Dec 2017 - Sept 2018",
    alt: "ProjectOne",
    stack:
      "[React, Redux, ReduxSaga, SemanticUI, React Testing Library, MongoDB]",
    description: `Led the front-end development of an innovative web app for college students to learn and practice calculus.
      Built a fully functioning MVP for higher education from the ground up.`,
  };

  // Utilized burgeoning js libraries such immutableJS and semanticUI.`,

  const { header, date, bullets } =
    value === 0 ? Shift4 : value === 1 ? Cadent : ProjectOne;

  const generateJobs = () => {
    return [NoPlex, Shift4, Cadent, ProjectOne].map((job) => {
      return (
        <div className={styles.jobWrapper} key={job.company}>
          <div className={styles.title}>
            <h3 className={styles.company}>{job.company}</h3>
            <p className={styles.role}>{job.role}</p>
            <p className={styles.date}>{job.date}</p>
          </div>

          <div className={styles.job}>
            <div className={styles.summary}>
              <p>{job.description}</p>
              <div className={styles.stack}>
                Tech Stack: <br></br> {job.stack}
              </div>
            </div>
            {job.img && (
              <div className={styles.anchorWrapper}>
                <a
                  id="github-button"
                  href={job.src}
                  target="_blank"
                  rel="noreferrer">
                  <div className={styles.imageWrapper}>
                    <img src={job.img} alt={job.alt} width={job?.width}/>
                  </div>
                </a>
              </div>
            )}
          </div>
        </div>
      );
    });
  };

  // Add a fade in/fade out transition for description
  return (
    <div>
      <h2>Experience</h2>
      <div className={styles.separator} />
      <div className={styles.jobsWrapper}>{generateJobs()}</div>
    </div>
  );
}

// <Box
//   sx={{
//     display: "flex",
//     width: "100%",
//     height: "600px",
//     // flexGrow: 1,
//   }}
// >
//   <Box>
//     <Tabs
//       value={value}
//       onChange={handleChange}
//       orientation="vertical"
//       variant="scrollable"
//       aria-label="scrollable-horizontal"
//       sx={{
//         borderRight: 1,
//         mr: 5,
//         height: "300px",
//       }}
//     >
//       <Tab value={0} label="Shift4" />
//       <Tab sx={{ m: "70px 0px" }} value={1} label="Cadent" />
//       <Tab value={2} label="ProjectOne" />
//     </Tabs>
//   </Box>
//   <Box
//     sx={{
//       display: "flex",
//       alignItems: "flex-start",
//       justifyContent: "start",
//       flexDirection: "column",
//       textAlign: "start",
//     }}
//   >
//     <h3>{header}</h3>
//     <p>{date}</p>
//     <ul>
//       {bullets.map((item) => (
//         <li style={{ margin: "20px 0px" }}>{item}</li>
//       ))}
//     </ul>
//   </Box>
// </Box>
