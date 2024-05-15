import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    isLoggedIn: false,
    userData: null,
    getCurrentUser: {},
  },
  reducers: {
    login: (state, action) => {
      state.isLoggedIn = true;
      state.userData = action.payload;
    },
    logout: (state) => {
      state.isLoggedIn = false;
      state.userData = null;
    },
    getCurrentUser: (state, action) => {
      state.getCurrentUser = action.payload;
    },
  },
});

export const { login, logout, getCurrentUser } = userSlice.actions;

export const selectUser = (state) => state.user;

export default userSlice.reducer;
