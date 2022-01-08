import React from "react";
import TodoItem from "./TodoItem";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {getAsyncTodos} from"../../feature/todos/TodoSlice"

const TodoList = () => {
  // const todos = [
  //   { id: 1, title: "todo1", completed: false },
  //   { id: 2, title: "todo2", completed: false },
  //   { id: 3, title: "todo3", completed: true },
  //   { id: 4, title: "todo4", completed: false },
  //   { id: 5, title: "todo5", completed: false },
  // ];
 
  const dispatch = useDispatch();
  const { todos, error, loading } = useSelector((state) => state.todos);

  useEffect(() => {
    dispatch(getAsyncTodos())
   }, [])

  if (loading) return <p>loading ...</p>;
  if (error) return <p>{error}</p>;
  return (
    <ul className="list-group">
      {todos.map((todo) => (
        <TodoItem id={todo.id} title={todo.title} completed={todo.completed} />
      ))}
    </ul>
  );
};

export default TodoList;
