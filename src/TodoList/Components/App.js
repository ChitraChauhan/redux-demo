import React from "react";
import TodoListContainer from "./TodoListContainer";
import TodoForm from "./TodoFormContainer";

const App = () => (
  <div>
    <h3>TodoList in Redux</h3>
    <TodoForm />
    <TodoListContainer />
  </div>
);

export default App;
