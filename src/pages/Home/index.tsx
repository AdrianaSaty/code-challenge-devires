import Todo from 'components/TodoForm';
import TodoItem from 'components/TodoItem';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllTodos } from 'store/ducks/todo.duck';
import { RootState } from 'store';

const Home: React.FC = () => {
  const dispatch = useDispatch();
  const dataTodo = useSelector((store: RootState) => store.todoReducer);

  useEffect(() => {
    dispatch(getAllTodos());
  }, [dispatch]);

  console.log(dataTodo);
  return (
    <div className="Home">
      <h1>Welcome to Devires Todo App!</h1>
      {dataTodo.error ? (
        <h2>Error connecting to server. Please try again </h2>
      ) : (
        <div>
          <Todo />
          {dataTodo.dataTodo.map((todo) => (
            <div key={todo.id}>
              <TodoItem
                description={todo.description}
                isCompleted={
                  todo.isCompleted !== undefined ? todo.isCompleted : false
                }
                id={todo.id}
              ></TodoItem>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
