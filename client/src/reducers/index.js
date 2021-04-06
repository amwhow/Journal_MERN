import { combineReducers } from "redux";
import posts from "./posts";

export default combineReducers({
  // value and key are the same, posts: posts
  posts,
});