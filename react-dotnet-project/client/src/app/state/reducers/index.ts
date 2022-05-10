import { combineReducers } from "redux";
import postReducer from "./postReducer";
import selectedPostReducer from "./selectedPostReducer";

const reducers = combineReducers({
  post: postReducer,
  selectedPost: selectedPostReducer,
});

export default reducers;

export type State = ReturnType<typeof reducers>;
