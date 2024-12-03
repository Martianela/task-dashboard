import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tasks: [],
};

const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask(state, action) {
      state.tasks.push(action.payload);
      console.log(state.tasks);
    },
    editTask(state, action) {
      const index = state.tasks.findIndex((task) => {
        const plainTask = JSON.parse(JSON.stringify(task)); // Finalize proxy for comparison
        console.log("Finalized Task:", plainTask);
        console.log("Comparing with ID:", action.payload.id);
        return plainTask.id === action.payload.id;
      });
      console.log("edit tasking is called");

      if (index !== -1) state.tasks[index] = action.payload;
      console.log("Tasks in state:", state.tasks);
      console.log("ID being searched:", action.payload.id);
      console.log("Index found:", index);
    },
    deleteTask(state, action) {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    },
    toggleTaskCompletion(state, action) {
      const task = state.tasks.find((task) => task.id === action.payload);
      if (task) task.completed = !task.completed;
    },
  },
});

export const { addTask, editTask, deleteTask, toggleTaskCompletion } =
  tasksSlice.actions;

export default tasksSlice.reducer;
