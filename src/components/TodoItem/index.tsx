import React from 'react';
import { Container, TrashIcon } from './styles';

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
          <TrashIcon src="/images/trash_icon.svg" alt="Trash Logo" />
        </label>
      </div>
    </Container>
  );
}

export default TodoItem;
