import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [bgColor, setBgColor] = useState("black");

  useEffect(() => {
    console.log(bgColor);
  }, [bgColor]);

  return (
    <>
      <div
        className="relative w-screen h-screen flex justify-center"
        style={{ backgroundColor: bgColor }}
      >
        <div className="Options absolute w-[70%] bottom-16 bg-white flex justify-between">
          <button onClick={() => setBgColor("black")}>Black</button>
          <button onClick={() => setBgColor("red")}>Red</button>
          <button onClick={() => setBgColor("blue")}>Blue</button>
          <button onClick={() => setBgColor("green")}>Green</button>
          <button onClick={() => setBgColor("yellow")}>Yellow</button>
          <button onClick={() => setBgColor("purple")}>Purple</button>
        </div>
      </div>
    </>
  );
}

export default App;
