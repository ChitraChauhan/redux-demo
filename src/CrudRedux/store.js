import { createStore } from "redux";
import PostReducer from "./PostReducer";

const store = createStore(PostReducer);
console.log(store.getState())

export default store;