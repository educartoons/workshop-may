import { configureStore } from "@reduxjs/toolkit";
import { kanbanReducer } from "./kanbanSlice";

const store = configureStore({
  reducer: {
    kanban: kanbanReducer,
  },
});

type RootState = ReturnType<typeof store.getState>;

export { store };

export type { RootState };
