import React, { useState } from "react";
import Child from "./Child";

function Parent() {
  var [count, setCount] = useState(0);
  return (
    <div>
      <Child count={count} setCount={setCount} />
      This is Parent Component
      <h3>Counter is {count}</h3>
    </div>
  );
}

export default Parent;
