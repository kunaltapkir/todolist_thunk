import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const addTodo = createAsyncThunk('todos/add', async (todo) => {
  const response = await axios.post('http://localhost:3001/todos', {
    title: todo.title,
    isEdit: false,
  });

  return response.data;
});
