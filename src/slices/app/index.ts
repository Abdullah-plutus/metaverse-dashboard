import { createSlice } from "@reduxjs/toolkit";
import { IApp } from "../../interfaces";

const appSlice = createSlice({
  name: "app",
  initialState: {
    currentUser: { isAuthorized: false },
    isSignup: false,
  } as IApp,
  reducers: {
    setCurrentUser: (state, action) => {
      state.currentUser = action.payload;
    },

    setIsSignup: (state, action) => {
      state.isSignup = action.payload;
    },
  },
});

export const { setCurrentUser, setIsSignup } = appSlice.actions;

export default appSlice.reducer;
