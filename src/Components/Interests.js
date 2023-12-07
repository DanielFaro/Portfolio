import { useState } from "react";
import { useSpring } from "react-spring";
import styles from "./JobDescription.module.css";
import { Box, Tabs, Tab } from "@mui/material";
import cadentImg from "../assets/images/cadentexample.jpg";
import shift4Img from "../assets/images/shift4.jpg";

export default function Interests() {
  const [value, setValue] = useState(0);

  const handleChange = (e, newVal) => setValue(newVal);

  const Shift4 = {
    company: "Shift4",
    role: "Software Engineer III",
    date: "Oct 2021 - Oct 2022",
    src: "https://www.shift4.com/online-payments",
    img: shift4Img,
    alt: "Shift4",
    stack: "[React, Redux, ReduxSaga, MaterialUI, Storybook, DataDog]",
    description: `Maintained and developed front end code for a POS application used in secure bulk purchase transactions (e.g. Theme parks, Hotels, Stadiums).
      Developed contemporary layouts for devices including tablets and phones
      Improved UI experience based on user feedback for multiple software versions ranging in complexity`,
  };

  const Cadent = {
    company: "Cadent",
    role: "Associate Front-End Engineer",
    date: "July 2019 - Oct 2021",
    src: "https://cadent.tv/",
    img: cadentImg,
    alt: "Cadent",
    stack: "[React, Redux, ReduxSaga, Storybook, Websockets, Jest]",
    description: `Built shared React components for ad time purchasing app using React/Redux and ensure code functionality with Jest.
      Fixed bugs from existing codebases and implemented enhancements to improve speed and functionality.
      Explored modern js technology including sagas and web sockets`,
  };

  const ProjectOne = {
    company: "Project One",
    role: "Junior Front-End Developer",
    date: "Dec 2017 - Sept 2018",
    alt: "ProjectOne",
    stack:
      "[React, Redux, ReduxSaga, SemanticUI, React Testing Library, MongoDB]",
    description: `Led the front-end development of an innovative web app for college students to learn and practice calculus.
      Built a fully functioning MVP for higher education from the ground up.
      Utilized burgeoning js libraries such immutableJS and semanticUI.`,
  };

  const { header, date, bullets } =
    value === 0 ? Shift4 : value === 1 ? Cadent : ProjectOne;

  const generateJobs = () => {
    return [Shift4, Cadent, ProjectOne].map((job) => {
      return (
        <div className={styles.jobWrapper} key={job.company}>
          <div className={styles.title}>
            <h2 className={styles.company}>{job.company}</h2>
            <h3 className={styles.role}>{job.role}</h3>
            <h3 className={styles.date}>{job.date}</h3>
          </div>

          <div className={styles.job}>
            <div className={styles.summary}>
              <div>{job.description}</div>
              <div className={styles.stack}>Tech Stack: {job.stack}</div>
            </div>
            {job.img && (
              <div className={styles.anchorWrapper}>
                <a
                  id="github-button"
                  href={job.src}
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className={styles.imageWrapper}>
                    <img src={job.img} alt={job.alt} />
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
  return <div className={styles.jobsWrapper}>{generateJobs()}</div>;
}
