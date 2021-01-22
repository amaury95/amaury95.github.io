import { Box, Container, Grid } from "@material-ui/core";
import Contact from "./components/contact";
import Header from "./components/header";
import Skills from "./components/skills";
import TimeLine from "./components/timeline";

export const TemplatePage = () => (
  <Box mx={10} my={10}>
    <Container>
      <Grid container>
        <Grid item xs={12} md={8} justify="flex-start">
          <Header />
          <TimeLine />
        </Grid>
        <Grid item xs={12} md={4}>
          <Contact />
          <br />
          <br />
          <Skills />
        </Grid>
      </Grid>
    </Container>
  </Box>
);

export default TemplatePage;
