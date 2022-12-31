import './App.css';
import Header from './MyComponents/Header';
import Footer from './MyComponents/Footer'
import Todos from './MyComponents/Todos';
import AddTodo from './MyComponents/AddTodo';
import About from './MyComponents/About';
import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  const name = "Todos List";

  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  }
  else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }

  const onDelete = (todo) => {
    console.log("todos are", todo);
    setTodos(todos.filter((e) => {
      return e !== todo;
    }));
    localStorage.setItem("todos", JSON.stringify(todos));
  }
  const addTodo = (title, desc) => {
    console.log(title, desc);
    const myTodo = {
      title: title,
      desc: desc,
    }
    setTodos([...todos, myTodo]);
  }
  const [todos, setTodos] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])
 return (
    <>
      <Router>
        <Header title={name} />
        <Switch>
          <Route  path="/" render={() => {
            return (
              <>
                <AddTodo addTodo={addTodo} />
                <Todos todos={todos} title={name} onDelete={onDelete} />
              </>
            )
          }}>
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
