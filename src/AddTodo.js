import React, { Component } from "react";

class AddTodo extends Component {
  state = {
    content: ""
  };

  handleChange = e => {
    this.setState({
      content: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.content.length > 0) {
      this.props.addToDo(this.state);
      this.setState({
        content: ""
      });
    } else {
      return null;
    }
  };

  render() {
    return (
      <div className="mt-5 text-center mx-auto">
        <form onSubmit={this.handleSubmit} className="form-inline">
          <div className="form-group mb-2">
            <label htmlFor="content" className="sr-only">
              Task
            </label>
            <input
              type="text"
              className="form-control-plaintext border text-center"
              placeholder="To do"
              name="content"
              onChange={this.handleChange}
              value={this.state.content}
            />
          </div>
          <button type="submit" className="btn btn-primary mb-2 mx-4">
            Add To Do
          </button>
        </form>
      </div>
    );
  }
}

export default AddTodo;
