import { configureStore } from "@reduxjs/toolkit";
import navBarReducer from "./slices/navbarSlice";

export const store = configureStore({
  reducer: {
    navbar: navBarReducer,
  },
});
