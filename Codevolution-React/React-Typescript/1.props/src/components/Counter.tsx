type counterPropsType = {
  count: number;
  updateCounter: () => void;
};

function Counter({ count, updateCounter }: counterPropsType) {
  return (
    <div>
      <h1>Counter is {count}</h1>
      <button onClick={updateCounter}>Increment</button>
    </div>
  );
}

export default Counter;
