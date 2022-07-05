import React, { useState } from "react";

const Form = ({ todo, settodo, todolist, settodolist }) => {
  const changeHandler = (e) => {
    settodo(e.target.value);
  };

  const submitEventHandler = (e) => {
    e.preventDefault();
    settodolist([
      ...todolist,
      { text: todo, completed: false, id: Math.random() * 1000 },
    ]);
    settodo("");
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
