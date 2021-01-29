import React, { FunctionComponent } from "react";
import { Grid, IconButton } from "@material-ui/core";

import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import TwitterIcon from "@material-ui/icons/Twitter";

interface SocialLinkProps {
  link: string;
}

const SocialLink: FunctionComponent<SocialLinkProps> = ({ link, children }) => (
  <Grid item>
    <a href={link} target="_blank" rel="noreferrer">
      <IconButton color="primary">{children}</IconButton>
    </a>
  </Grid>
);

// const useStyles = makeStyles({
//   appbar: { top: "auto", bottom: 0, backgroundColor: "transparent" },
// });

const Footer = () => {
  // const classes = useStyles();
  return (
    <Grid
      container
      direction="row"
      justify="center"
      alignItems="flex-start"
      spacing={8}
    >
      <SocialLink link="https://github.com/amaury95">
        <GitHubIcon fontSize="large" />
      </SocialLink>
      <SocialLink link="https://www.linkedin.com/in/amaury95/">
        <LinkedInIcon fontSize="large" />
      </SocialLink>
      <SocialLink link="https://twitter.com/amaurydcab">
        <TwitterIcon fontSize="large" />
      </SocialLink>
    </Grid>
  );
};

export default Footer;
