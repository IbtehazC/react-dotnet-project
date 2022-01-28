import agent from "../../api/agent";
import { PostActionCreatorType } from "../types/postActionCreatorTypes";
import { PostActionTypes } from "../types/postActionsTypes";

export const listPost: PostActionCreatorType = () => async (dispatch) => {
  const response = await agent.Posts.list().catch(e => {
    return e
  });
  dispatch({ type: PostActionTypes.LIST, payload: response });
};
