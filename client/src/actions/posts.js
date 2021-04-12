// import everything from the path
import * as api from '../api';

// Action creators - function that returns a function
// redux thunk is async
export const getPosts = () => async (dispatch) => {
  try {
    // what is this api?
    const { data } = await api.fetchPosts();
    // return the action
    dispatch( { type: 'FETCH_ALL', payload: data });
  } catch (error) {
    console.log(error.message)
  }
}

export const createPost = (post) => async (dispatch) => {
  try {
    const { data } = await api.createPost(post);
    dispatch( { type: "CREATE", payload: data });
  } catch(error) {
    console.log(error);
  }
}

export const updatePost = (id, post) => async (dispatch) => {
  try {
    const { data } = await api.updatePost(id, post);
    dispatch({ type: "UPDATE", payload: data });
  } catch(error) {
    console.log(error);
  }
}

export const deletePost = (id) => async (dispatch) => {
  try {
    await api.deletePost(id);
    dispatch({ type: "DELETE", payload: id });
  } catch(error) {
    console.log(error);
  }
}

export const likePost = (id) => async (dispatch) => {
  try {
    const { data } = await api.likePost(id);
    dispatch({ type: "LIKE_POST", payload: data });
  } catch(error) {
    console.log(error);
  }
}