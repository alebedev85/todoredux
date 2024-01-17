import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: 'todos',
  initialState: {
    todos: []
  },
  reducers: {
    addToDo(state, action) {
      state.todos.push({
        id: new Date().toISOString(),
        text: action.payload.text,
        completed: false,
      })
    },
    deleteToDo(state, action) {
      state.todos = state.todos.filter(todo => todo.id !== action.payload.id)
    },
    toggleTodoComplete(state, action) {
      const toggledToDo = state.todos.find(todo => todo.id === action.payload.id)
      toggledToDo.completed = !toggledToDo.completed
    },
  }
});

export const { addToDo, deleteToDo, toggleTodoComplete } = todoSlice.actions

export default todoSlice.reducer
