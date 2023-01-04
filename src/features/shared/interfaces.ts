import { SharedAction } from "./consts";

export interface ISharedState {
  theme: "light" | "dark";
  widgetId: string | null;
}

export interface ISharedAction {
  type: SharedAction;
  payload?: any;
}
