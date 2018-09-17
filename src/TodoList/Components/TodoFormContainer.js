import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { addTodo, saveTodo } from "../actions";

let id = 0;

class TodoForm extends Component {
  onChange(e) {
    const { todo } = this.props;
    todo[e.target.name] = e.target.value;
    this.setState({ todo });
  }

  findIndex(id) {
    const { todos } = this.props;
    return todos.findIndex(record => record.id === id);
  }

  onSubmit(e) {
    e.preventDefault();

    const { todos, todo } = this.props;
    if (!todo.id) {
      todo.id = ++id;
      this.props.addTodo({ ...todo });
    } else {
      const index = this.findIndex(todo.id);
      todos[index] = todo;
      this.props.saveTodo(todos);
    }
  }

  render() {
    return (
      <form>
        <input
          type="text"
          name="title"
          value={this.props.todo.title}
          onChange={e => this.onChange(e)}
        />
        <button onClick={e => this.onSubmit(e)}>Add</button>
      </form>
    );
  }
}

const mapStateToProps = state => {
  return {
    todos: state.todos,
    todo: state.todo
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      addTodo: addTodo,
      saveTodo: saveTodo
    },
    dispatch
  );
};

// const TodoFormContainer = connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(TodoForm);

// export default TodoFormContainer;
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoForm);
