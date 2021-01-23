import React, { useContext } from "react";
import { Store } from "store";
import { Link } from "react-router-dom";

export const Home = () => {
  const {
    state: {
      data: { templates },
    },
  } = useContext(Store);

  return (
    <div>
      {Object.keys(templates).map((key) => (
        <Link to={key}>{templates[key].profession}</Link>
      ))}
    </div>
  );
};

export default Home;
