import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isNavbarOpen: false,
};

export const navbarSlice = createSlice({
  name: "navbar-open",
  initialState,
  reducers: {
    toggleNavbarOpenAndClose: (state, action) => {
      console.log(action);
      state.isNavbarOpen = action.payload;
    },
  },
});

export const { toggleNavbarOpenAndClose } = navbarSlice.actions;

export default navbarSlice.reducer;
