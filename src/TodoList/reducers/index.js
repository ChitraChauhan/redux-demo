const defaultTodo = {
  title: "",
  finished: false
};

const initialState = {
  todos: [],
  todo: {
    ...defaultTodo
  }
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state,
        todos: [...state.todos, action.payload],
        todo: { ...defaultTodo }
      };
    case "UPDATE_TODO":
      return { ...state, todo: { ...action.todo } };
    case "REMOVE_TODO":
      return {
        ...state,
        todos: [...state.todos.filter(todo => todo.id !== action.id)]
      };
    case "SAVE_TODO":
      return {
        ...state,
        todos: action.savePayload,
        todo: { ...defaultTodo }
      };
    default:
      return state;
  }
};

export default todoReducer;
