import { Post } from "../../models/post";

export enum PostActionTypes {
  CREATE = "create",
  EDIT = "edit",
  LIST = "list",
  DELETE = "delete",
  DETAILS = "details",
}

interface PostCreate {
  type: PostActionTypes.CREATE;
}
interface PostEdit {
  type: PostActionTypes.EDIT;
}
interface PostList {
  type: PostActionTypes.LIST;
  payload: Post[];
}
interface PostDetails {
  type: PostActionTypes.DETAILS;
}
interface PostDelete {
  type: PostActionTypes.DELETE;
}

export type PostAction =
  | PostCreate
  | PostEdit
  | PostList
  | PostDetails
  | PostDelete;
