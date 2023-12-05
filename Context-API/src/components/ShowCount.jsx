import React, { useContext } from "react";
import CounterContex from "../context/CounterContex";

function ShowCount() {
  const { count } = useContext(CounterContex);
  return <div>{count}</div>;
}

export default ShowCount;
