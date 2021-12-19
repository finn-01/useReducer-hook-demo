import "./styles.css";
import { useState, useReducer } from "react";

//Gia tri khoi tao
const initState = 0;

//Hang so
const UP_ACTION = "up";
const DOWN_ACTIOn = "down";

//reducer
const reducer = (state, action) => {
  switch (action) {
    case UP_ACTION:
      return state + 1;
    case DOWN_ACTIOn:
      return state - 1;
    default:
      throw new Error("Invalid");
  }
};
export default function App() {
  const [count, dispatch] = useReducer(reducer, initState);
  return (
    <div className="App">
      <h1>{count}</h1>
      <button onClick={() => dispatch(UP_ACTION)}>Up</button>
      <button onClick={() => dispatch(DOWN_ACTIOn)}>Down</button>
    </div>
  );
}
