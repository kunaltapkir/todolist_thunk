import { useDispatch, useSelector } from 'react-redux';
import { addTodo, changeTitle } from '../store';

function TodoForm() {
  const dispatch = useDispatch();
  const { title } = useSelector((state) => {
    return state.todos;
  });

  const handleAddTodo = (event) => {
    event.preventDefault();

    dispatch(addTodo({ title }));
  };

  const handleChange = (event) => {
    dispatch(changeTitle(event.target.value));
  };

  return (
    <div>
      <form onSubmit={handleAddTodo}>
        <label>Add Todo</label>
        <input value={title || ''} onChange={handleChange} />
        <button type="submit">Add Todo</button>
      </form>
    </div>
  );
}

export default TodoForm;
