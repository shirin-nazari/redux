import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todos",
  initialState: [
    { id: 1, txt: "mlik tea" },
    { id: 2, txt: "go shopping (:" },
    { id: 3, txt: "buy book (:" },
  ],
  reducers: {
    add(state, { payload }) {
      state.push(payload);
    },
    del(state, { payload }) {
      return (state = state.filter(({ id }) => id !== payload));
    },
  },
});

export const { add, del } = todoSlice.actions;
export const selectTodos = ({ todos }) => todos;
export default todoSlice.reducer;
