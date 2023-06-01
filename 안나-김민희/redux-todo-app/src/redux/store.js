import { configureStore, applyMiddleware } from "@reduxjs/toolkit";
import todoSlice from "./todoSlice";
import thunk from "redux-thunk";

export const store = configureStore(
  {
    reducer: {
      todo: todoSlice,
    },
  },
  applyMiddleware(thunk)
);
