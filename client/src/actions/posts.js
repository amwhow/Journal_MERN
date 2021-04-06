// import everything from the path
import * as api from '../api';

// Action creators - function that returns a function
// redux thunk is async
export const getPosts = () => async (dispatch) => {
  try {
    const { data } = await api.fetchPosts();
    // return the action
    dispatch( { type: 'FETCH_ALL', payload: data });
  } catch (error) {
    console.log(error.message)
  }

}