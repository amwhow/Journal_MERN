import axios from "axios";

// const url = "https://journal-project-mern.herokuapp.com/posts";
const API = axios.create({ baseURL: 'http://localhost:3500'});

// API integrated the two steps of fetching data and .json() it
export const fetchPosts = () => API.get('/posts')
export const createPost = (newPost) => API.post('/posts', newPost);
export const updatePost = (id, postData) => API.patch(`/posts/${id}`, postData)
export const likePost = (id) => API.patch(`/posts/${id}/likePost`)
export const deletePost = (id) => API.delete(`/posts/${id}`)
export const signUp = (id) => API.post(url, newPost);