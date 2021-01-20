import { Avatar, Grid, makeStyles, Typography } from "@material-ui/core";
import React, { FunctionComponent } from "react";

const useStyles = makeStyles((theme) => ({
  avatar: {
    width: theme.spacing(6.5),
    height: theme.spacing(6.5),
  },
}));

interface Props {
  text: string;
}

const IconTitle: FunctionComponent<Props> = (props) => {
  const classes = useStyles();
  return (
    <Grid container alignItems="center" justify="flex-start" spacing={2}>
      <Grid item>
        <Avatar className={classes.avatar}>{props.children}</Avatar>
      </Grid>
      <Grid item>
        <Typography variant="h5">{props.text}</Typography>
      </Grid>
    </Grid>
  );
};

export default IconTitle;
