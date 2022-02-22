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
    del(state, { payload: index }) {
      // del(state, { payload }) {
      // return (state = state.filter(({ id }) => id !== payload));
      // slove deffernt
      state.splice(index, 1);
    },
    patch(state, { payload: { index, txt } }) {
      state[index].txt = txt;

      // const newTodo = {
      //   index,
      //   txt,
      // };
      // return [...state.splice(0, index), newTodo, ...state.splice(index + 1)];
    },
    delProp(state, { payload: { index, prop } }) {
      delete state[index][prop];
    },
  },
});

export const { add, del, patch, delProp } = todoSlice.actions;
export const selectTodos = ({ todos }) => todos;
export default todoSlice.reducer;
