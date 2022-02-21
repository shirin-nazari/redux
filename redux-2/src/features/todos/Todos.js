import { useSelector, useDispatch } from "react-redux";
import { selectTodos, del } from "./todosSlice";
export default function Todos() {
  const todos = useSelector(selectTodos);
  const dispatch = useDispatch();
  return (
    <ol>
      {todos.map(({ txt, id }) => (
        <li key={id}>
          {txt}
          {/* for delete */}
          <i
            className="fa-solid fa-trash-can"
            onClick={() => dispatch(del(id))}
          ></i>
        </li>
      ))}
    </ol>
  );
}
