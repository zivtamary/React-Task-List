import React, { Component } from "react";
import Todos from "./Todos";
import AddTodo from "./AddTodo";

class App extends Component {
  state = {
    todos: [
      { id: 0, content: "Buy some milk" },
      { id: 1, content: "Finish Net Ninja Course" }
    ]
  };

  addToDo = todo => {
    //console.log(todo)
    todo.id = Math.random();
    let todos = [...this.state.todos, todo];
    this.setState({
      todos
    });
  };

  deleteToDo = id => {
    let todos = this.state.todos.filter(todo => todo.id !== id);
    this.setState({
      todos
    });
  };

  render() {
    return (
      <div className="container text-center">
        <h1 className="display-4 text-primary text-center">To Do List!</h1>
        <Todos todos={this.state.todos} deleteToDo={this.deleteToDo} />
        <div className="row">
          <div className="col-md-sm mx-auto">
            <AddTodo addToDo={this.addToDo} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
