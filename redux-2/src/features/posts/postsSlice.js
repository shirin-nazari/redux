import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getPosts = createAsyncThunk(
  "posts/getPosts",
  async ({ limit }, { dispatch, getState }) => {
    const { todos } = getState();
    console.log({ todos });
    return fetch(
      `https://jsonplaceholder.typicode.com/posts?_limit=${limit}`
    ).then((res) => res.json());
  }
);

const postsSlice = createSlice({
  name: "posts",
  initialState: {
    list: [],
    status: null,
  },
  extraReducers: {
    [getPosts.pending]: (state, actions) => {
      state.status = "Loading ...";
    },
    [getPosts.fulfilled]: (state, { payload }) => {
      state.list = payload;
      state.status = "success";
    },
    [getPosts.rejected]: (state, actions) => {
      state.status = "falid ):";
    },
  },
});

export default postsSlice.reducer;
