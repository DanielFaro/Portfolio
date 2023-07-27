import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ThemeProvider, createTheme, GlobalStyles } from "@mui/material";
import { blue } from "@mui/material/colors";

const root = ReactDOM.createRoot(document.getElementById("root"));

const theme = createTheme({
  palette: {
    primary: {
      main: "#1f1f1f",
      // main: "#E3E8F8",
      // main: "#018CFE",
      // main: "#3776FD",
      // main: "#0AC1FD",
      // light
      //dark
      //contrastText
    },
    secondary: {
      main: "rgba(2, 2, 2, 0.75)",
    },
    contrastThreshold: 4.5, //this meets the minimum contrast designed for accessibility per WCAG 2.1
  },
});

// this hoists GlobalStyles to a static constant,
// avoiding rerendering and ensuring the <style>
// tag won't recalculate on each render
const scrollGlobalStyles = (
  <GlobalStyles
    styles={{
      "*::-webkit-scrollbar": {
        width: "0.5em",
        backgroundColor: "black",
      },
      "*::-webkit-scrollbar-track": {
        "-webkit-box-shadow": "inset 0 0 6px rgba(0,0,0,0.00)",
      },
      "*::-webkit-scrollbar-thumb": {
        color: "black",
        backgroundColor: "gray",
        outline: "1px solid slategrey",
      },
    }}
  />
);

root.render(
  <React.StrictMode>
    {scrollGlobalStyles}
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
