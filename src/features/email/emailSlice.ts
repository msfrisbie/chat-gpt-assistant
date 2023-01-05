import { createSlice } from "@reduxjs/toolkit";
import { IEmailState } from "./interfaces";

const initialState: IEmailState = {
  emailLength: "Brief",
  emailStyle: "Formal",
  emailUrgency: "Non-urgent",
  emailTone: "Friendly",
};

const emailSlice = createSlice({
  name: "email",
  initialState,
  reducers: {
    setEmailLength(state, action: { payload: { emailLength: string } }) {
      state.emailLength = action.payload.emailLength;
    },
    setEmailStyle(state, action: { payload: { emailStyle: string } }) {
      state.emailStyle = action.payload.emailStyle;
    },
    setEmailUrgency(state, action: { payload: { emailUrgency: string } }) {
      state.emailUrgency = action.payload.emailUrgency;
    },
    setEmailTone(state, action: { payload: { emailTone: string } }) {
      state.emailTone = action.payload.emailTone;
    },
  },
});

export const { setEmailLength, setEmailStyle, setEmailUrgency, setEmailTone } =
  emailSlice.actions;

export default emailSlice.reducer;
