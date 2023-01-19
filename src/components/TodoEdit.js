import { useDispatch } from 'react-redux';
import { editTitle } from '../store';

function TodoEdit({ todo, onSubmit }) {
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit();
  };

  const handleChange = (event) => {
    dispatch(editTitle({ ...todo, title: event.target.value }));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input value={todo.title || ''} onChange={handleChange} />
        <button type="submit">Save</button>
      </form>
    </div>
  );
}

export default TodoEdit;
