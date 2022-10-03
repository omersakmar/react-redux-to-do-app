import { configureStore } from "@reduxjs/toolkit";
import todoReducers from "../slices/todoReducers";

export const store = configureStore({
  reducer: {
    todo: todoReducers,
  },
});
