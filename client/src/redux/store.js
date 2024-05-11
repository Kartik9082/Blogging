import { configureStore } from "@reduxjs/toolkit";
import blogReducer from "./blogslice";

const store = configureStore({
  reducer: {
    blogs: blogReducer,
  },
});

export default store;
