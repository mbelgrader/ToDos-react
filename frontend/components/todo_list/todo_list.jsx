import React from 'react';
import TodoListItem from './todo_list_item';

const TodoList = ({ todos, receiveTodo }) => (
  <div>
    <ul>
      {todos.map((todo, idx) => <TodoListItem todo={todo} key={idx}/>)}
    </ul>
  </div>
);

export default TodoList;
