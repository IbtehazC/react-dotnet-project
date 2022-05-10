import { Post } from "../../models/post";
import {
  SelectedPostActions,
  SelectedPostActionTypes,
} from "../types/selectedPostActionsTypes";

const selectedPostReducer = (
  state: Post | null = null,
  action: SelectedPostActions
) => {
  switch (action.type) {
    case SelectedPostActionTypes.SET_SELECTED_POST:
      return (state = action.payload);
    case SelectedPostActionTypes.CANCEL_SELECTED_POST:
      return (state = null);
    default:
      return state;
  }
};

export default selectedPostReducer;
