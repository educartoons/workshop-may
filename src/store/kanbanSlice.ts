import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type Task = {
  id: string;
  title: string;
  description: string;
  priority: string;
};

type Tasks = {
  todo: Task[];
  inprogress: Task[];
  done: Task[];
};

const initialState: Tasks = {
  todo: [],
  inprogress: [],
  done: [],
};

type TaskStatus = keyof typeof initialState;

const kanbanSlice = createSlice({
  name: "kanban",
  initialState: initialState,
  reducers: {
    addTask: (
      state,
      action: PayloadAction<{
        task: Task;
      }>
    ) => {
      state.todo.push(action.payload.task);
    },
    moveTask: (
      state,
      action: PayloadAction<{
        task: Task;
        origin: TaskStatus;
        target: TaskStatus;
      }>
    ) => {
      const { origin, target, task } = action.payload;
      state[origin] = state[origin].filter((item) => item.id !== task.id);
      state[target].push(task);
    },
  },
});

const kanbanReducer = kanbanSlice.reducer;
const { addTask, moveTask } = kanbanSlice.actions;

export { kanbanReducer, addTask, moveTask };
