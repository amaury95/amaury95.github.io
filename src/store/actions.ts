import { Data } from "./types";

// Action interface
export interface IAction {
  type: string;
}

// ************
// DATA ACTIONS
// ************
export const SET_DATA = "set_data";

export interface IDataAction extends IAction {
  payload: Data;
}

export function SetData(payload: Data): IDataAction {
  return { type: SET_DATA, payload };
}

// *************
// THEME ACTIONS
// *************
export const TOGGLE_THEME = "toggle_theme";

export function ToggleTheme(): IAction {
  return { type: TOGGLE_THEME };
}

// *****************
// UNION TYPE ACTION
// *****************
export type Action = IAction | IDataAction;
