import axios from "axios";

const url = "http://localhost:3500/posts";

// axios integrated the two steps of fetching data and .json() it
export const fetchPosts = () => axios.get(url)
export const createPost = (newPost) => axios.post(url, newPost)