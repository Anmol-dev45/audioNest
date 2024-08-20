import { configureStore } from "@reduxjs/toolkit";

import authReducer from "./authSlice";
const store = configureStore({
  reducer: {
    aurh: authReducer,
  },
});

export default store;
