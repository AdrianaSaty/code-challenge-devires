import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteTodo } from 'store/ducks/todo.duck';
import { Container, TrashIcon } from './styles';

interface TodoItemProps {
  isCompleted: boolean;
  description: string;
  id: number;
}

function TodoItem(props: TodoItemProps) {
  const { isCompleted, description, id } = props;
  const dispatch = useDispatch();

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
          htmlFor={id.toString()}
        >
          <input type="checkbox" onChange={onChangeCheckbox} name={id.toString()} />
          {description}
          <TrashIcon
            src="/images/trash_icon.svg"
            alt="Trash Logo"
            onClick={() => dispatch(deleteTodo(id))}
          />
        </label>
      </div>
    </Container>
  );
}

export default TodoItem;
