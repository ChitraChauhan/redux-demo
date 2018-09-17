import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { removeTodo, updateTodo } from "../actions";

class TodoList extends Component {
  render() {
    const { todos } = this.props;

    let todoItems =
      todos &&
      todos.map(todo => (
        <TodoItem
          key={todo.id}
          todo={todo}
          removeTodo={this.props.removeTodo}
          updateTodo={this.props.updateTodo}
        />
      ));
    return (
      <div>
        <ul>{todoItems}</ul>Pending Tasks:{todos &&
          todos.filter(todo => !todo.finished).length}
      </div>
    );
  }
}

class TodoItem extends Component {
  render() {
    const { todo, removeTodo, updateTodo } = this.props;
    return (
      <div>
        <li key={todo.id} onClick={() => updateTodo(todo)}>
          <input
            type="checkbox"
            checked={todo.finished}
            onChange={e => (todo.finished = !todo.finished)}
          />{" "}
          {todo.title}{" "}
          <button onClick={() => removeTodo(todo.id)}>Remove</button>
        </li>
      </div>
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
      removeTodo: removeTodo,
      updateTodo: updateTodo
    },
    dispatch
  );
};

const TodoListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);

export default TodoListContainer;