import { useState } from "react";
import { useDispatch } from "react-redux";
import { decrement, increment } from "./redux/ducks/counter";

const Counter = (props) => {
  const { name } = props;
  const dispatch = useDispatch();
  const [voute, setVoute] = useState(0);
  const handleIncrement = () => {
    dispatch(increment());
    setVoute(voute + 1);
  };
  const handleDecrement = () => {
    dispatch(decrement());
    setVoute(voute - 1);
  };
  return (
    <div style={{ background: "gray", margin: "10px", padding: "30px" }}>
      <h2>{name}</h2>
      <h6>{`voute :${voute}`}</h6>
      <div style={{ disPlay: "flex", justifyContent: "center" }}>
        <button onClick={handleIncrement}>Increment </button>
        <button onClick={handleDecrement}>Decrement</button>
      </div>
    </div>
  );
};

export default Counter;
