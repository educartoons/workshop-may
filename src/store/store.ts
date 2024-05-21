import { configureStore } from "@reduxjs/toolkit";
import { kanbanReducer } from "./kanbanSlice";
import { userReducer } from "./userSlice";

const store = configureStore({
  reducer: {
    kanban: kanbanReducer,
    user: userReducer,
  },
});

type RootState = ReturnType<typeof store.getState>;

export { store };

export type { RootState };
