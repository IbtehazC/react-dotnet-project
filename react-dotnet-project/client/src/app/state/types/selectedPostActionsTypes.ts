import { Post } from "../../models/post";

export enum SelectedPostActionTypes {
  SET_SELECTED_POST = "SET_SELECTED_POST",
  CANCEL_SELECTED_POST = "CANCEL_SELECTED_POST",
}

interface SetSelectedPost {
  type: SelectedPostActionTypes.SET_SELECTED_POST;
  payload: Post;
}
interface CancelSelectedPost {
  type: SelectedPostActionTypes.CANCEL_SELECTED_POST;
  payload: null;
}

export type SelectedPostActions = SetSelectedPost | CancelSelectedPost;
