import React from "react";
import { State, StoreType } from "./types";
import { reducer } from "./reducer";
import data from "data/data.json";

const initialState = {
  theme: "dark",
  data,
} as State;

export const Store = React.createContext({} as StoreType);

const StoreProvider: React.FunctionComponent = (props) => {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  const value = { state, dispatch };
  return <Store.Provider value={value}>{props.children}</Store.Provider>;
};

export default StoreProvider;
