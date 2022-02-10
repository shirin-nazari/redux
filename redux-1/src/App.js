import "./App.css";
import Counter from "./Counter";
import { useSelector } from "react-redux";
function App() {
  const count = useSelector((state) => state.counter.count);
  const vouter = ["shirin", "bahar", "maryam", "bani", "benyamin"];
  return (
    <div style={{ margin: "20px" }}>
      <h1>Redux made easy</h1>
      <h3>{`count ${count}`}</h3>
      {vouter.map((voute, index) => (
        <Counter name={voute} key={index} />
      ))}
    </div>
  );
}

export default App;
