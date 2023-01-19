import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const removeTodo = createAsyncThunk('todos/remove', async (todo) => {
  await axios.delete(`http://localhost:3001/todos/${todo.id}`);

  return todo;
});
