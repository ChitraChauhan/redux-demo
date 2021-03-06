import { ADD_ARTICLE } from "../constants/action-types";

const initialState = {
  articles: []
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ARTICLE:
    console.log('reducers')
      return { ...state, articles: [...state.articles, action.payload] };
    //  state.articles.push(action.payload);
    //  return state;
    // return { ...state, articles: state.articles.concat(action.payload) };
    default:
      return state;
  }
};

export default rootReducer;
