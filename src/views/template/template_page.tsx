import { Box, Container, Grid } from "@material-ui/core";
import Contact from "./components/contact";
import Header from "./components/header";
import Skills from "./components/skills";
import TimeLine from "./components/timeline";

export const TemplatePage = () => {
  return (
    <Box mx={10} my={10}>
      <Container style={{ backgroundColor: "green" }}>
        <Grid container>
          <Grid item xs={12} md={8} style={{ backgroundColor: "blue" }}>
            <Header />
            <TimeLine />
          </Grid>
          <Grid item xs={12} md={4} style={{ backgroundColor: "red" }}>
            <Contact />
            <Skills />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default TemplatePage;
