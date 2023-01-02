import { SharedAction } from "./consts";

export interface ISharedState {
  theme: "light" | "dark";
}

export interface ISharedAction {
  type: SharedAction;
  payload?: any;
}
