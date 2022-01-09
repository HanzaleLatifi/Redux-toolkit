import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

//action creator
export const getAsyncTodos = createAsyncThunk(
  "todos/getTodos",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get("http://localhost:4000/todos");
      return response.data; //action payload
    } catch (error) {
      return rejectWithValue([], error);
    }
  }
);
export const postAsyncTodos = createAsyncThunk(
  "todos/postTodos",
  async (payload, { rejectWithValue }) => {
    try {
      const response = await axios.post("http://localhost:4000/todos", {
        id: Date.now(),
        title: payload.title,
        completed: false,
      });
      return response.data; //action payload
    } catch (error) {
      return rejectWithValue([], error);
    }
  }
);
export const toggleAsyncTodos = createAsyncThunk(
  "todos/toggleTodos",
  async (payload, { rejectWithValue }) => {
    try {
      const response = await axios.put(`http://localhost:4000/todos/${payload.id}`, {
        title: payload.title,
        completed: payload.completed,
      });
      return response.data; //action payload
    } catch (error) {
      return rejectWithValue([], error);
    }
  }
);

export const deleteAsyncTodos = createAsyncThunk(
  "todos/deleteTodos",
  async (payload, { rejectWithValue }) => {
    try {
     await axios.delete(`http://localhost:4000/todos/${payload.id}`);
      return {id:payload.id} ;
    } catch (error) {
      return rejectWithValue([], error);
    }
  }
);

const initialState = {
  todos: [],
  loading: false,
  error: null,
};

const todoSlice = createSlice({
  name: "todos", //state name
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const newTodo = {
        id: Date.now(),
        title: action.payload.title,
        completed: false,
      };
      state.todos.push(newTodo);
    },
    toggleTodo: (state, action) => {
      const selectedTodo = state.todos.find((s) => s.id === action.payload.id);
      selectedTodo.completed = !selectedTodo.completed;
    },
    deleteTodo: (state, action) => {
      const filteredTodo = state.todos.filter((s) => s.id != action.payload.id);
      state.todos = filteredTodo;
    },
  },
  extraReducers: {
    [getAsyncTodos.fulfilled]: (state, action) => {
      return { ...state, error: null, loading: false, todos: action.payload };
    },
    [getAsyncTodos.pending]: (state, action) => {
      return { ...state, error: null, loading: true, todos: [] };
    },
    [getAsyncTodos.rejected]: (state, action) => {
      return {
        ...state,
        error: action.error.message,
        loading: false,
        todos: [],
      };
    },
    [postAsyncTodos.fulfilled]: (state, action) => {
      state.todos.push(action.payload);
    },
    [toggleAsyncTodos.fulfilled]: (state, action) => {
      const selectedTodo=state.todos.find(s=>s.id===action.payload.id) ;
      selectedTodo.completed=action.payload.completed;

    },
    [deleteAsyncTodos.fulfilled]: (state, action) => {
      state.todos=state.todos.filter(s=>s.id!==action.payload.id)
      

    },
  },
});

export const { addTodo, toggleTodo, deleteTodo } = todoSlice.actions;

export default todoSlice.reducer;
