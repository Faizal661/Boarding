import { createContext, useContext, useReducer } from "react";

const initialState = {
  count: 0,
};

const reducer = (prevState, action) => {
  switch (action.type) {
    case "inc":
      return { ...prevState, count: prevState.count + 1 };
    case "dec":
      return { ...prevState, count: prevState.count - 1 };
    case "reset":
      return initialState;
    default:
      return;
  }
};

const counterContext = createContext();

const CounterProvider = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <counterContext.Provider value={{ state, dispatch }}>
      <Counter />
    </counterContext.Provider>
  );
};

const Counter = () => {
  const { state, dispatch } = useContext(counterContext);

  return (
    <div>
      <p>{state.count}</p>
      <button type="button" onClick={() => dispatch({ type: "inc" })}>
        increment
      </button>
      <button type="button" onClick={() => dispatch({ type: "dec" })}>
        decrement
      </button>
      <button type="button" onClick={() => dispatch({ type: "reset" })}>
        reset
      </button>
    </div>
  );
};

export default CounterProvider;
