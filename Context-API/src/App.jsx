import "./App.css";
import Counter from "./components/Counter";
import Counter1 from "./components/UseReducerDemo/Counter";
import Login from "./components/Login";
import User from "./components/User";
import CounterContextProvider from "./context/CounterContextProvider";
import UserContextProvider from "./context/UserContextProvider";

function App() {
  return <Counter1 />;
}

export default App;

/*<UserContextProvider>
      <Login />
      <User />
      <CounterContextProvider>
        <Counter />
      </CounterContextProvider>
    </UserContextProvider> */
