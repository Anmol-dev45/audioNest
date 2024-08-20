import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  status: false,
  currentUser: null,
};
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login(state, action) {
      state.status = true;
      state.currentUser = action.payload.currentUser;
    },

    logout(state) {
      state.status = false;
      state.currentUser = null;
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
