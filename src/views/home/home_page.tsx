import React, { useContext } from "react";
import { Store } from "store";
import { Link } from "react-router-dom";
import { Container, Typography } from "@material-ui/core";
import Footer from "./components/Footer";
import EmploymentCard from "./components/EmploymentCard";
import Divider from "./components/Divider";

export const Home = () => {
  const { state } = useContext(Store);

  const { name, profession } = state.data.profile;
  const { templates } = state.data;

  document.title = `${name} - ${profession}`;

  return (
    <>
      <Container>
        <Divider />
        <Typography variant="h4" paragraph>
          Hello, my name is <b>{name}</b> and I am a <b>{profession}</b>
        </Typography>

        <Typography variant="h4" paragraph>
          You can hire me as:
        </Typography>
        <Divider />

        {Object.keys(templates).map((key) => (
          <Link to={`/cv/${key}`}>
            <EmploymentCard text={templates[key].profession} />
          </Link>
        ))}

        <Divider />
        <Footer />
      </Container>
    </>
  );
};

export default Home;
