import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import todosReducer from "../features/todos/todosSlice";
import postsReducer from "../features/posts/postsSlice";
import usersSlice from "../features/users/usersSlice";
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    todos: todosReducer,
    posts: postsReducer,
    users: usersSlice,
  },
});
