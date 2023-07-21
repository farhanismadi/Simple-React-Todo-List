import React from "react";
import TodoListForm from "./TodoListForm";

const NewTodoList = (props) => {
  const saveTodoListDatahandler = (enteredTodoListData) => {
    const todoListData = {
      ...enteredTodoListData,
      id: Math.random().toString(),
    };
    props.onAddTodoList(todoListData);
  };

  return (
    <div>
      <TodoListForm onSaveTodoListData={saveTodoListDatahandler} />
    </div>
  );
};

export default NewTodoList;
