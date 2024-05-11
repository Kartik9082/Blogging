import { createSlice } from "@reduxjs/toolkit";

const blogSlice = createSlice({
  name: "blog",
  initialState: {
    blog: [],
    loading: false,
    error: null,
  },
  reducers: {
    getBlog: (state) => {
      state.loading = true;
    },
    getBlogSuccess: (state, action) => {
      state.loading = false;
      state.blog = action.payload;
    },
    getBlogError: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { getBlog, getBlogSuccess, getBlogError } = blogSlice.actions;

export default blogSlice.reducer;
