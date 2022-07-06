import React, { useState } from "react";
import { toast } from "react-toastify";

const Form = ({ todo, settodo, todolist, settodolist }) => {
  const changeHandler = (e) => {
    let task = e.target.value;
    if (task.length < 100) {
      settodo(task);
    } else {
      toast.warn("Write less Than 100 character", {
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
        { text: todo, completed: false, id: Math.random() * 1000 },
      ]);
      settodo("");
      toast.success("Task Added Successfully", {
        position: "top-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else {
      toast.warn("First Complete the below Task", {
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
  return (
    <>
      <form onSubmit={submitEventHandler} action="">
        <input type="text" onChange={changeHandler} name="todo" value={todo} />
        <input type="submit" value="Add" />
      </form>
    </>
  );
};

export default Form;
