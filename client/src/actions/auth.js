import * as api from '../api/index.js';
import { AUTH } from '../constants/actionTypes';

export const signIn = (formData, history) => async (dispatch) => {
  try {
    // log in
    history.push("/")
  } catch (e) {
    console.log(e);
  }
}

export const signUp = (formData, history) => async (dispatch) => {
  try {
    // sign up
    history.push("/")
  } catch (e) {
    console.log(e);
  }
}