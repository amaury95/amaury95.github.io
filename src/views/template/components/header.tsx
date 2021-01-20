import { Avatar, Grid, makeStyles, Typography } from "@material-ui/core";
import useData from "hooks/useData";
import React, { useContext } from "react";
import { Store } from "store";

const useStyles = makeStyles((theme) => ({
  avatar: {
    width: theme.spacing(20),
    height: theme.spacing(20),
  },
}));

export default function Header() {
  const classes = useStyles();
  const { profile, template } = useData();

  return (
    <Grid container alignItems="center" justify="flex-start" spacing={8}>
      <Grid item>
        <Avatar alt={profile.name} src={profile.image} className={classes.avatar} />
      </Grid>
      <Grid>
        <Typography variant="h2">{profile.name}</Typography>
        <Typography variant="h4">{template.title}</Typography>
      </Grid>
    </Grid>
  );
}
