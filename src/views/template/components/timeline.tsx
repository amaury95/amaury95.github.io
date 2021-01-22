import React, { FunctionComponent, ReactNode } from "react";
import { Container, Typography } from "@material-ui/core";
import { Timeline, Icon } from "rsuite";
import { Education as Title } from "store/types";
import useData from "hooks/useData";
import StyledTimeline from "components/StyledTimeline";

interface TitleProps {
  icon?: ReactNode;
}

const TitleTag: FunctionComponent<TitleProps> = (props) => (
  <Timeline.Item dot={props.icon}>
    <Typography variant="h5">{props.children}</Typography>
  </Timeline.Item>
);

interface ItemProps<T> {
  item: T;
}

const EducationTag = ({ item: title }: ItemProps<Title>) => (
  <>
    <Typography variant="subtitle1">{title.title}</Typography>
    <Typography variant="subtitle2">
      {title.center} - {title.location}
    </Typography>
    <Typography variant="caption" component="span">
      {title.from} - {title.to}
    </Typography>

    <Typography>{title.description}</Typography>
  </>
);

const TimeLine = () => {
  const { template } = useData();
  console.log(template);
  return (
    <Container>
      <StyledTimeline>
        <TitleTag icon={<Icon icon="target" size="2x" />}>
          Professional Summary
        </TitleTag>
        <Timeline.Item>{template.summary}</Timeline.Item>

        {template.titles.length > 0 && (
          <TitleTag icon={<Icon icon="mortar-board" size="2x" />}>
            Education
          </TitleTag>
        )}
        {template.titles.map((t, k) => (
          <Timeline.Item>
            <EducationTag item={t} key={k} />
          </Timeline.Item>
        ))}

        <TitleTag icon={<Icon icon="briefcase" size="2x" />}>
          Work History
        </TitleTag>
      </StyledTimeline>
    </Container>
  );
};

export default TimeLine;
