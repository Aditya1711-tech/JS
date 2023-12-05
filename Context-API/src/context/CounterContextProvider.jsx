import React, { useState } from "react";

import CounterContex from "./CounterContex";

const CounterContextProvider = ({ children }) => {
  const [count, setCount] = useState(0);
  return (
    <CounterContex.Provider value={{ count, setCount }}>
      {children}
    </CounterContex.Provider>
  );
};

export default CounterContextProvider;
