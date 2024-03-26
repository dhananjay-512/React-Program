import React from 'react';

function TodoList({ todos }) {
  return (
    <ul>
      {todos.map(todo => (
        <li key={todo.id}>{todo.text}</li>
      ))}
    </ul>
  );
}

const todos = [
  { id: 1, text: 'watching IPL' },
  { id: 2, text: 'Travel ' },
  { id: 3, text: 'Reading Books' }
];

function List() {
  return (
    <div style={{
        color: "red",
    }}>
      <h1>Todo List</h1>
      <TodoList todos={todos} />
    </div>
  );
}

export default List;
