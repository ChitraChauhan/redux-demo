export const addTodo = todos => ({ type: "ADD_TODO", payload: todos });

export const updateTodo = todo => ({ type: "UPDATE_TODO", todo: todo });

export const removeTodo = id => {
  return { type: "REMOVE_TODO", id: id };
};

export const saveTodo = e => ({ type: "SAVE_TODO", savePayload: e });
