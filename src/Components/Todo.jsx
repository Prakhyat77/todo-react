import React from "react";
import { toast } from "react-toastify";

const Todo = ({ text, todos, settodolist, todolist }) => {
  const deleteHandler = () => {
    settodolist(todolist.filter((el) => el.id !== todos.id));
    if (!todos.completed) {
      toast.warn("Tumse Nahi Ho Payega 😒", {
        position: "bottom-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  const checkboxHandler = () => {
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
    if (!todos.completed) {
      toast.success("Hogaya 😊");
    } else {
      toast.warn("Nahi Ho Paya 😯");
    }
  };

  return (
    <>
      <li className={todos.completed ? "task-completed" : "list"}>
        <input className="check" type="checkbox" onChange={checkboxHandler} />
        <span className={todos.completed ? "completed" : ""}>{text}</span>
        <button onClick={deleteHandler}>❌</button>
      </li>
    </>
  );
};

export default Todo;
