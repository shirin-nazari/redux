import { useSelector } from "react-redux";
import { selectTodos } from "./todosSlice";
export default function Todos() {
  const todos = useSelector(selectTodos);
  return todos.map((todo) => todo);
}
