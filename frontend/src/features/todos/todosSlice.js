import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const apiUrl = 'http://localhost:5000/todos';

export const fetchTodos = createAsyncThunk('todos/fetchTodos', async () => {
  const response = await axios.get(apiUrl);
  return response.data;
});

export const addTodoAsync = createAsyncThunk('todos/addTodoAsync', async (text) => {
  const response = await axios.post(apiUrl, { text });
  return response.data;
});

export const toggleTodoAsync = createAsyncThunk('todos/toggleTodoAsync', async (id) => {
  const response = await axios.patch(`${apiUrl}/${id}`, { completed: true });
  return response.data;
});

export const deleteTodoAsync = createAsyncThunk('todos/deleteTodoAsync', async (id) => {
  await axios.delete(`${apiUrl}/${id}`);
  return id;
});

export const editTodoAsync = createAsyncThunk('todos/editTodoAsync', async ({ id, text }) => {
  const response = await axios.patch(`${apiUrl}/${id}`, { text });
  return response.data;
});

const todosSlice = createSlice({
  name: 'todos',
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodos.fulfilled, (state, action) => {
        return action.payload;
      })
      .addCase(addTodoAsync.fulfilled, (state, action) => {
        state.push(action.payload);
      })
      .addCase(toggleTodoAsync.fulfilled, (state, action) => {
        const index = state.findIndex(todo => todo._id === action.payload._id);
        state[index].completed = action.payload.completed;
      })
      .addCase(deleteTodoAsync.fulfilled, (state, action) => {
        return state.filter(todo => todo._id !== action.payload);
      })
      .addCase(editTodoAsync.fulfilled, (state, action) => {
        const index = state.findIndex(todo => todo._id === action.payload._id);
        state[index].text = action.payload.text;
      });
  }
});

export default todosSlice.reducer;
