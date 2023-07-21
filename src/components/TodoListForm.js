import React, { useState } from "react";
import "./TodoListForm.css";

const TodoListForm = (props) => {
  const [enteredTitle, setEnterTitle] = useState("");
  const [enteredDescription, setEnterDescription] = useState("");

  const titleChangeHandler = (event) => {
    setEnterTitle(event.target.value);
  };

  const descriptionChangeHandler = (event) => {
    setEnterDescription(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const todoListData = {
      title: enteredTitle,
      description: enteredDescription,
    };

    props.onSaveTodoListData(todoListData);
    setEnterTitle("");
    setEnterDescription("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="todolist__controls">
        <input
          type="text"
          value={enteredTitle}
          placeholder="What you want to do?"
          onChange={titleChangeHandler}
          maxlength="40"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />
      </div>
      <div className="todolist__controls">
        <textarea
          placeholder="Description"
          value={enteredDescription}
          maxlength="100"
          onChange={descriptionChangeHandler}
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />
      </div>
      <div className="todolist__controls">
        <button type="submit">ADD +</button>
      </div>
    </form>
  );
};

export default TodoListForm;
