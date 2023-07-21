import "./TodoListItem.css";

const TodoListItem = (props) => {
  return (
    <div className="todo-item">
      <div className="">
        <h3>{props.title}</h3>
        <p>{props.description}</p>
      </div>
    </div>
  );
};

export default TodoListItem;
