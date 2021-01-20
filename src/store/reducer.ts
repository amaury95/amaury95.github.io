import { State } from "./types";
import { Action, TOGGLE_THEME, SET_DATA, IDataAction } from "./actions";

export const reducer: React.Reducer<State, Action> = (state, action) => {
  switch (action.type) {
    // DATA
    case SET_DATA: {
      const { payload: data } = action as IDataAction;
      return { ...state, data };
    }

    // THEME
    case TOGGLE_THEME: {
      return { ...state, theme: state.theme === "light" ? "dark" : "light" };
    }

    // Nothing matched
    default: {
      return state;
    }
  }
};
