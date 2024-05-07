import { useEffect, useState } from "react";

function useTodos(todoId) {
  const [todo, setTodo] = useState({});

  useEffect(async () => {
    const todoData = await fetch(
      `https://jsonplaceholder.typicode.com/todos/${todoId}`
    );
    const jsonTodoData = await todoData.json();
    console.log(jsonTodoData);
    setTodo(jsonTodoData);
  }, [todoId]);

  return todo;
}

export default useTodos;
