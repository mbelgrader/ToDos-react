import React from "react";
import ReactDOM from "react-dom";
import store from './store/store.js';
import { allTodos } from './reducers/selectors.js';
import { receiveTodos, receiveTodo} from './actions/todo_actions.js';
import App from './components/app';
import Root from './components/root';

document.addEventListener("DOMContentLoaded", function(){
  // window.store = store()
  // window.allTodos = allTodos(store().getState());
  // window.receiveTodo = receiveTodo;
  // window.receiveTodos = receiveTodos;
  ReactDOM.render(<Root />, document.getElementById("content"));
});
