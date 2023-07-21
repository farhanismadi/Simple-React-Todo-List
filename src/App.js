import React, { useState } from "react";
import "./assets/styles/App.css";
import TodoLists from "./components/TodoLists";
import NewTodoList from "./components/NewTodoList";

const App = () => {
  const [todoList, setTodoList] = useState([]);

  const addTodoListHandler = (todoList) => {
    setTodoList((prevTodoList) => {
      return [todoList, ...prevTodoList];
    });
  };
  return (
    <div className="App">
      <h1>TODO LIST</h1>
      <NewTodoList onAddTodoList={addTodoListHandler} />
      <hr />
      <TodoLists items={todoList} />
    </div>
  );
};

export default App;
