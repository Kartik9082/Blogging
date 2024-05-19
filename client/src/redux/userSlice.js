// redux/userSlice.js
import { createSlice } from "@reduxjs/toolkit";

const token = localStorage.getItem("token")
  ? JSON.parse(localStorage.getItem("token"))
  : null;

export const userSlice = createSlice({
  name: "user",
  initialState: {
    isLoggedIn: !!token,
    userData: token ? { token } : null,
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
      localStorage.removeItem("token");
    },
    getCurrentUser: (state, action) => {
      state.getCurrentUser = action.payload;
    },
  },
});

export const { login, logout, getCurrentUser } = userSlice.actions;

export const selectUser = (state) => state.user;

export default userSlice.reducer;
