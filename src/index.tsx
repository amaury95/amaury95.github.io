import { CssBaseline, MuiThemeProvider } from "@material-ui/core";
import React, { useContext, useEffect } from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import defaultTheme from "themes/default";
import Routes from "routes";
import StoreProvider, { Store } from "store";
import { SetData } from "store/actions";
import data from "data/data.json";

const App = () => {
  const { state, dispatch } = useContext(Store);

  useEffect(() => {
    dispatch(SetData(data));
  }, []);

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
