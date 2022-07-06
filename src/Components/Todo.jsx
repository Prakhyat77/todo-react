import React from "react";
import { toast } from "react-toastify";

const Todo = ({ text, id, todos, settodolist, todolist }) => {
  const deleteHandler = () => {
    settodolist(todolist.filter((el) => el.id !== todos.id));
    if (!todos.completed) {
      toast.warn("Task Not Completed But Removing It", {
        position: "bottom-center",
        autoClose: 5000,
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
      toast.success("Task Done Successfully");
    } else {
      toast("Task Not Done");
    }
  };

  return (
    <>
      <li>
        <input type="checkbox" onChange={checkboxHandler} />
        <span className={todos.completed ? "completed" : ""}>{text}</span>
        <button onClick={deleteHandler}>Delete</button>
      </li>
    </>
  );
};

export default Todo;
