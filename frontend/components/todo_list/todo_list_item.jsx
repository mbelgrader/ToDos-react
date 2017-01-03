import React from 'react';

class TodoListItem extends React.Component {
  constructor(props) {
    super(props);
    this.toggleDone = this.toggleDone.bind(this);
    this.updateTodo = this.updateTodo.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
  }

  toggleDone() {
    // debugger
    this.props.todo.done = !this.props.todo.done;
    this.props.receiveTodo(this.props.todo);
  }

  updateTodo() {
    // debugger
    return this.props.todo.done === true ? "Done" : "Undo";
  }

  deleteTodo() {
    this.props.removeTodo(this.props.todo);
  }

  render() {
    const { todo, receiveTodo, removeTodo } = this.props;

    return (
      <li>
        {todo.title}
        <button onClick={this.deleteTodo}>Delete Todo</button>
        <button onClick={this.toggleDone}>{this.updateTodo()}</button>
      </li>
    );
  }
}

export default TodoListItem;
