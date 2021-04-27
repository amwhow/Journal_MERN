import axios from "axios";

// const url = "https://journal-project-mern.herokuapp.com/posts";
const url = "http://localhost:3500/posts";


// axios integrated the two steps of fetching data and .json() it
export const fetchPosts = () => axios.get(url)
export const createPost = (newPost) => axios.post(url, newPost);
export const updatePost = (id, postData) => axios.patch(`${url}/${id}`, postData)
export const likePost = (id) => axios.patch(`${url}/${id}/likePost`)
export const deletePost = (id) => axios.delete(`${url}/${id}`)