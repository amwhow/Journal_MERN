import React from "react";
import App from "./App";
import './index.css';
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import reducers from './reducers';

// store holds the state of the app
const store = createStore(reducers, compose(applyMiddleware(thunk)));

ReactDOM.render(
  // Redux store is a global store, from which states can be accessed  anywhere in the app
  <Provider store={store}>
    <App />
  </Provider>, 
  document.getElementById('root'));