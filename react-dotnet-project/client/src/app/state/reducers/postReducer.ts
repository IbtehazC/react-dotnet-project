import { Post } from "../../models/post";
import { PostAction, PostActionTypes } from "../types/postActionsTypes";

const postReducer = (state: Post[] = [], action: PostAction) => {
  switch (action.type) {
    case PostActionTypes.CREATE:
      return state;
    case PostActionTypes.EDIT:
      return state;
    case PostActionTypes.LIST:
      return [...state, ...action.payload];
    case PostActionTypes.DETAILS:
      return state;
    case PostActionTypes.DELETE:
      return state;
    default:
      return state;
  }
};

export default postReducer;
