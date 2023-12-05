import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    axios
      .get("/api/jokes")
      .then((result) => {
        setJokes(result.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <h1>Just Practicing</h1>
      <h4>Jokes : {jokes.length}</h4>
      {jokes.map((joke) => (
        <div key={joke.id}>
          <h3>{joke.id}</h3>
          <h3>{joke.question}</h3>
          <h3>{joke.answer}</h3>
        </div>
      ))}
    </>
  );
}

export default App;
