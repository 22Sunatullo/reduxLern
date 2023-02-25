import { combineReducers } from "redux";
import { postReduser } from "./postReduser";

export const rootReduser = combineReducers({
    post: postReduser
});
