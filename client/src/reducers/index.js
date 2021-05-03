import { combineReducers } from "redux";
import posts from "./posts";
import auth from "./auth";

export default combineReducers({
  // value and key are the same, posts: posts
  posts, auth
});