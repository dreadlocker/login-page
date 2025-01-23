import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuth: null,
  email: "",
  password: "",
  successMes: "Success",
  isValidEmail: null,
};

export const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    saveEmail: (state, action) => {
      state.email = action.payload;
    },
    savePassword: (state, action) => {
      state.password = action.payload;
    },
    setIsAuth: (state, action) => {
      state.isAuth = action.payload;
    },
    setSuccessMes: (state, action) => {
      state.successMes = action.payload;
    },
    setIsValidEmail: (state, action) => {
      state.isValidEmail = action.payload;
    },
  },
});

export const {
  saveEmail,
  savePassword,
  setIsAuth,
  setSuccessMes,
  setIsValidEmail,
} = loginSlice.actions;
export default loginSlice.reducer;
