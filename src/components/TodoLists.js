import TodoListItem from "./TodoListItem";
import "./TodoLists.css";

const TodoLists = (props) => {
  return (
    <div className="todo-lists">
      {props.items.map((todoList) => (
        <TodoListItem
          title={todoList.title}
          description={todoList.description}
        />
      ))}
    </div>
  );
};

export default TodoLists;
