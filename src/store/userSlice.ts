import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { User as FirebaseUser } from "firebase/auth";

const userSlice = createSlice({
  name: "user",
  initialState: {
    email: "",
    fullname: "",
    username: "",
    uid: "",
    loading: true,
  },
  reducers: {
    setUser: (
      state,
      action: PayloadAction<{
        email: string;
        fullname: string;
        username: string;
        uid: string;
      }>
    ) => {
      state.email = action.payload.email;
      state.fullname = action.payload.fullname;
      state.username = action.payload.username;
      state.uid = action.payload.uid;
      state.loading = false;
    },
    clearUser: (state) => {
      state.email = "";
      state.fullname = "";
      state.username = "";
      state.uid = "";
      state.loading = false;
    },
  },
});

const userReducer = userSlice.reducer;
const { setUser, clearUser } = userSlice.actions;

export { userReducer, setUser, clearUser };
