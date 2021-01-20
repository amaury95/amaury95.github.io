import React, { FunctionComponent, ReactNode } from "react";
import { styled, Typography } from "@material-ui/core";
import { Timeline, Icon } from "rsuite";

const StyledTimeline = styled(Timeline)(({ theme }) => ({
  marginTop: 50,
  "& .rs-timeline-item-dot::before": {
    backgroundColor: theme.palette.primary.light,
  },
  "& .rs-timeline-item-custom-dot .rs-icon": {
    borderWidth: 2,
    borderStyle: "solid",
    color: theme.palette.primary.light,
    background: theme.palette.background.default,
    top: 0,
    left: -2,
    width: 40,
    height: 40,
    fontSize: 18,
    paddingTop: 9,
    marginLeft: -13,
    borderRadius: "50%",
    position: "absolute",
  },
  "& .rs-timeline-item-content": {
    marginLeft: 24,
  },
  "& h5": {
    paddingTop: 10,
  },
}));

interface TitleProps {
  icon?: ReactNode;
}

const Title: FunctionComponent<TitleProps> = (props) => (
  <Timeline.Item dot={props.icon}>
    <Typography variant="h5">{props.children}</Typography>
  </Timeline.Item>
);

const TimeLine = () => {
  return (
    <StyledTimeline>
      <Title icon={<Icon icon="target" size="2x" />}>Professional Summary</Title>
      <Timeline.Item>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima hic voluptate error eos, consectetur voluptatum
        atque perferendis aperiam aliquid deleniti ab nihil dolor reiciendis sapiente quod debitis, labore autem
        excepturi!
      </Timeline.Item>

      <Title icon={<Icon icon="mortar-board" size="2x" />}>Education</Title>

      <Title icon={<Icon icon="briefcase" size="2x" />}>Work History</Title>
    </StyledTimeline>
  );
};

export default TimeLine;
