import { createSlice } from '@reduxjs/toolkit';
import { fetchTodos } from '../thunks/fetchTodos';
import { addTodo } from '../thunks/addTodo';
import { removeTodo } from '../thunks/removeTodo';

const todoSlice = createSlice({
  name: 'todos',
  initialState: {
    title: '',
    data: [],
    isLoading: false,
    error: null,
  },
  reducers: {
    changeTitle(state, action) {
      state.title = action.payload;
    },
    changeEdit(state, action) {
      const value = !action.payload.isEdit;
      const updatedData = state.data.map((todo) => {
        return todo.id === action.payload.id
          ? { ...todo, isEdit: value }
          : todo;
      });
      state.data = updatedData;
    },
    editTitle(state, action) {
      console.log(action);
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchTodos.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchTodos.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchTodos.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    });

    builder.addCase(addTodo.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(addTodo.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data.push(action.payload);
    });
    builder.addCase(addTodo.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    });

    builder.addCase(removeTodo.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(removeTodo.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = state.data.filter((todo) => todo.id !== action.payload.id);
    });
    builder.addCase(removeTodo.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    });
  },
});

export const todoReducer = todoSlice.reducer;
export const { changeTitle, changeEdit, editTitle } = todoSlice.actions;
