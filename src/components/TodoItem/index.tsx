import React from 'react';
import { Container } from './styles';

interface TodoItemProps {
  isCompleted: boolean;
  description: string;
}

function TodoItem(props: TodoItemProps) {
  const { isCompleted, description } = props;
  return (
    <Container>
      <div>
        <label style={{ textDecoration: isCompleted ? 'line-through' : 'none' }}>
          <input type="checkbox" checked={isCompleted} />
          {description}
        </label>
      </div>
    </Container>
  );
}

export default TodoItem;
