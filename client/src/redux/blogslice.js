import { createSlice } from "@reduxjs/toolkit";

const blogSlice = createSlice({
  name: "blog",
  initialState: {
    blog: [],
    singleBlog: {},
    comments: [],
  },
  reducers: {
    getBlog: (state, action) => {
      state.blog = action.payload;
    },
    getSingleBlog: (state, action) => {
      state.singleBlog = action.payload;
    },
    addComment: (state, action) => {
      state.singleBlog.comments = action.payload;
    },
  },
});

export const {
  getBlog,
  getBlogSuccess,
  getBlogError,
  getSingleBlog,
  addComment,
} = blogSlice.actions;

export default blogSlice.reducer;
