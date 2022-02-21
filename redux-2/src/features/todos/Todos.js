import { useSelector, useDispatch } from "react-redux";
import { selectTodos, del, patch, delProp } from "./todosSlice";
export default function Todos(props) {
  const todos = useSelector(selectTodos);
  const dispatch = useDispatch();
  return (
    <ol>
      {todos.map(({ txt, id }, index) => (
        <li key={id}>
          {txt}
          {/* for delete */}
          <i
            className="fa-solid fa-circle-minus"
            onClick={() => {
              dispatch(delProp({ index, prop: "txt" }));
              // <input type="text" />;
            }}
          ></i>
          <i
            className="fa-solid fa-pencil"
            onClick={() => {
              dispatch(patch({ index, txt: props }));
              <input type="text" />;
            }}
          ></i>
          <i
            className="fa-solid fa-trash-can"
            // slove differnet
            onClick={() => dispatch(del(index))}
            // onClick={() => dispatch(del(id))}
          ></i>
        </li>
      ))}
    </ol>
  );
}
