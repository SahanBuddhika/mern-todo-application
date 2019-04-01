import React, { Component } from 'react';
import { BrowserRouter as Router , Route , Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import CreateTodo from "./components/create-todo.component";
import EditTodo from "./components/edit-todo.component";
import TodoList from "./components/todos-list.component";


class App extends Component {
  render() {
    return (
      <Router>
        <div className = "container">
          <h2>MERN-Stack Todo App</h2>
        
        <Route path="/" exact component={TodoList} />
        <Route path="/edit/:id" exact component={EditTodo} />
        <Route path="/create" exact component={CreateTodo} />

        </div>
      </Router>
      );
  }
}

export default App;
