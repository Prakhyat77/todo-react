import React, { useState } from "react";
import Form from "./Components/Form";
import Todolist from "./Components/Todolist";
import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./Components/Footer";
import Header from "./Components/Header";

const App = () => {
  // Todo usestate
  const [todo, settodo] = useState("");
  // todo list usestate
  const [todolist, settodolist] = useState([]);
  return (
    <>
      <Header />
      <Form
        todo={todo}
        settodo={settodo}
        todolist={todolist}
        settodolist={settodolist}
      />

      <Todolist todolist={todolist} settodolist={settodolist} />

      <Footer />
      <ToastContainer />
    </>
  );
};

export default App;
