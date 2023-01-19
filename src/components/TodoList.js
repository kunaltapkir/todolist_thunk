import TodoItem from './TodoItem';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTodos } from '../store';

function TodoList() {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => {
    return state.todos;
  });

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  const renderedItems = data.map((todo) => {
    return <TodoItem key={todo.id} todo={todo} isEdit={todo.isEdit} />;
  });

  return (
    <div>
      <h2>All Todos</h2>
      {renderedItems}
    </div>
  );
}

export default TodoList;
