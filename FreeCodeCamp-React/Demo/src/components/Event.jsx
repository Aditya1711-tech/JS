import React from "react";

function Event() {
  function handleClickWithArg(params) {
    console.log(params);
  }
  function handleClickWithoutArg() {
    console.log("Poojan");
  }
  return (
    <div>
      <button type="button" onClick={handleClickWithoutArg}>
        Button without arguments
      </button>
      <br />
      <br />
      {/* <button type="button" onClick={handleClickWithArg("Aditya")}>
        Button with arguments
      </button> */}
      {/* Insted of above code we can use arrow function */}
      <button type="button" onClick={() => handleClickWithArg("Aditya")}>
        Button with arguments
      </button>
    </div>
  );
}

export default Event;
