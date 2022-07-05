import React from "react";

const Todo = ({ text, id, todos, settodolist, todolist }) => {
  const deleteHandler = () => {
    settodolist(todolist.filter((el) => el.id !== todos.id));
  };

  const completeHandler = () => {
    settodolist(
      todolist.map((item) => {
        if (item.id === todos.id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      }),
    );
  };

  return (
    <>
      <li>
        <span className={todos.completed ? "completed" : ""}>{text}</span>
        <button onClick={completeHandler}>Done</button>
        <button onClick={deleteHandler}>Delete</button>
      </li>
    </>
  );
};

export default Todo;
