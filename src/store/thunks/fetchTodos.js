import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchTodos = createAsyncThunk('todos/fetch', async () => {
  const response = await axios.get('http://localhost:3001/todos');

  return response.data;
});
