import { useState } from "react";
import { useSpring } from "react-spring";
import styles from "./Skills.module.css";
import { Box, Tabs, Tab, Typography, Chip, styled } from "@mui/material";
import { red } from "@mui/material/colors";

export default function Skills() {
  const [value, setValue] = useState(0);
  const handleChange = (e, newVal) => setValue(newVal);

  const generateChips = (items) => {
    return items.map((item) => {
      return <div className={styles.chip}>{item}</div>;
    });
  };

  function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
      value === index && (
        <div
          role="tabpanel"
          className={styles.TabPanel}
          id={`simple-tabpanel-${index}`}
          aria-labelledby={`simple-tab-${index}`}
          {...other}>
          {children}
          {/* <Box sx={{ p: 3 }}>
          <Typography variant="p">{children}</Typography>
        </Box> */}
        </div>
      )
    );
  }

  const AntTabs = styled((props) => (
    <Tabs {...props} orientation="horizontal" variant="scrollable" />
  ))({
    borderBottom: "1px solid #0a192f",
    "& .MuiTabs-indicator": {
      backgroundColor: "#1890ff",
    },
  });

  const AntTab = styled((props) => <Tab {...props} />)(({ theme }) => ({
    textTransform: "none",
    // minWidth: 0,
    // [theme.breakpoints.up("xs")]: {
    //   minWidth: 80,
    // },
    // fontWeight: theme.typography.fontWeightRegular,
    // marginRight: theme.spacing(1),
    color: "#ffffff",
    fontFamily: [
      '"SF Mono"',
      '"Fira Code"',
      '"Fira Mono"',
      '"Roboto Mono"',
      "monospace",
    ].join(","),
    "&:hover": {
      color: "#40a9ff",
      opacity: 1,
    },
    "&.Mui-selected": {
      color: "#1890ff",
      backgroundColor: "rgba(2,2,2,0.2)",
      fontWeight: theme.typography.fontWeightMedium,
    },
    // "&.Mui-focusVisible": {
    //   backgroundColor: "#d1eaff",
    // },
  }));

  const Languages = [
    "HTML/CSS/JS",
    "Node.js",
    "TypeScript",
    "Python",
    "SASS/LESS",
  ];
  const Technology = [
    "React.js",
    "Redux",
    "Sagas",
    "Webpack",
    "GraphQL",
    "SQL",
    "SQLite",
    "axios",
    "express",
    "django",
    "Firebase",
    "mongodb",
    "NPM",
    "webpack",
  ];
  const UI = ["MaterialUI", "SemanticUI", "styled-components", "CSS Grid"];
  const Testing = ["Jest", "Enzyme", "Redux Dev Tools"];
  const Other = [
    "git",
    "github",
    "gitlab",
    "slack",
    "trello",
    "kanban",
    "Jira",
    "Responsive design",
    "creativity",
    "teamwork",
    "problem solving",
    "leadership",
    "empathy",
  ];
  return (
    <div className={styles.skillsWrapper}>
      <h2>Skills</h2>
      <p>
        I am well versed in front-end technology and have over 5 years
        experience creating react applications. Recently, I have been learning
        express, graphql, mondodb and node.js on my way to full-stack
        development.
      </p>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          // width: "100%",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "transparent",

          // flexGrow: 1,
        }}>
        <Box sx={{ maxWidth: "520px" }}>
          <AntTabs
            value={value}
            onChange={handleChange}
            orientation="horizontal"
            variant="scrollable"
            // scrollButtons
            // allowScrollButtonsMobile
            aria-label="scrollable-horizontal"
            sx={{
              // textColor: "secondary.light",
              // width: "200px",
              marginBottom: "20px",
              maxWidth: { xs: 280, sm: 520 },
            }}>
            <AntTab value={0} label="Languages" />

            <AntTab value={1} label="Technology" />
            <AntTab value={2} label="UI" />
            <AntTab value={3} label="Testing" />
            <AntTab value={4} label="Other" />
          </AntTabs>
        </Box>
        <CustomTabPanel value={value} index={0}>
          {generateChips(Languages)}
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          {generateChips(Technology)}
        </CustomTabPanel>
        <CustomTabPanel value={value} index={2}>
          {generateChips(UI)}
        </CustomTabPanel>
        <CustomTabPanel value={value} index={3}>
          {generateChips(Testing)}
        </CustomTabPanel>
        <CustomTabPanel value={value} index={4}>
          {generateChips(Other)}
        </CustomTabPanel>
      </Box>
    </div>
  );
}

{
  /* <div className={styles.job}>
        <div className={styles.summary}>
          <div>{job.description}</div>
          <div className={styles.stack}>Tech Stack: {job.stack}</div>
        </div>
      </div> */
}

{
  /* <div className={styles.stack}>
<p>Languages:</p>
HTML/CSS/JS, Node.js, TypeScript, Python, SASS/LESS //{" "}
</div>
<div className={styles.stack}>
Technology: React.js, Redux, Sagas, Webpack, GraphQL, SQL, SQLite, //
axios, express, django, Firebase, mongodb, NPM, webpack //{" "}
</div>

<div className={styles.stack}>
UI: MaterialUI, SemanticUI, styled-components, CSS Grid //{" "}
</div>

<div className={styles.stack}>Testing: Jest, Enzyme, Redux Dev Tools</div>

<div className={styles.stack}>
Other: git, github, gitlab slack, trello, kanban, Jira, Notion, //
Responsive design, creativity, teamwork, problem solving, leadership, //
empathy
</div> */
}

<Box
  sx={{
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "start",
    flexDirection: "column",
    textAlign: "start",
  }}>
  {/* <h3>{header}</h3>
<p>{date}</p>
<ul>
  {bullets.map((item) => (
    <li style={{ margin: "20px 0px" }}>{item}</li>
  ))}
</ul> */}
</Box>;
