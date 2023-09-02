import { useState } from "react";
import { useSpring } from "react-spring";
import styles from "./Skills.module.css";
import { Box, Tabs, Tab } from "@mui/material";

export default function Skills() {
  const [value, setValue] = useState(0);

  const handleChange = (e, newVal) => setValue(newVal);

  const Shift4 = {
    company: "Shift4",
    role: "Software Engineer III",
    date: "Oct 2021 - Oct 2022",
    src: "https://www.shift4.com/online-payments",
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

  // I am well versed in front-end technology and have over 5years experience creating react applications.
  // REcently, I have been learning express, graphql, mondodb and node.js on my way to full-stack development.

  // langs: Javascript, HTML 5, CSS 3, Node.js, TypeScript, python, SASS/LESS
  // technology: React.js, Redux, Sagas, Webpack, GraphQL, SQL, SQLite, axios, express, django, Firebase, mongodb, NPM, webpack
  // UI: MaterialUI, SemanticUI, styled components, media breakpoints and cssgrid
  // testing: Jest, Enzyme, Redux Dev Tools

  // other: git, github, gitlab slack, trello, kanban, Jira, Notion Responsive design,creativity, teamwork, problem solving, leadership, empathy,

  return (
    <div className={styles.skillsWrapper}>
      <h2>Skills</h2>
      <h3>
        I am well versed in front-end technology and have over 5 years
        experience creating react applications. Recently, I have been learning
        express, graphql, mondodb and node.js on my way to full-stack
        development.
      </h3>
      <div className={styles.stack}>
        <p>Languages:</p>
        JS/HTML/CSS, Node.js, TypeScript, Python, SASS/LESS
      </div>
      <div className={styles.stack}>
        Technology: React.js, Redux, Sagas, Webpack, GraphQL, SQL, SQLite,
        axios, express, django, Firebase, mongodb, NPM, webpack
      </div>
      <div className={styles.stack}>
        UI: MaterialUI, SemanticUI, styled-components, CSS Grid
      </div>
      <div className={styles.stack}>Testing: Jest, Enzyme, Redux Dev Tools</div>
      <div className={styles.stack}>
        Other: git, github, gitlab slack, trello, kanban, Jira, Notion,
        Responsive design, creativity, teamwork, problem solving, leadership,
        empathy
      </div>
      {/* <div className={styles.job}>
        <div className={styles.summary}>
          <div>{job.description}</div>
          <div className={styles.stack}>Tech Stack: {job.stack}</div>
        </div>
      </div> */}
    </div>
  );
}
