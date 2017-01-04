import React from "react";
import ReactDOM from "react-dom";
import { allTodos } from './reducers/selectors.js';
import { receiveTodos, receiveTodo} from './actions/todo_actions.js';
import App from './components/app';
import Root from './components/root';
import configureStore from './store/store';
import { fetchTodos } from './util/todo_api_util';

document.addEventListener("DOMContentLoaded", function(){
  // window.store = configureStore();
  // window.allTodos = allTodos(store().getState());
  // window.receiveTodo = receiveTodo;
  // window.receiveTodos = receiveTodos;
  const store = configureStore();
  window.store = store;
  window.fetchTodos = fetchTodos;
  ReactDOM.render(<Root store={store} />, document.getElementById("content"));
});
