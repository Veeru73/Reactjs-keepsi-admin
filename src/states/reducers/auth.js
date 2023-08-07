import { createSlice } from "@reduxjs/toolkit";

const initialState = { isLoggedIn: localStorage.getItem("login") === "1" };

const AuthSlice = createSlice({
  initialState,
  name: "auth",
  reducers: {
    setLoginState(state, action) {
      state.isLoggedIn = action.payload;
    },
  },
});

export const authActions = AuthSlice.actions;
export default AuthSlice.reducer;
