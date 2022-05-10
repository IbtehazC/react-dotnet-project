import { Dispatch } from "react";
import { Post } from "../../models/post";
import {
  SelectedPostActions,
  SelectedPostActionTypes,
} from "../types/selectedPostActionsTypes";

export const setSelectedPost =
  (selectedPost: Post) => (dispatch: Dispatch<SelectedPostActions>) =>
    dispatch({
      type: SelectedPostActionTypes.SET_SELECTED_POST,
      payload: selectedPost,
    });

export const cancelSelectedPost =
  () => (dispatch: Dispatch<SelectedPostActions>) =>
    dispatch({
      type: SelectedPostActionTypes.CANCEL_SELECTED_POST,
      payload: null,
    });
