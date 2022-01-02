import "./App.css";
import React from "react";
import { Provider } from "react-redux";
import store from "./feature/store";
import Counter from "./components/Counter";
import AddTodoForm from "./components/Todos/AddTodoForm";
import TodoList from "./components/Todos/TodoList";
import TotalCompleteItems from "./components/Todos/TotalCompleteItems";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Provider store={store}>
      {/* <Counter /> */}
      <AddTodoForm />
      <TodoList />
      <TotalCompleteItems />
    </Provider>
  );
}

export default App;
