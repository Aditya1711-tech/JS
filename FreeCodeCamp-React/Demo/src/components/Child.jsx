import React from "react";

function Child(props) {
  function incrementOne() {
    props.setCount((prevCnt) => prevCnt + 1);
  }
  function decrementOne() {
    props.setCount((prevCnt) => prevCnt - 1);
  }
  function incrementFive() {
    incrementOne();
    incrementOne();
    incrementOne();
    incrementOne();
    incrementOne();
  }
  function decrementFive() {
    decrementOne();
    decrementOne();
    decrementOne();
    decrementOne();
    decrementOne();
  }
  return (
    <div>
      This is Child Component
      <h3>Count from child is {props.count}</h3>
      <button
        onClick={() => {
          incrementOne();
        }}
      >
        incrementOne
      </button>
      <button
        onClick={() => {
          decrementOne();
        }}
      >
        decrementOne
      </button>
      <button
        onClick={() => {
          decrementFive();
        }}
      >
        decrementFive
      </button>
      <button
        onClick={() => {
          incrementFive();
        }}
      >
        incrementFive
      </button>
    </div>
  );
}

export default Child;
