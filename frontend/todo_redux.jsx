import React from "react";
import ReactDOM from "react-dom";
import configureStore from './store/store.js';
import { allTodos } from './reducers/selectors.js';
import { receiveTodos, receiveTodo} from './actions/todo_actions.js';

class Todos extends React.Component {
  render() {
    return <h1>Todos App</h1>;
  }
}

document.addEventListener("DOMContentLoaded", function(){
  window.store = configureStore();
  window.allTodos = allTodos(configureStore().getState());
  window.receiveTodo = receiveTodo;
  window.receiveTodos = receiveTodos;
  ReactDOM.render(<Todos />, document.getElementById("content"));
});
