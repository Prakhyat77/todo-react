import React from "react";
import { toast } from "react-toastify";
import { v4 as uuidv4 } from "uuid";

const Form = ({ todo, settodo, todolist, settodolist }) => {
  const changeHandler = (e) => {
    let task = e.target.value;
    if (task.length < 50) {
      settodo(task);
    } else {
      toast.warn("Essay nahi Likhna Hai 🤣", {
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

  const submitEventHandler = (e) => {
    e.preventDefault();
    if (todolist.length < 14) {
      settodolist([
        ...todolist,
        { text: todo, completed: false, id: uuidv4() },
      ]);
      settodo("");
      toast.success("Task Added Successfully 👍", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else {
      toast.warn("Pehle itna to kar lo 🤨", {
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
  return (
    <>
      <form onSubmit={submitEventHandler} action="">
        <input
          onChange={changeHandler}
          name="todo"
          value={todo}
          className="userInput"
          type="text"
          placeholder="New item..."
          // maxlength="40"
        />
        <button className="enter">+</button>
      </form>
    </>
  );
};

export default Form;
