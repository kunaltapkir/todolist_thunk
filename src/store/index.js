import { configureStore } from '@reduxjs/toolkit';
import {
  todoReducer,
  changeTitle,
  changeEdit,
  editTitle,
} from './slices/todoSlice';

export const store = configureStore({
  reducer: {
    todos: todoReducer,
  },
});

export * from './thunks/fetchTodos';
export * from './thunks/addTodo';
export * from './thunks/removeTodo';

export { changeTitle, changeEdit, editTitle };
