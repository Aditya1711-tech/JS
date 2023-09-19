import React, { useEffect, useState } from "react";

function ContitionalRender() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const id = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearInterval(id);
  }, []);
  if (isLoading) {
    return <h3>Please wait .....</h3>;
  }
  return <h3>Data loaded successFully</h3>;
}

export default ContitionalRender;
