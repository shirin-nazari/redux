import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { selectTodos, del, patch, delProp } from "./todosSlice";
export default function Todos(props) {
  const todos = useSelector(selectTodos);
  const dispatch = useDispatch();
  const [getNewtxt, setGetNewtxt] = useState("");
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
              dispatch(patch({ index, txt: getNewtxt }));
            }}
          >
            <input type="text" onChange={(e) => setGetNewtxt(e.target.value)} />
          </i>
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
