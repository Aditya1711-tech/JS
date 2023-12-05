import React, { useContext } from "react";
import CounterContex from "../context/CounterContex";

function UpdateCount() {
  const { setCount } = useContext(CounterContex);
  const incrementCount = () => {
    setCount((prevCnt) => prevCnt + 1);
  };
  const decrementCount = () => {
    setCount((prevCnt) => prevCnt - 1);
  };
  const incrementFive = () => {
    for (let i = 0; i < 5; i++) {
      incrementCount();
    }
  };
  return (
    <div>
      <button onClick={() => incrementCount()}>Increment</button>
      <button onClick={() => decrementCount()}>Decrement</button>
      <button onClick={() => incrementFive()}>IncrementFive</button>
    </div>
  );
}

export default UpdateCount;
