import React, { useEffect } from "react";

function WindowSize() {
  const [size, setSize] = React.useState(window.innerWidth);
  useEffect(() => {
    setSize(size);
  }, [size]);
  return (
    <div>
      <h3>Current width is: {size} px</h3>
    </div>
  );
}

export default WindowSize;
