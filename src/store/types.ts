import { Action } from "./actions";

export interface Data {
  profile: {
    name: string;
    profession: string;
    image: string;
    info: {
      email: string;
      phone: string;
      location: string;
    };
  };
  templates: {
    [template: string]: {
      title: string;
    };
  };
}

export interface State {
  theme: "light" | "dark";
  data: Data;
}

export interface StoreType {
  state: State;
  dispatch: React.Dispatch<Action>;
}
