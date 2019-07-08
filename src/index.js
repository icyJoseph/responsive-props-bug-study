import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";

import App from "./App";
import breakpoints from "./breakpoints";
import "./styles.css";

const theme = { responsiveProps: { breakpoints } };

const ThemedApp = () => (
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>
);

const rootElement = document.getElementById("root");
ReactDOM.render(<ThemedApp />, rootElement);
