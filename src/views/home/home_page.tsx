import React, { useContext } from "react";
import { Store } from "store";
import { Link } from "react-router-dom";

export const Home = () => {
  const { state } = useContext(Store);
  return (
    <div>
      {Object.keys(state.data.templates).map((key) => (
        <Link to={key}>{state.data.templates[key].profession}</Link>
      ))}
    </div>
  );
};

export default Home;
