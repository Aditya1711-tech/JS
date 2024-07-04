import { useState } from "react";
import "./App.css";
import Counter from "./components/Counter";
function App() {
  const [count, setCount] = useState(0);

  function updateCounter() {
    setCount((prev) => prev + 1);
  }

  return (
    <>
      <Counter count={count} updateCounter={updateCounter} />
    </>
  );
}

export default App;
