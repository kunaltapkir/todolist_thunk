import { useDispatch } from 'react-redux';
import { removeTodo, changeEdit } from '../store';
import TodoEdit from './TodoEdit';

function TodoItem({ todo, isEdit }) {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(removeTodo(todo));
  };

  const onEditClick = () => {
    dispatch(changeEdit(todo));
  };

  let content = <>{todo.title}</>;
  if (isEdit) content = <TodoEdit onSubmit={onEditClick} todo={todo} />;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
      <div>{content}</div>
      <div style={{ display: 'flex', gap: '10px' }}>
        <button onClick={handleDelete}>Delete</button>
        <button onClick={onEditClick}>Edit</button>
      </div>
    </div>
  );
}

export default TodoItem;
