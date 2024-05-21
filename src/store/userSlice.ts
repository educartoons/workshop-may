import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { User as FirebaseUser } from "firebase/auth";

const userSlice = createSlice({
  name: "user",
  initialState: {
    email: "",
    uid: "",
  },
  reducers: {
    setUser: (
      state,
      action: PayloadAction<{
        email: string;
      }>
    ) => {
      state.email = action.payload.email;
    },
    clearUser: (state) => {
      state.email = "";
    },
  },
});

const userReducer = userSlice.reducer;
const { setUser, clearUser } = userSlice.actions;

export { userReducer, setUser, clearUser };
