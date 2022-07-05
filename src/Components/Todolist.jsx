import React from "react";
import Todo from "./Todo";

const Todolist = ({ todolist, settodolist }) => {
  return (
    <>
      {todolist.map((todos) => (
        <Todo
          key={todos.id}
          settodolist={settodolist}
          todolist={todolist}
          todos={todos}
          text={todos.text}
        />
      ))}
    </>
  );
};

export default Todolist;
