import { createSlice } from "@reduxjs/toolkit";

const blogSlice = createSlice({
  name: "blog",
  initialState: {
    blog: [],
  },
  reducers: {
    getBlog: (state, action) => {
      state.blog = action.payload;
    },
  },
});

export const { getBlog, getBlogSuccess, getBlogError } = blogSlice.actions;

export default blogSlice.reducer;
