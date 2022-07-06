import React from "react";
import Todo from "./Todo";

const Todolist = ({ todolist, settodolist }) => {
  return (
    <>
      <div className="todolist">
        {todolist.map((todos) => (
          <Todo
            key={todos.id}
            settodolist={settodolist}
            todolist={todolist}
            todos={todos}
            text={todos.text}
          />
        ))}
      </div>
    </>
  );
};

export default Todolist;
