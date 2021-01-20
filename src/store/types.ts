import { Action } from "./actions";

export interface Education {
  from: string;
  to: string;
  title: string;
  center: string;
  location: string;
  description: string;
}

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
      profession: string;
      summary: string;
      titles: Education[];
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
