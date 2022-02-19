import { useSelector } from "react-redux";
import { selectTodos } from "./todosSlice";
export default function Todos() {
  const todos = useSelector(selectTodos);
  return (
    <ol>
      {todos.map((todo, index) => (
        <li key={index}>
          {todo}
          {/* for delete */}
          <i className="fa-solid fa-trash-can"></i>
        </li>
      ))}
    </ol>
  );
}
