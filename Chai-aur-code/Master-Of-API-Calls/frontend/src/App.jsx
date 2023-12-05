import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [products, setProducts] = useState([]);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        // Keep in mind to make sure that every time make isError false so that it won't generete any errors further.
        setIsError(false);
        setIsLoading(true);
        const result = await axios.get("/api/products");
        setProducts(result.data);
        console.log(result.data);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        setIsError(true);
      }
    })();
  }, []);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (isError) {
    return (
      <div className="App">
        <h1>Something went wrong</h1>
      </div>
    );
  }

  return (
    <>
      <h1>Playing with APIs</h1>
      <h2>Number of products are: {products.length}</h2>
      <h2>{products.map((product) => product.name)}</h2>
    </>
  );
}

export default App;
