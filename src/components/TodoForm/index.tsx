import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from 'store/ducks/todo.duck';
import { Container, Form, Submit, TextInput } from './styles';

function TodoForm() {
  const [title, setTitle] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = () => {
    dispatch(addTodo(title));
  };
  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <TextInput onChange={(event) => setTitle(event.target.value)} required />
        <Submit type="submit">+</Submit>
      </Form>
    </Container>
  );
}

export default TodoForm;
