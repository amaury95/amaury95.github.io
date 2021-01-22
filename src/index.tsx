import { CssBaseline, MuiThemeProvider } from "@material-ui/core";
import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import defaultTheme from "themes/default";
import Routes from "routes";
import StoreProvider from "store";

import "rsuite/dist/styles/rsuite-default.css";
import "index.css";

const App = () => {
  return (
    <MuiThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <Routes />
    </MuiThemeProvider>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <StoreProvider>
      <App />
    </StoreProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
