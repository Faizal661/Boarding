import { useReducer } from "react";

const initialState = 0;

const reducer = (state: number, action: string) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return initialState;
    default:
      return state;
  }
};

const UseReducer = () => {
  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <div style={{ padding: "10px", border: "1px solid", margin: "2px" }}>
      <h1>UseReducer</h1>
      <h1>count : {count}</h1>
      <button onClick={() => dispatch("increment")}>INC</button>
      <button onClick={() => dispatch("decrement")}>DEC</button>
      <button onClick={() => dispatch("reset")}>RESET</button>
    </div>
  );
};

export default UseReducer;

