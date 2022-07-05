import React, { useState } from "react";
import Form from "./Components/Form";
import Todolist from "./Components/Todolist";
import "./App.css";

const App = () => {
  // Todo usestate
  const [todo, settodo] = useState("");
  // todo list usestate
  const [todolist, settodolist] = useState([]);
  return (
    <>
      <h1>Prakhyat Todo List</h1>
      <Form
        todo={todo}
        settodo={settodo}
        todolist={todolist}
        settodolist={settodolist}
      />
      <br />
      <hr />
      <Todolist todolist={todolist} settodolist={settodolist} />
    </>
  );
};

export default App;
