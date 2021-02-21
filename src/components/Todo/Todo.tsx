import TodoItem from 'components/TodoItem/TodoIdem';
import React from 'react';
import { Container, Form, Submit, TextInput } from './styles';

function Todo() {
  return (
    <Container>
      <Form>
        <TodoItem description="teste" isCompleted={true}></TodoItem>
        <TodoItem description="teste" isCompleted={true}></TodoItem>
        <TextInput required />
        <Submit type="submit">+</Submit>
      </Form>
    </Container>
  );
}

export default Todo;
