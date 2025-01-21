import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuth: null,
  email: "",
  password: "",
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
  },
});

export const { saveEmail, savePassword, setIsAuth } = loginSlice.actions;
export default loginSlice.reducer;
