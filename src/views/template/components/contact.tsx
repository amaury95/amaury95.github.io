import React, { FunctionComponent } from "react";
import PersonRoundedIcon from "@material-ui/icons/PersonRounded";
import { Typography, Link } from "@material-ui/core";
import useData from "hooks/useData";
import TitledContent from "components/TitledContent";

const Title: FunctionComponent = (props) => (
  <Typography variant="subtitle1">{props.children}</Typography>
);

const Content: FunctionComponent = (props) => (
  <Typography variant="subtitle2">{props.children}</Typography>
);

export default function Contact() {
  const { profile } = useData();
  return (
    <TitledContent
      title="Contact"
      icon={<PersonRoundedIcon fontSize="large" />}
    >
      <Title>Location</Title>
      <Content>{profile.info.location}</Content>

      <br />
      <Title>Email</Title>
      <Content>{profile.info.email}</Content>

      <br />
      <Title>Phone</Title>
      <Content>{profile.info.phone}</Content>

      <br />
      <Title>Website</Title>
      <Link href={profile.info.website.ref} target="_blank" rel="noreferrer">
        <Content>{profile.info.website.title}</Content>
      </Link>
    </TitledContent>
  );
}
