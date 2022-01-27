import "./App.css";
import Header from "./Components/Header";
import { Todos } from "./Components/Todos";
import { Footer } from "./Components/Footer";
import { AddTodo } from "./Components/AddTodo";
import { About } from "./Components/About";
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }

  const addTodo = (title, desc) => {
    console.log("I am adding this", title, desc);
    let sno;
    if (todos.length === 0) {
      sno = 0;
    } else {
      sno = todos[todos.length - 1].sno + 1;
    }
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc,
    };
    settodos([...todos, myTodo]);
  };
  const onDelete = (todo) => {
    console.log("Hello", todo);

    settodos(
      todos.filter((e) => {
        console.log(e);
        return e !== todo;
      })
    );
  };

  const [todos, settodos] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <>
      <Router>
        <Header title="My Todos List" searchBar={false} />

        <Routes>
          <Route
            exact
            path="/"
            element ={
                <>
                  <AddTodo addTodo={addTodo} />
                  <Todos todos={todos} onDelete={onDelete} />
                </>
              
            }
          ></Route>
          <Route exact path="/about" element={<About />}></Route>
        </Routes>

        <Footer />
      </Router>
    </>
  );
}

export default App;
