import React from "react";
import ReactDOM from "react-dom";
import configureStore from './store/store.js';

const store = configureStore();
window.store = store;

class Todos extends React.Component {
  render() {
    return <h1>Todos App</h1>;
  }
}

document.addEventListener("DOMContentLoaded", function(){
  ReactDOM.render(<Todos />, document.getElementById("content"));
});
