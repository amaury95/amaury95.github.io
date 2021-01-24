import { createMuiTheme } from "@material-ui/core";

const PRIMARY_MAIN = "#373D48";
const SECONDARY_MAIN = "#D7D7D7";
const TEXT_COLOR = "#9B9B9B";

export default createMuiTheme({
  typography: {
    fontFamily: "Montserrat, sans-serif",
    allVariants: {
      color: PRIMARY_MAIN,
    },
    h2: {
      fontWeight: "bolder",
    },
    h4: {
      fontWeight: "lighter",
    },
    h5: {
      fontWeight: "bold",
      fontSize: 30,
    },
    subtitle1: {
      fontWeight: "bold",
      fontSize: 20,
    },
    subtitle2: {
      color: TEXT_COLOR,
    },
    body1: {
      fontWeight: "bold",
      color: TEXT_COLOR,
    },
    body2: {
      fontSize: 15,
      color: TEXT_COLOR,
    },
    caption: {
      color: TEXT_COLOR,
    },
  },
  palette: {
    primary: { main: PRIMARY_MAIN },
    secondary: { main: SECONDARY_MAIN },
  },
});
