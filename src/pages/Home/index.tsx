import Todo from 'components/TodoForm';
import TodoItem from 'components/TodoItem';
import React from 'react';

function Home() {
  return (
    <div className="Home">
      <h1>Welcome to Devires Todo App!</h1>
      <Todo />
      <TodoItem description="teste" isCompleted={true}></TodoItem>
    </div>
  );
}

export default Home;
