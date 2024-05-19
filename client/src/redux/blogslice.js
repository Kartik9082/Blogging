import { createSlice } from "@reduxjs/toolkit";

const blogSlice = createSlice({
  name: "blog",
  initialState: {
    blog: [],
    singleBlog: [],
  },
  reducers: {
    getBlog: (state, action) => {
      state.blog = action.payload;
    },
    getSingleBlog: (state, action) => {
      state.singleBlog = action.payload;
    },
  },
});

export const { getBlog, getBlogSuccess, getBlogError, getSingleBlog } =
  blogSlice.actions;

export default blogSlice.reducer;
