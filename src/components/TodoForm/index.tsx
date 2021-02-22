import React from 'react';
import { Container, Form, Submit, TextInput } from './styles';

function TodoForm() {
  return (
    <Container>
      <Form>
        <TextInput required />
        <Submit type="submit">+</Submit>
      </Form>
    </Container>
  );
}

export default TodoForm;
