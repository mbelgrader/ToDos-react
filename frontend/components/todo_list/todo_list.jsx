import React from 'react';
import TodoListItem from './todo_list_item';
import TodoForm from './todo_form.jsx';

class TodoList extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    const { todos, receiveTodo, removeTodo } = this.props;
    return (
      <div>
        <ul>
          {todos.map((todo, idx) => (
            <TodoListItem key={idx} todo={todo}
              receiveTodo={receiveTodo}
              removeTodo={removeTodo}/>
          ))}
        </ul>
        <TodoForm receiveTodo={receiveTodo}/>
      </div>
    );
  }
}



export default TodoList;
