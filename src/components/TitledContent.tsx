import { Box } from "@material-ui/core";
import React, { FunctionComponent } from "react";
import IconTitle from "./IconTitle";

interface Props {
  title: string;
  icon: React.ReactNode;
}

const TitledContent: FunctionComponent<Props> = (props) => {
  return (
    <React.Fragment>
      <IconTitle text={props.title}>{props.icon}</IconTitle>
      <Box mx={4} my={2}>
        {props.children}
      </Box>
    </React.Fragment>
  );
};

export default TitledContent;
