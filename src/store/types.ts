import { Action } from "./actions";

export interface Education {
  from: string;
  to?: string;
  title: string;
  center: string;
  location: string;
  description: string;
}

export interface Job {
  title: string;
  center: string;
  location: string;
  from: string;
  to?: string;
  description: string;
  details: string[];
}

export interface Skill {
  name: string;
  level: number;
}

export interface Data {
  profile: {
    name: string;
    image: string;
    profession: string;
    info: {
      email: string;
      phone: string;
      location: string;
      website: {
        title: string;
        ref: string;
      };
    };
  };
  templates: {
    [template: string]: {
      profession: string;
      summary: string;
      titles: Education[];
      experience: Job[];
      skills: {
        [field: string]: Skill[];
      };
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
