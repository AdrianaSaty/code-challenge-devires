import React from 'react';
import { Container } from './styles';

interface TodoItemProps {
  isCompleted: boolean;
  description: string;
  id: string;
}

function TodoItem(props: TodoItemProps) {
  const { isCompleted, description, id } = props;

  const onChangeCheckbox = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { checked, name } = e.target;
    console.log(checked, name);
  };

  return (
    <Container>
      <div>
        {id}
        <label
          style={{ textDecoration: isCompleted ? 'line-through' : 'none' }}
          htmlFor={id}
        >
          <input type="checkbox" onChange={onChangeCheckbox} name={id} />
          {description}
        </label>
      </div>
    </Container>
  );
}

export default TodoItem;
