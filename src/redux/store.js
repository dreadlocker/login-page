import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "@/redux/features/loginSlice"; // Replace with your reducer

const store = configureStore({
  reducer: {
    loginReducer,
  },
});

export default store;
