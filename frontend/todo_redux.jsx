import React from "react";
import ReactDOM from "react-dom";
import { allTodos } from './reducers/selectors.js';
import { receiveTodos, receiveTodo} from './actions/todo_actions.js';
import App from './components/app';
import Root from './components/root';
import configureStore from './store/store';

document.addEventListener("DOMContentLoaded", function(){
  // window.store = store()
  // window.allTodos = allTodos(store().getState());
  // window.receiveTodo = receiveTodo;
  // window.receiveTodos = receiveTodos;
  const store = configureStore();
  ReactDOM.render(<Root store={store} />, document.getElementById("content"));
});
