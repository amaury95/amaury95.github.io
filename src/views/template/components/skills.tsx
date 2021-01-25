import React, { FunctionComponent } from "react";
import ExtensionRoundedIcon from "@material-ui/icons/ExtensionRounded";
import List from "components/StyledList";
import useData from "hooks/useData";
import { Grid, LinearProgress, Typography } from "@material-ui/core";
import TitledContent from "components/TitledContent";
import { Skill } from "store/types";

interface SkillTopicProps {
  title: string;
}

const SkillTopic: FunctionComponent<SkillTopicProps> = (props) => (
  <>
    <Typography variant="subtitle1" gutterBottom>
      {props.title}
    </Typography>
    <List>{props.children}</List>
    <br />
  </>
);

interface SkillTagProps {
  item: Skill;
}

const SkillTag = (props: SkillTagProps) => (
  <li>
    <Grid container direction="row" justify="flex-start" alignItems="center">
      <Grid item xs={5}>
        <Typography variant="subtitle2">{props.item.name}</Typography>
      </Grid>
      <Grid item xs={7}>
        <LinearProgress variant="determinate" value={props.item.level * 100} />
      </Grid>
    </Grid>
  </li>
);

export default function Skills() {
  const { template } = useData();
  return (
    <TitledContent
      title="Skills"
      icon={<ExtensionRoundedIcon fontSize="large" />}
    >
      {Object.keys(template.skills).map((sk) => (
        <SkillTopic title={sk} key={sk}>
          {template.skills[sk].map((s, k) => (
            <SkillTag item={s} key={k} />
          ))}
        </SkillTopic>
      ))}
    </TitledContent>
  );
}
