import { styled } from "@material-ui/core";

export default styled("ul")(({ theme }) => ({
  paddingLeft: 20,
  listStyleType: "disc",
  "& li::marker": {
    color: theme.palette.secondary.main,
    fontSize: "150%",
    verticalAlign: "middle",
  },
}));
