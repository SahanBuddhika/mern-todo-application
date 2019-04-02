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

        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="https://codingthesmartway.com" target="-blank">
          </a>
       

            <Link to="/" className="navbar-brand">MERN-Stack Todo App</Link>
            <div className="collapse nav-collapse">
              <ul className="navbar-nav mr-auto">

                <li className="navbar-item">
                  <Link to="/" className="nav-link">Todos</Link>
                </li>  
                <li className="navbar-item">
                  <Link to="/create" className="nav-link">Create Todos</Link>
                </li> 
                
              </ul>
            </div>
        </nav>
        
        <Route path="/" exact component={TodoList} />
        <Route path="/edit/:id" exact component={EditTodo} />
        <Route path="/create" exact component={CreateTodo} />

        </div>
      </Router>
      );
  }
}

export default App;
