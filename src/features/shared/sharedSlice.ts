import { createSlice } from "@reduxjs/toolkit";
import { ISharedState } from "./interfaces";

let defaultTheme: "light" | "dark" = "light";
if (
  window.matchMedia &&
  window.matchMedia("(prefers-color-scheme: dark)").matches
) {
  defaultTheme = "dark";
}

const initialState: ISharedState = {
  theme: defaultTheme,
  widgetId: null
};

const sharedSlice = createSlice({
  name: "shared",
  initialState,
  reducers: {
    setTheme(state, action: { payload: { theme: "light" | "dark" } }) {
      state.theme = action.payload.theme;
    },
    setWidgetId(state, action: { payload: { widgetId: string } }) {
      state.widgetId = action.payload.widgetId;
    },
  },
});

export const { setTheme, setWidgetId } = sharedSlice.actions;

export default sharedSlice.reducer;
