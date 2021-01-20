import { useContext } from "react";
import { useParams } from "react-router-dom";
import { Store } from "store";

interface Params {
  title: string;
}

export default function useData() {
  const { title } = useParams<Params>();
  const { state } = useContext(Store);

  const { profile } = state.data;
  const template = state.data.templates[title];

  return { profile, template };
}
