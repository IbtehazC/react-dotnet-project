import { ThunkAction } from "redux-thunk";
import storeType from "./storeType";
import { PostAction } from "./postActionsTypes";

export type PostActionCreatorType = () => ThunkAction<void, storeType, {}, PostAction>;
