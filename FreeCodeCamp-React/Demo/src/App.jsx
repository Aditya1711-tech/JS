import React, { useState } from "react";
import "./App.css";
import Parent from "./components/Parent";
import ParentWithData from "./components/ParentWithData";
import Event from "./components/Event";
import WindowSize from "./components/WindowSize";
import ContitionalRender from "./components/ContitionalRender";
import Fetching from "./components/Fetching";

function App() {
  return (
    <h3>
      {/* <Parent /> */}
      {/* <ParentWithData /> */}
      {/* <Event /> */}
      {/* <WindowSize /> */}
      {/* <ContitionalRender /> */}
      <Fetching />
    </h3>
  );
}

export default App;
