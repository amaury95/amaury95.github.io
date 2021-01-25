import React, { useContext } from "react";
import { Store } from "store";
import { Link } from "react-router-dom";

export const Home = () => {
  const { state } = useContext(Store);

  const { name, profession } = state.data.profile;
  const { templates } = state.data;

  document.title = `${name} - ${profession}`;

  return (
    <div>
      {Object.keys(templates).map((key) => (
        <Link to={`/cv/${key}`}>{templates[key].profession}</Link>
      ))}
    </div>
  );
};

export default Home;
