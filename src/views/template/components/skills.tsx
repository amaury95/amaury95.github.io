import React from "react";
import ExtensionRoundedIcon from "@material-ui/icons/ExtensionRounded";
import List from "components/StyledList";
import useData from "hooks/useData";
import { Grid, LinearProgress, Typography } from "@material-ui/core";
import TitledContent from "components/TitledContent";

export default function Skills() {
  const { template } = useData();
  return (
    <TitledContent
      title="Skills"
      icon={<ExtensionRoundedIcon fontSize="large" />}
    >
      {Object.keys(template.skills).map((sk) => (
        <>
          <Typography variant="subtitle1" gutterBottom>
            {sk}
          </Typography>
          <List>
            {template.skills[sk].map((s, k) => (
              <li key={k}>
                <Grid
                  container
                  direction="row"
                  justify="flex-start"
                  alignItems="center"
                >
                  <Grid item xs={4}>
                    <Typography variant="subtitle2">{s.name}</Typography>
                  </Grid>
                  <Grid item xs={8}>
                    <LinearProgress
                      variant="determinate"
                      value={s.level * 100}
                    />
                  </Grid>
                </Grid>
              </li>
            ))}
          </List>
          <br />
        </>
      ))}
    </TitledContent>
  );
}
