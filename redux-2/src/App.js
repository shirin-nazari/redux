import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
// get todo from todo reducer
import Todos from "./features/todos/Todos.js";
import Posts from "./features/posts/Posts";
import Users from "./features/users/Users.js";

import { add } from "./features/todos/todosSlice";

import "./App.css";

function App() {
  const [todoTxt, setTodoTxt] = useState("");

  const dispatch = useDispatch();
  return (
    <div className="main">
      <div className="container">
        <header>
          <nav className="nav-bar">
            <h1>React Radux TODO (:</h1>
          </nav>
        </header>
        <main>
          <div className="header">
            <h2>Add Todo :</h2>
          </div>
          <form>
            <label htmlFor="">What you want to do ?</label>
            <input
              type="text"
              name="task"
              value={todoTxt}
              onChange={(e) => setTodoTxt(e.target.value)}
            />
            <button
              onClick={(e) => {
                e.preventDefault();
                // { txt: todoTxt, id: Date.now().toString() }
                dispatch(add({ txt: todoTxt, id: Date.now().toString() }));
                // for empty input
                setTodoTxt("");
              }}
            >
              {" "}
              create
            </button>
          </form>
        </main>
        {/* card todo */}
        <div className="todos">
          <Todos />
          <Posts />
          <Users />
        </div>
      </div>
    </div>
  );
}

export default App;
