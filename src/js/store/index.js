import { createStore } from "redux";
import {addArticle} from "../actions"
import rootReducer from "../reducers/index";

const store = createStore(rootReducer);
console.log(store.getState())
store.subscribe(() => console.log('Look ma, Redux!!'))
console.log(store.dispatch( addArticle({ name: 'React Redux Tutorial for Beginners', id: 1 }) ))

export default store;